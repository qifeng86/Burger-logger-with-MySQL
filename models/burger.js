//import orm.js into burger.js//
const orm = require("../config/orm.js");

//create the code that will call the ORM functions using burger specific input for the ORM//
const burger = {
    selectAll(callback) {
        orm.selectAll(function (res) {
            callback(res);
        });
    },

    insertOne(burger_name, callback) {
        orm.insertOne(burger_name, function (res) {
            callback(res);
        });
    },

    updateOne(id, callback) {
        orm.updateOne(id, function (res) {
            callback(res);
        });
    }
};

//Export the burger.js file//
module.exports = burger;