var Sequelize = require("sequelize");

// create mySQL connection using sequelize
var sequelize = new Sequelize("sequelize_chirpy", "root", "Leila@1357", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;
