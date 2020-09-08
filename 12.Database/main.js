var mysql = require("mysql");

var conn_info = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "TestDB",
};

var conn = mysql.createConnection(conn_info);

conn.connect(function (err) {
  if (err) {
    console.log("접속 오류");
    // console.log(err);
  } else {
    console.log("접속 성공");

    /* Insert
    var sql = "insert into TestTable (int_data, str_data) values (?, ?)";
    var input_data1 = [100, "문자열1"];

    conn.query(sql, input_data1, function (err) {
      //   console.log(err);
      console.log("저장 완료 1");
    });

    var input_data2 = [200, "문자열2"];
    conn.query(sql, input_data2, function (err) {
      console.log("저장 완료 2");
    });

    var input_data3 = [300, "문자열3"];
    conn.query(sql, input_data3, function (err) {
      console.log("저장 완료 3");
    });
    */

    /* Select
    var sql2 = "select int_data, str_data from TestTable";
    // rows : 반환 받은 데이터가 들어온다.
    conn.query(sql2, function (err, rows) {
      for (var obj of rows) {
        console.log("int_data:", obj.int_data);
        console.log("str_data:", obj.str_data);
      }
    });
     */
    /* Update
    var sql3 = "update TestTable set str_data=? where int_data=?";
    var update_data = ["문자열100", 100];
    conn.query(sql3, update_data, function (err) {
      console.log("수정 완료");
    });
     */

    /* Delete
    var sql4 = "delete from TestTable where int_data=?";
    var delete_data = [100];
    conn.query(sql4, delete_data, function (err) {
      console.log("삭제 완료");
    });
     */

    conn.end(); // 접속 해제
  }
});
