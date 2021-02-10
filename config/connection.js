const mysql = require("mysql")

// create database connection with credentials//
const connection = mysql.createConnection({
    host: "localhost",

    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect(function (err) {

    console.log("connected as id " + connection.threadId + "\n");

});

//Export the connection//
module.exports = connection;