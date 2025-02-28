const mysql = require('mysql2/promise');

const conexao = mysql.createConnection(
    {
        host     : 'localhost',
        port     : 3306,
        user     : "root",
        password : "",
        database : "mflix",
    }
);

const sql = "SELECT * FROM usuarios WHERE usuemail = 'tiaogaviao@outlook.com' AND ususenha ='123'";

const [result] = conexao.query(sql);
console.log(result);