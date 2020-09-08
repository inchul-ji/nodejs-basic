var fs = require("fs");

/*
    fs.writeFile("data1.txt", "Hello Node.js", function (err) {
    console.log("비동기식 저장 1");
    });

    fs.writeFile("data2.txt", "Hello Javascript", function (err) {
    console.log("비동기식 저장 2");
    });
*/

/*
    fs.appendFile("data1.txt", "\n안녕하세요.", function (err) {
    console.log("비 동기식 추가 1");
    });

    fs.appendFile("data2.txt", "\n반갑습니다.", function (err) {
    console.log("비 동기식 추가 2");
    });

    fs.readFile("data1.txt", function (err, data) {
    //<Buffer 48 65 6c 6c 6f 20 4e 6f 64 65 2e 6a 73>
    // Buffer 객체에 담겨 반환한다.
    console.log("data1 읽어옴:", data);
    // 이를 제대로 해석하기 위해 toString() 을 사용한다.
    console.log("data1 Buffer 해석:", data.toString());
    });

    fs.readFile("data2.txt", function (err, data) {
    console.log("data2 읽어옴:", data.toString());
    });
*/

/*
    fs.writeFileSync("data3.txt", "Hello Node.js");
    console.log("동기식 저장 1");

    fs.writeFileSync("data4.txt", "Hello Javascript");
    console.log("동기식 저장 2");

    var data3 = fs.readFileSync("data3.txt");
    console.log("data3.txt:", data3);
    console.log("data3.txt:", data3.toString());

    var data4 = fs.readFileSync("data4.txt");
    console.log("data4.txt:", data4);
    console.log("data4.txt:", data4.toString());
*/

fs.appendFileSync("data3.txt", "안녕하세요");
console.log("파일 내용 추가 1");

fs.appendFileSync("data4.txt", "반갑습니다.");
console.log("파일 내용 추가 2");

var data3 = fs.readFileSync("data3.txt");
console.log("data3.txt:", data3);
console.log("data3.txt:", data3.toString());

var data4 = fs.readFileSync("data4.txt");
console.log("data4.txt:", data4);
console.log("data4.txt:", data4.toString());
