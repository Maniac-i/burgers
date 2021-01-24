const connection = require("./connection");

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  const orm = {
    selectAll: function (tableInput, cb) {
      let queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, (err, result) => {
        if (err) {
          throw err;
        }

        cb(result);
      });
    },

    insertOne: function (table, val, cols, cb) {
      let queryString = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES (?) ";

      console.log(queryString);

      connection.query(queryString, val, (err, result => {
        if (err) {
          throw err;
        }

        cb(result);
      }));
    },

    updateOne: function (table, colValObj, condition, cb) {

      //"UPDATE plans SET plan = ? WHERE id = ?"
      let queryString = "UPDATE " + table + " SET " + objToSql(colValObj) + " WHERE " + condition;

      connection.query(queryString, (err, result) => {
        if (err) {
          throw err;
        }

        cb(result);
      });
    }
  }
}



module.exports = orm;