# Node.jsでプログラミング問題を解く

- 共通の条件：Node.js上で動かすこと。
- 採点（計10点）
    - 必須課題：7点
    - 発展課題：3点

# 必須課題

## 問題1：FizzBuzz

（回答: 01.js）

### 問題文

引用元: [練習問題 - プログラミングスレまとめ in VIP](http://vipprog.net/wiki/exercise.html)

> ルールは以下の通り
> 
> 1. 1から順番に数を表示する
> 2. その数が3で割り切れるなら"Fizz"、5で割り切れるなら"Buzz"、両方で割り切れるなら"FizzBuzz"と表示する

- 本課題のローカルルール
    - 今回は `15` まで数字をカウントすること
    - 数字は改行で区切ること（1行に1つの数字を出力する）
    - できるだけ制御構文（for, ifなど）を使うこと
        - 使わずやっても提出できるが、

実行例

```
$ node 01.js
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
```

# 発展課題

以下は任意です（満点を取るには必要です）。下記から好きな問題を **1つ以上** 選んで解いてください。
（問題を解くごとに `## 問題2` 、 `## 問題3` と見出しを増やし、それぞれ問題文を書くこと）

- [練習問題 - プログラミングスレまとめ in VIP](http://vipprog.net/wiki/exercise.html)
- [言語処理100本ノック 2015](http://www.cl.ecei.tohoku.ac.jp/nlp100/#ch1)
- それ以外のサイト（引用元サイトの「タイトル」と「リンク」を必ず書くこと）

## 問題2（これ以降任意）

（回答: 02.js）

### 問題文
オリンピックの開催年を出力するプログラム

引用元: 

練習問題　プログラミングスレまとめ
http://vipprog.net/wiki/exercise.html#o006da2d



近代オリンピック(夏季)の開催年と第何回開催(第Nオリンピアード)かを出力するプログラムを出力せよ。
第1回は1896年(アテネ)。
第6回(1916年:ベルリン)は第一次世界大戦にsより開催されなかった。
第12回(1940年:ヘルシンキ), 第13回(1944年:ロンドン)は第二次世界大戦により開催されなかった。
開催されなかった年は出力しないこと。
開催されなかった場合もオリンピアードの回数はカウントされるので、2012年(ロンドン)は第30回となる。

## 問題3

（回答: 03.js）

### 問題文
数当てゲーム

引用元: 

練習問題　プログラミングスレまとめ
http://vipprog.net/wiki/exercise.html#o006da2d



これは答えの数を探すゲームです。適当な数を入れると正解よりも大きいか小さいか,または正解であるか出力されます。
それを繰り返すことで答えを探すことができます。このゲームを作成しなさい。答えの数は乱数を使って毎回別の答えを用意しましょう。