const orm = require("../config/orm");

const burger = {
  all: function(cb) {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },

  create: function(val, cols, cb) {
    orm.insertOne("burgers", val, cols, (res) => {
      cb(res);
    });
  },

  update: function(colValObj, condition, cb) {
    orm.updateOne("burgers", condition, (res) => {
      cb(res);
    });
  },
}

module.exports = burger;