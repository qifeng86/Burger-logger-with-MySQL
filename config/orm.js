//Import connection.js into orm.js//
const connection = require("./connection.js");

//create the methods that will execute the necessary MySQL commands in the controllers//
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

    insertOne(burger_name, callback) {
        const query = 'INSERT INTO burgers SET ?';
        connection.query(query, {
            burger_name: burger_name,
            devoured: false,
        },
            (err, result) => {
                if (err) throw err;
                callback(result);
            }
        );
    },
    updateOne(id, callback) {
        const query = 'UPDATE burgers SET ? WHERE ?';

        connection.query(query,
            {
                devoured: true,
                id: id,
            },
            (err, result) => {
                if (err) throw err;
                callback(result);
            }
        );
    },
};

//Export the ORM object//
module.exports = orm;