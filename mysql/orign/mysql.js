const mysql = require('mysql')

const cfg = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'sample'
}

const conn = mysql.createConnection(cfg)

conn.connect(err => {
  if(err){
    throw err
  }else {
    console.log('连接成功！')
  }
})

const CREATE_SQL = `CREATE TABLE IF NOT EXISTS test (
  id INT NOT NULL AUTO_INCREMENT,
  message VARCHAR(45) NULL,
  PRIMARY KEY (id))`;
const INSERT_SQL = `INSERT INTO test(message) VALUES(?)`;
const SELECT_SQL = `SELECT * FROM test`;

conn.query(CREATE_SQL, err => {
  if (err) {
    throw err;
  }
  // 插⼊数据
  conn.query(INSERT_SQL, "hello,world", (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
    conn.query(SELECT_SQL, (err, results) => {
      console.log(results);
      conn.end(); // 若query语句有嵌套，则end需在此执⾏
    })
  });
});