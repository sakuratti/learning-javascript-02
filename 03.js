//数当てゲーム

var answer = Math.floor(Math.random() * 100);

var challenge = 1;

for(var question; question == answer; challenge++){
    process.stdout.write("私が想像した数字は何ですか? :");
    //ここでquestionに入力した値を代入したい。

    if(question == answer){
        console.log("おめでとうございます。正解です。");
        console.log(challenge + "回目の挑戦でした。");
    }else{
        console.log("不正解です。");
    }
}