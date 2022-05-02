# SimpleTimer-Extensions
DiscrodBot『[SimpleTimer](https://source.simpletimer.dev/)』のChrome用拡張機能です。  
Discord上で動かしているタイマーの時間をブラウザ上で確認することができます。  
回線などのラグで1~3秒ほどの誤差が起こる可能性があります。

## 導入方法
### Chromeウェブストアからの導入
#### ！現在ChromeStoreからの導入は準備中です！
### ファイルをダウンロードして導入（パソコンがある程度わかる方向け）
1. GitHubのReleaseを開く
2. 最新のバージョンの"Source code (zip)"をクリックし、ファイルをダウンロードし、解凍する
#### GoogleChromeをご利用の場合
3. Chrome右上の"︙"のアイコンを押す
4. "その他機能"->"拡張機能"を開く
6. 右上の"デベロッパーモード"のスイッチがONになっていなかったらクリックをする
7. "パッケージ化されていない拡張機能を読み込む"を押す
8. 表示されたダイアログで解凍したファイルを開く
9. エラーなどがなければ拡張機能に関する情報が表示される
#### MicrosoftEdgeをご利用の場合
3. Edge右上の"…"のアイコンを押す
4. "拡張機能"->"拡張機能の管理"を開く
6. 左のメニューの"開発者モード"のスイッチがONになっていなかったらクリックをする
7. "展開して読み込み"を押す
8. 表示されたダイアログで解凍したファイルを開く
9. エラーなどがなければ拡張機能に関する情報が表示される


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
1. "ターミナルを開く"
2. `sudo ntpdate -u time.apple.com`*を実行する。  
*NTPサーバーを変更している場合は、`time.apple.com`の部分を適宜変えてください
