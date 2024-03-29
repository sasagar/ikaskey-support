---
date: 2023-07-03
author: スーパーマンタロー
title: よくある質問（2023年7月版）
description: よくある質問についてまとめてみました。
excerpt: よくある質問についてまとめてみました。
category:
    - おしらせ
tag:
    - Misskey
    - 使い方
---


::: danger 以下の内容はFAQページに移設されました

以下の内容はFAQページに移設されており、内容はFAQページが最新です。参照用にこのページが残っていますが、FAQページをご確認ください。  
[FAQページはこちら](/FAQ.html)

:::

# FAQ

よくある質問についてまとめてみました。  
何かあれば追記したり新たに用意することもあるかも知れません。

::: details タイムラインの種類はどうなっていますか？

- ホーム(HTL): いわゆるTwitterのTLと同じ。フォローした人だけを見られる
- ローカル(LTL): いかすきー内のNoteだけを見られる
- ソーシャル(STL): いかすきーのNote全部 + 自分がフォローしているアカウント（外部含め）のNoteを見られる
- グローバル(GTL): いかすきー鯖に情報が来ている外部サーバーのNoteを含めて全部を見られる

鯖缶のオススメはソーシャルです。

:::

::: details 公開範囲の設定はどうなっていますか？（種類について）

- パブリック: 連合（外部サーバー）含めて各所に配信される。誰でも見れる。
- ホーム: 全ての人に対してノートが公開される。ただし、フォロワー以外のローカルタイムライン、ソーシャルタイムライン、グローバルタイムラインにはノートは流れない。
- フォロワー: フォローしている人たちに届く。フォロワーだけ見れる。（外部サーバーのアカウントでも見れる。）
- ダイレクト: 対象の人にだけ届く。いわゆるDM。

コレとは別に「連合なし」オプションがあります。  
連合なしにすると、外部サーバーに配信されなくなります。別サーバーからのフォロワーが居る場合にはそこで見ることができないようになります。

:::

::: details 公開範囲の指定の仕方はどうすれば良いですか？（設定について）

いずれも投稿するときに上部に表示される項目から設定できます。  
デフォルトを変更したい場合には「設定」→「プライバシー」から「公開範囲を記憶する」をONにして、固定したい設定を選びます。

:::

::: details チャンネルとはなんですか？

Misskeyには「チャンネル」という機能があります。  
しかし、多くの人が気づかないことからわかる通り、非常に見つけづらい物です。  
ただ、各TLから切り離されており、「情報を保管する」という点でとても優秀です。  
また、TLから切り離されているので、「外部に公開しない」という点でも良い部分があります。

ただ、裏を返すと「隠れたところで好き勝手できてしまう」という事もありますので、良い思いをしない人が生まれる人が居るのも否めません。  
また、SNSという場において「わざわざ隠す」必要がどれだけあるのかというのは疑問が残る部分です。

ということで、いかすきーにおいては鯖缶のみがチャンネル作成できるということにしています。  
~~権限設定ができない都合上、誰でもできてしまいますが、ルール上そのようにしている形です。~~

見つけ方は「もっと見る」→「チャンネル」と進み、「検索」から空欄のまま「検索」ボタンを押すと全てのチャンネルが表示されます。

チャンネルに投稿する際は「チャンネルに投稿」ボタンから投稿する必要がありますのでご注意ください。

また、チャンネルはフォローすることができ、フォローしたチャンネルに対する投稿は全てTLに表示されます。

:::

::: details アプリはありますか？

公式アプリはありません。サードパーティー製のアプリがiOS/Android向けにリリースされていますが、それぞれの挙動は各開発者にお問い合わせください。

なお、Webアプリ(PWA)という仕組みを利用して、アプリ化させることが可能です。

### Android

Misskeyを開いた際に下部に「インストール」の文言が出てくると思いますので、そちらに従ってインストールを行うと、ホーム画面に追加されます。  
（機種やOSのバージョンによって異なる場合があります。）

### iOS

SafariでMisskeyを開き、共有ボタンから「ホームに追加」を選択することでホームに追加され、アプリのように利用することができる様になります。  
（Safari以外ではPWA登録できませんのでご注意ください。）

:::

::: details 閲覧注意について

閲覧注意を付けなければいけない物として、以下のような物が挙げられます。

- 18歳未満が閲覧することが望ましくない性的な内容を含む物
- 衝撃を与える可能性のある暴力的な内容を含む物

これは文字も画像も映像も対象となります。  
内容に依ってはモデレーション対応として管理者・モデレーターが閲覧注意を設定することがあります。

テキストについては「内容を隠す」を利用したり、画像については投稿添付後にサムネイルをクリックして「閲覧注意にする」を選択するなどして対応してください。  
また、R18な内容をアップするためのチャンネルもありますのでご利用下さい。

悪質と判断された場合には、凍結対応が行われる場合があります。

:::

::: details 通報したけど対応されてないように思います

通報については都度判断しています。  
内容に依って対応も異なります。また管理者として問題ないと判断する場合もあります。

通報頂いたもののうち、解決済みとされた物については何かしらの対応を行っていますので、ご理解ください。

:::

::: details Discordはありますか？

あります。  
ただし、モデレーション簡略化のために、既に参加している人からの招待のみで参加可能としています。  
誰かに招待を依頼して参加してください。

なお、いかすきーに居ない方の招待はおやめください。

:::

::: details 連合とはなんですか？

Misskeyは各サーバー（インスタンス）が相互にやりとりする事で連携するActivityPubという仕組みの上に成り立っています。  
その「相互にやり取りをする関係性」にあるサーバーをまとめて「連合」と呼びます。

:::

::: details インスタンスとはなんですか？

Misskeyは、この投稿時点で割と最近「インスタンス」という呼び方から「サーバー」という呼び方に変わりましたが、いずれも一つ一つのMisskeyを指しています。  
Misskeyサーバー1つ1つが、かつてはMisskeyのインスタンスと呼ばれていました。

一部の説明サイトなどは、まだ「インスタンス」と書いているかもしれませんが、「サーバー」と同義だと思って大丈夫です。

:::
