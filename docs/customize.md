---
title: カスタマイズ情報
description: Misskeyで活用できるカスタマイズ情報を紹介します。
sidebarDepth: 5
---

# カスタマイズ情報

以下の内容はMisskeyで使う事のできる情報です。  
一定のチェックは行っていますが、動作保証はありません。  
利用に際してはご自身の責任において利用して下さい。

（作者等は敬称略です。）

## カスタムCSS

### カスタムCSS利用方法

「設定」→「全般」→最下部の「カスタムCSS」 と進み、該当コードを追記します。  
誤ったコードを記載すると、全体が正しく表示されなくなる場合がありますので注意してください。

必要に応じて一部のコードを変更する必要（チャンネルのIDを指定する等）がある場合があります。

::: warning :hasを持つ記述について

一部のブラウザで正しく動作しない（未対応のブラウザがある）ので、必要に応じて自身のブラウザについて確認を行ってください。

:::

### カスタムCSSコード各種

#### チャンネル投稿時のノートの背景色を変える

参考: [Misskingway](https://invillage-outvillage.com/@wildfangkatze/pages/1682180199159)

``` css
/* チャンネル投稿時のノート入力部分の色を変える */
.x8B0D[placeholder="チャンネルに投稿..."]{
  background-color: rgba(40, 40, 60, 1) !important;
}
```

#### リアクションデッキをみやすくする

参考: [Misskingway](https://invillage-outvillage.com/@wildfangkatze/pages/1682180199159)
参考の参考: [misskey.io](https://misskey.io/notes/9d8kl0mdfg)

サイズは作者さんの環境に合わせているとのことですので、必要に応じて調整を行ってください。

##### スマホ向けサイズ

``` css
/* ノート作成時のリアクションボタンから呼び出す画面 */
.xpAOc {
  width: 400px !important;
  height: 350px !important;
}
.omfetrab>.emojis section>.body {
  display: block !important;
}
/* 絵文字選択 */
.omfetrab {
  width: 48em !important;
  height: 500px !important;
}
/* 絵文字のサイズ */
.omfetrab>.emojis section>.body>.item>.emoji {
  height: 2em !important;
}
.omfetrab>.emojis section>.body>.item {
  contain: none !important;
  padding: 4px !important;
  aspect-ratio: auto !important;
  font-size: 14px !important;
  width: auto !important;
  height: auto !important;
}
```

##### PC向けサイズ

``` css
/* ノート作成時のリアクションボタンから呼び出す画面 */
.xpAOc {
  width: 550px !important;
  height: 500px !important;
}
.omfetrab>.emojis section>.body {
  display: block !important;
}
/* 絵文字選択 */
.omfetrab {
  width: 40em !important;
  height: 500px !important;
}
/* 絵文字のサイズ */
.omfetrab>.emojis section>.body>.item>.emoji {
  height: 2em !important;
}
.omfetrab>.emojis section>.body>.item {
  contain: none !important;
  padding: 4px !important;
  aspect-ratio: auto !important;
  font-size: 15px !important;
  width: auto !important;
  height: auto !important;
}
```

#### タイムラインに流れてくるチャンネル投稿の文字色を変える

参考: [Misskingway](https://invillage-outvillage.com/@wildfangkatze/pages/1682180199159)

``` css
/* 流れてくるチャンネルの文字色を変える */
.x5yeR:has(.xww2J[href^="チャンネルURLを指定"]) {
  color: 色コードを指定;
}
```

#### アイコンをクリックしてもプロフィールに飛ばないようにする

参考: [Misskingway](https://invillage-outvillage.com/@wildfangkatze/pages/1682180199159)

``` css
/* アイコンクリックでプロフィールに飛ばないようにする */
.xrEoV {
  pointer-events: none;
}
```

#### ノート投稿部分の色々を消す

参考: [Misskingway](https://invillage-outvillage.com/@wildfangkatze/pages/1682180199159)

``` css
/* ノート投稿部分のリアクションのアレを消す */
._button.x9WHn:has(.ti-icons) {
  display:none;
}
/* ノート投稿部分の#を消す */
._button.xjAub:has(.ti-hash) {
  display:none;
}

/* ノート投稿部分の@を消す */
._button.xjAub:has(.ti-at) {
  display:none;
}

/* 連合なしのときの注意文言を非表示 */
.xxK0J {
  display:none;
}
```

#### チャンネル投稿のボタンの色を変更する

参考: [Misskingway](https://invillage-outvillage.com/@wildfangkatze/pages/1682180199159)

``` css
/* チャンネル投稿のボタンの色を変更する */
.xze7V{
  background:MediumSpringGreen !important;
}
```

## プラグイン

### プラグイン利用方法

「設定」→クライアント設定内「プラグイン」→「プラグインをインストール」 に進み、コードを貼り付けます。  
一定の動作確認を行っていますが、動作保証はありません。  
利用に際してはご自身の責任において利用して下さい。

### プラグインコード各種

#### ネコ化強制解除

自分の投稿のネコ化を強制的に解除します。

作者: [めろん](https://ikaskey.bktsk.com/@melon)

``` javascript
/// @ 0.12.4

### {
  name: "猫語はちょっと恥ずかしいにゃ",
  version: "1.0.0",
  author: "めろん",
  description: "猫化解除にゃ！！"
}

let convert_char_emojis = [

  ["な", "\(な\)"],
]

Plugin:register_post_form_action(`猫化解除にゃ！` @(form, update) {
  var res = form.text
  for (let i, convert_char_emojis.len) {
    let char_emoji = convert_char_emojis[i]
    res = res.replace(char_emoji[0], char_emoji[1])
  }
  update("text", res)
})
```

#### いかすきー募集用テンプレート

いかすきーで募集をかけるときに使えるテンプレートが一気に投稿欄に入力されます。

作者: [めろん](https://ikaskey.bktsk.com/@melon)
協力: [あるみ](https://ikaskey.bktsk.com/@arumi_toon)

``` javascript
/// @ 0.12.4

### {
  name: "スプラ募集テンプレプラグイン",
  version: "0.1.3",
  author: "めろん+あるみさん協力",
  description: "募集時テンプレ"
}

Plugin:register_post_form_action(`募集時テンプレ` @(form, template) {
  var res = form.text
  res = "$[x2 :boshu:] $[x2 :ato数:]
種類 | $[fg.color=a260bf プラベ] or $[fg.color=ff0000 オープン] or $[fg.color=fd7e00 サーモンラン]募集人数 
通話の有無|聞き専かどうか
一言 |
URL  |
#いかすきー募集"
  template("text", res)
})
```
