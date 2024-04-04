const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("day2", "root", "yogesh3672", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = {
  sequelize,
};
