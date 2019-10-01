module.exports = function zeros(expression) {

    let arr = expression.split("*"); //
    let arrUsual = [];
    let arrEven = [];
    let arrOdd = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf('!!') > 0) {
            arr[i] = +arr[i].replace("!!", "");
            if (!arr[i] % 2 )
                arrOdd.push(arr[i])
            else
                arrEven.push(arr[i])
        }
        else
            arrUsual.push(+arr[i].replace("!", ""));

    }

    let countOfTwo=0;
    let countOfFive=0;

    for(let i=0;i<arrUsual.length;i++){
        for(let j=arrUsual[i];j>0;j--){
            let t = j;
            while (t % 5 == 0) {
                countOfFive++;
                t /= 5;
            }

            t = j;
            while (t % 2 == 0) {
                countOfTwo++;
                t /= 2;
            }
        }
    }

    for(let i=0;i<arrOdd.length; i++){
        for(let j=arrOdd[i];j>0;j-=2){
            let t = j;
            while (t % 5 == 0) {
                countOfFive++;
                t /= 5;
            }

            t = j;
            while (t % 2 == 0) {
                countOfTwo++;
                t /= 2;
            }
        }
    }

    for (let i=0;i<arrEven.length;i++){
        for(let j=arrEven[i];j>0;j-=2){
            let t = j;
            while (t % 5 == 0) {
                countOfFive++;
                t /= 5;
            }

            t = j;
            while (t % 2 == 0) {
                countOfTwo++;
                t /= 2;
            }
        }
    }

    return Math.min(countOfTwo,countOfFive);
}
