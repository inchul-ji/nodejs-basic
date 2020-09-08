/*
    Buffer Module은 require()으로 모듈을 만들 필요없다.
    바로 Buffer를 사용하면 된다.
*/

var buf1 = Buffer.alloc(10); // 10 byte 기억공간 생성되며, 1 byte씩 공간이 생기고 0으로 초기화한다.
/*
    1 byte씩 16 진수로 표현된다.
    <Buffer 00 00 00 00 00 00 00 00 00 00>
*/
console.log(buf1);

var buf2 = Buffer.allocUnsafe(10); // 1byte씩 10byte 공간이 생기고, 초기화 과정이 없다.
console.log(buf2);

var size1 = Buffer.byteLength(buf1);
console.log("size1:", size1);

console.log("bytes:", buf1.length);

var buf3 = Buffer.from("abcd");
var buf4 = Buffer.from("안녕하세요.");

console.log(buf3);
console.log(buf4);

var buf5 = Buffer.from("cccc");
var buf6 = Buffer.from("cccc");
var buf7 = Buffer.from("aaaa");
var buf8 = Buffer.from("dddd");

var v1 = Buffer.compare(buf5, buf6);
console.log(v1);

var v2 = Buffer.compare(buf5, buf7);
console.log(v2);

var v3 = Buffer.compare(buf5, buf8);
console.log(v3);

var array1 = [buf5, buf6, buf7, buf8];
var buf9 = Buffer.concat(array1);
console.log(buf9);

var buf10 = Buffer.from("123456789");
var buf11 = Buffer.alloc(10);

buf10.copy(buf11, 0, 2, 5);
console.log(buf11);

var array2 = buf5.entries();
for (let str of array2) {
  console.log(str);
}

var buf12 = Buffer.from("abcd");
var buf13 = Buffer.from("abcd");
var buf14 = Buffer.from("zzzz");

var v4 = buf12.equals(buf13);
console.log("v4:", v4);

var v5 = buf12.equals(buf14);
console.log("v5:", v5);

var buf15 = Buffer.from("aaaaa");
console.log(buf15);

buf15.fill("c");
console.log(buf15);

buf15.fill("abc");
console.log(buf15);

var buf16 = Buffer.from("Hello Node.js Node.js");
var v6 = buf16.includes("Node");
console.log("v6:", v6);

var v7 = buf16.includes("Javascript");
console.log("v7:", v7);

var v8 = buf16.indexOf("Node");
console.log("v8:", v8);

var v9 = buf16.indexOf("javascript");
console.log("v9:", v9);

var v10 = buf16.lastIndexOf("Node");
console.log("v10:", v10);

var v11 = Buffer.isBuffer(buf16);
console.log("v11:", v11);

var obj1 = {
  a1: 10,
};

var v12 = Buffer.isBuffer(obj1);
console.log("v12:", v12);

var array3 = buf16.keys();
for (var i of array3) {
  console.log(i);
}

var v13 = buf16.toString();
console.log("v13:", v13);
