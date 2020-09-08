module.exports = function (app) {
  app.get("/", (req, res) => {
    // res.send("root!");
    /*
    var html =
      "<!DOCTYPE html>" +
      "<html>" +
      "<head>" +
      "<meta charset='utf-8'/>" +
      "</head>" +
      "<body>" +
      "<h1>index.html</h1>" +
      "</body>" +
      "</html>";
    res.send(html);
    */
    res.render("index.html");
  });

  app.get("/test", (req, res) => {
    // res.send("test!!");
    res.render("test.html");
  });
};
