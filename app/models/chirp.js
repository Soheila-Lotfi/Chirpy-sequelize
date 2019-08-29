var Sequelize = require("sequelize");

var sequelize = require("../config/connetion.js");

var Chirp = sequelize.define("chirp", {
  author: Sequelize.STRING,
  body: Sequelize.STRING,
  created_at: Sequelize.DATE
});

module.exports = Chirp;
