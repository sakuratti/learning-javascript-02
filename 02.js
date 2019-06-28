//オリンピック開催年表示

for (var i = 1896; i <= 2020; i += 4){
    switch(i){
        case 1916:
            break;
        
        case 1940:
            break;

        case 1944:
            break;

        case 2020:
            console.log("第32回　東京でもうすぐ！");
            break;

        default:
            var times = (i - 1892) / 4;
            process.stdout.write("第" + times + "回");
            console.log(i + "年");
            break;

    }
}
