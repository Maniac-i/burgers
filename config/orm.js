const connection = require("./connection");

const orm = {
  selectAll: function (cb) {
    let queryString = "SELECT * FROM burgers;";
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  insertOne: function (val, cb) {
    let queryString = "INSERT INTO burgers (burger_name) VALUES (?) ";

    console.log(queryString);

    connection.query(queryString, val, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  updateOne: function (val, cb) {
    console.log(val);
    //"UPDATE plans SET plan = ? WHERE burgers.id = ?"
    let queryString = "UPDATE burgers SET devoured = true WHERE burgers.id = (?)";

    connection.query(queryString, val, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
}

module.exports = orm;