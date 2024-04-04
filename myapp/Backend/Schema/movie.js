const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db.config");
const Movie = sequelize.define("movie", {
  Poster: DataTypes.STRING,
  Title: DataTypes.STRING,
  Types: DataTypes.STRING,
  Year: DataTypes.STRING,
});

module.exports = {
  Movie,
};
