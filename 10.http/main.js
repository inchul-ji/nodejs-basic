var http = require("http");
var url = require("url");

// req : request - 요청
// res : response - 응답
var server = http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  res.writeHead(200, { "content-type": "text/html" });

  //   console.log(req.url);

  // write : 브라우저로 응답 결과를 보내는 역할
  //res.write("Hello World");
  res.write("<!DOCTYPE html>");
  res.write("<html>");
  res.write("<head>");
  res.write("<meta charset='utf-8'/>");
  res.write("</head>");
  res.write("<body>");
  //   switch (req.url) {
  switch (q.pathname) {
    case "/":
      res.write("<h1> root 입니다.</h1>");
      res.write("<a href='test1?data1=111'>test1</a> <br />");
      res.write("<a href='test2?data1=222'>test2</a> <br />");
      break;
    case "/test1":
      res.write("<h1> test1 입니다.</h1>");
      res.write("<h1>data1:" + q.query.data1 + "</h1> <br />");
      break;
    case "/test2":
      res.write("<h1> test2 입니다.</h1> ");
      res.write("<h1>data1:" + q.query.data1 + "</h1> <br />");
      break;
  }

  res.write("</body>");
  res.write("</html>");
  res.end();
});

// listen : listen(포트 번호)
server.listen(1234);
console.log("서버 가동");
