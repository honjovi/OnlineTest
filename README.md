Socket.IO使うテスト
====

### cocos2d-xの準備

cocos2d-xのプロジェクトを、clientディレクトリと統合する。

```
> git clone https://github.com/honjovi/OnlineTest.git
> mv client client.orig
> cocos new client -l js
> cp -r client.orig/* client/.
> rm -f client.orig
```

※Windowsだと`cp`じゃなくて`xcopy`。

```
> xcopy /YIE client.orig client
```

### ビルド

```
> npm init
> npm install grunt --save-dev
> npm install grunt-concat --save-dev
> npm install grunt-watch --save-dev
> grunt concat
```

### ブラウザで起動

```
> cocos run -p web
```
