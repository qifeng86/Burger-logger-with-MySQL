const connection = require("./connection.js");


const orm = {
    selectAll(tableName, callback) {
        var query = 'SELECT * FROM burgers';
        connection.query(
            query,
            [tableName, callback],
            (err, result) => {
                if (err) throw err;
                console.log(result);
            }
        );
    },
    insertOne(tableName, callback) {
        var query = 'INSERT INTO burgers SET ?';
        connection.query(
            query,
            [tableName, callback],
            (err, result) => {
                if (err) throw err;
                console.log(result);
            }
        );
    },
    updateOne(tableName, callback) {
        var query =
            'UPDATE burgers SET ?';

        connection.query(
            query,
            [
                tableName, callback
            ],
            (err, result) => {
                if (err) throw err;
                console.log(result);
            }
        );
    },
};

module.exports = orm;