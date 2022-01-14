// num = 777;

// console.log("Hello, World Out!");

// console.log(num);

// num = 10;
// console.log(num);

// let student = {
//                korean:90,
//                english:80,
//                math:70,
//                science:60
//               };

// console.log(student.korean);

// console.log(student["korean"]);

function consoleLog(memo){
    memo = ("입력값은 " + memo + "입니다!")
    console.log(memo);
    return memo;
};

consoleLog("김도현");
consoleLog("박세정");

let name = "김도현";
let string = `Web을 공부하고 있는 ${name} 입니다`

consoleLog(string);