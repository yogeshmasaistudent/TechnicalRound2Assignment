const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("tecround", "root", "yogesh3672", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = {
  sequelize,
};
