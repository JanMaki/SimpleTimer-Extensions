//IDの変数 保存されているIDから取得
let id = localStorage.getItem("ID")

//IDの入力欄を取得
const idInputElement = document.getElementById("id_input")

//入力欄の値にIDを代入
idInputElement.value = id

//定期的に処理をするタスク
const task = function(){
    //入力欄の値を取得
    const input = idInputElement.value
    //入力欄が更新されているかを確認
    if (input !== id){
        //IDを変更
        id = input
        //IDを保存
        localStorage.setItem("ID", id)
    }

    //TODO 以下タイマーの更新処理を行う
    document.getElementById('timer-1').innerHTML = ""
};

//タスクを開始
setInterval(task, 500);