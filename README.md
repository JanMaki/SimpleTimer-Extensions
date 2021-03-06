# SimpleTimer-Extensions
DiscordBot『[SimpleTimer](https://source.simpletimer.dev/)』のブラウザ用拡張機能です。  
Discord上で動かしているタイマーの時間をブラウザ上で確認することができます。  
回線などのラグで1~3秒ほどの誤差が起こる可能性があります。

## 動作確認ブラウザ
・Microsoft Edge  
・Google Chrome  
・Mozilla Firefox  

## 導入方法
### Chromeウェブストアからの導入（対応ブラウザ：Edge・Chrome）
1. [ChromeウェブストアのSimpleTimer-Extentionsのページ](https://chromestore.ext.simpletimer.dev
)移動します
2. 青色の"Chromeに追加"ボタンを押します
### FirefoxBrowserADD-ONSからの導入（対応ブラウザ：Firefox）
1. [FirefoxBrowserADD-ONSのSimpleTimer-Extentionsのページ](http://mozilla.ext.simpletimer.dev/)に移動します
2. 青色の"Firefoxへ追加"ボタンを押します
### ファイルをダウンロードして導入（パソコンがある程度わかる方向け）
1. GitHubの[Release](https://github.com/JanMaki/SimpleTimer-Extensions/releases/)を開く
#### GoogleChromeをご利用の場合
2. 最新のバージョン(-firefoxがついていないもの)の"Source code (zip)"をクリックし、ファイルをダウンロードし、解凍する
3. Chrome右上の"︙"のアイコンを押す
4. "その他機能"->"拡張機能"を開く
6. 右上の"デベロッパーモード"のスイッチがONになっていなかったらクリックをする
7. "パッケージ化されていない拡張機能を読み込む"を押す
8. 表示されたダイアログで解凍したファイルを開く
9. エラーなどがなければ拡張機能に関する情報が表示される
#### MicrosoftEdgeをご利用の場合
2. 最新のバージョン(-firefoxがついていないもの)の"Source code (zip)"をクリックし、ファイルをダウンロードし、解凍する
3. Edge右上の"…"のアイコンを押す
4. "拡張機能"->"拡張機能の管理"を開く
6. 左のメニューの"開発者モード"のスイッチがONになっていなかったらクリックをする
7. "展開して読み込み"を押す
8. 表示されたダイアログで解凍したファイルを開く
9. エラーなどがなければ拡張機能に関する情報が表示される
#### Firefoxをご利用の場合
2. 最新のバージョンの"SimpleTimer-Extensions-x.x.x-firefox.zip"をクリックし、ファイルをダウンロードする. 
3. Firefox右上の"≡"のアイコンを押す
4. "アドオンとテーマ"を開く
5. 右上の"⚙"のアイコンを押し、"ファイルからアドオンをインストール..."をクリックする
6. 表示されたダイアログでダウンロードしたファイルを開く
7. エラーなどがなければ拡張機能に関する情報が表示される

## 使用方法
1. タイマーを動かすチェンネルで"/chrome"を実行し、ID（数字の羅列）を手に入れる
2. Chromeに導入されているSimpleTimer-Extensionsのアイコンをクリックする
3. 開いたメニューの上にあるIDの入力欄に手に入れたIDを手に入れる
4. タイマーがチャンネルで動いていると、タイマーの内容がメニューから確認できます

## 誤差が多いときの対処法
### タイムゾーンを確認する
#### Windowsをお使いの場合
1. "設定"を開く
2. 左のメニューより"時刻と言語"を選び、"日付と時刻"をクリックする
3. タイムゾーンを"(UTC+09:00)大阪、札幌、東京"にする
#### Macをお使いの場合
[Appleの公式のユーザーガイド](https://support.apple.com/ja-jp/guide/mac-help/mchlp2996/mac)を参照して設定し、
"時間帯"のタブの下部の時間帯が"日本標準時"になっているかを確認してください。
### 時刻の同期を行う
#### Windowsをお使いの場合
1. "設定"を開く
2. 左のメニューより"時刻と言語"を選び、"日付と時刻"をクリックする
3. 少し下にある"今すぐ同期"を押す
#### Macをお使いの場合
1. トップ画面左上"🍎"マークを押して"システム環境設定…"をクリックする
2. "日付と時刻"を開く
3. 日付と時刻を自動的に設定内の文字列を確認する  
もし中身がない時は、`time.google.com`を使用します
5. "ターミナル"アプリを開く
6. `sudo sntp -sS <address>`を実行する（`<address>`の部分は3.で確認した文字列に変更してください）  
  例： `sudo sntp -sS time.google.com`  
  この際、パスワードの入力などを求められる場合があります。
