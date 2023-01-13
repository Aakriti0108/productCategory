const mysql = require('mysql');

module.exports = mysql.createPool({
    connectionLimit : 100,
    host : 'database-1.ceh9qfu8k1s8.ap-southeast-1.rds.amazonaws.com',
    user :  'admin',
    password: 'mydatabase-1',
    database: 'feature_app'
});