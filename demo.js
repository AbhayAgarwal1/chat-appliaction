var mysql = require('mysql');

var conn = mysql.createConnection('mysql://abhay:vijeta11@localhost:3306/company?debug=true');

conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

