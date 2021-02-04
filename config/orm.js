const connection = require("./connection.js");


const orm = {
    selectAll(callback) {
        const query = 'SELECT * FROM burgers';
        connection.query(query,
            (err, result) => {
                if (err) throw err;
                callback(result);
            }
        );
    },

    insertOne: function (burger_name, callback) {
        const query = 'INSERT INTO burgers SET ?';
        connection.query(query, {
            burger_name: burger_name,
            devoured: 0,
        },
            (err, result) => {
                if (err) throw err;
                callback(result);
            }
        );
    },
    updateOne: function (id, callback) {
        const query = 'UPDATE burgers SET ? WHERE ?';

        connection.query(query,
            {
                devoured: 1,
                id: id,
            },
            (err, result) => {
                if (err) throw err;
                callback(result);
            }
        );
    },
};

module.exports = orm;