var path = require("path");

// basename: 파일명을 확인하는 메서드
var basename1 = path.basename("c:\\abc\\abc.txt");
console.log("basename1:", basename1);

var basename2 = path.basename("c:/abc/abc.txt");
console.log("basename2:", basename2);

var basename3 = path.basename("abc.txt");
console.log("basename3:", basename3);

// dirname: 경로를 확인하는 메서드
var dirname1 = path.dirname("c:/abc/abc.txt");
console.log("dirname1:", dirname1);

var dirname2 = path.dirname("abc.txt");
console.log("dirname2:", dirname2);

// extname: 확장자를 확인하는 메서드
var extname1 = path.extname("c:/abc/abc.txt");
console.log("extname1:", extname1);

var extname2 = path.extname("abc.txt");
console.log("extname2:", extname2);

//isAbsolute: 절대 경로인지 확인하는 메서드
var isAbsolute1 = path.isAbsolute("c:/abc/abc.txt");
console.log("isAbsolute:", isAbsolute1);

var isAbsolute2 = path.isAbsolute("abc.txt");
console.log("isAbsolute2:", isAbsolute2);

var isAbsolute3 = path.isAbsolute("c:\\abc\\abc.txt");
console.log("isAbsolute3:", isAbsolute3);

// join: 경로와 파일명을 작성하면 합쳐준다.
var join = path.join("aaa", "bbb", "ccc.txt");
console.log("join:", join);

var normalize = path.normalize("c:/aaa/../bbb/ccc.txt");
console.log("normalize:", normalize);
