const mysql = require("mysql");
//const { connect } = require("../controllers/burgers_controller");//
const connection;
// create database connection with credentials//
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",

        port: 3306,
        user: "root",
        password: "root",
        database: "burgers_db"
    });
};

connection.connect();
//Export the connection//
module.exports = connection;