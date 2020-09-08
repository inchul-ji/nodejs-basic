var second = require("./second.js"); // 모듈 가져오기

function f1() {
  console.log("f1 함수 호출");
}

console.log("HelloWorld");
console.log("안녕하세요.");

var a1 = 100;
var a2 = "문자열1";

console.log("a2: %d, a2: %s", a1, a2);

f1();
second.f2();
