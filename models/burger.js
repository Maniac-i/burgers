const orm = require("../config/orm");

const burger = {
  all: function(cb) {
    orm.selectAll((res) => {
      cb(res);
    });
  },

  create: function(val, cb) {
    orm.insertOne(val, (res) => {
      cb(res);
    });
  },

  update: function(val, cb) {
    orm.updateOne(val, (res) => {
      cb(res);
    });
  },

  delete: function(val, cb) {
    orm.deleteOne(val, (res) => {
      cb(res);
    })
  }
}

module.exports = burger;