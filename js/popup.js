//IDの変数 保存されているIDから取得
let id = localStorage.getItem("ID")

//IDの入力欄を取得
const idInputElement = document.getElementById("id_input")

//入力欄の値にIDを代入
idInputElement.value = id

//定期的に処理をするタスク
const task = function(){

    //入力欄の値を取得
    const input = idInputElement.value.trim()
    //入力の内容が数値かを確認
    if (isNaN(input)) {
        //アラートを出す
        document.getElementById("alert").innerHTML = "IDの形式が無効です"
        //1~4を確認
        for (let i = 1; i < 5; i++){
            //時間を00:00にする
            document.getElementById("timer-"+i).innerHTML = "<h2>00:00</h2>"
        }
        return
    }else {
        //アラートを消す
        document.getElementById("alert").innerHTML = ""
    }
    //入力欄が更新されているかを確認
    if (input !== id){
        //IDを変更
        id = input
        //IDを保存
        localStorage.setItem("ID", id)
    }

    //リクエストを作成
    const request = new XMLHttpRequest()
    //接続の設定
    request.open("GET", "http://localhost:8080/timers/"+id, true)
    request.responseType = "json"
    //完了時の処理
    request.onload = function () {
        //結果を取得
        const data = this.response;
        //タイマーのデータを取得
        const timers = data["timers"]
        //タイマーがあるかを確認
        if (timers.length === 0 && id !== ""){
            //アラートを出す
            document.getElementById("alert").innerHTML = "無効なIDです"

            //1~4を確認
            for (let i = 1; i < 5; i++){
                //時間を00:00にする
                document.getElementById("timer-"+i).innerHTML = "<h2>00:00</h2>"
            }
        }else {
            //0~3を確認
            for (let i = 0; i < 4; i++) {
                //タイマーの情報を取得
                const timer = timers[i]

                //分数
                let minute = 0
                //秒数 タイマーの情報から秒数を取得
                let seconds = timer["seconds"]

                //0秒じゃないかを確認
                if (seconds !== 0){
                    //タイムスタンプを見て時間を調整
                    seconds -= (new Date().getTime() - timer["timeStamp"]) / 1000

                    if (seconds < 0) seconds = 0

                    //分数を取得
                    minute = Math.floor(seconds / 60)
                    //秒数から分のぶんを引く
                    seconds = Math.floor(seconds - minute * 60)
                }

                //時間のテキストを作成
                const timeText = ( '0' + minute ).slice( -2 )+":"+( '0' + seconds ).slice( -2 )

                //代入
                document.getElementById("timer-"+(i+1)).innerHTML = "<h2>"+timeText+"</h2>"
            }
        }
    }
    //接続を送信
    request.send()
};

//タスクを開始
setInterval(task, 500);