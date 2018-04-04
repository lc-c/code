var dbs = require("./mongodb");
module.exports = {
  getData(dbName, index) {
    return dbs[dbName]
      .find({})
      .skip(10 * (index - 1))
      .limit(10);
  },
  delete(dbName, id) {
    return dbs[dbName].remove({ _id: id });
  },
  update(dbName, id, datas) {
    return dbs[dbName].update({ id: _id }, data, { multi: true });
  }
};