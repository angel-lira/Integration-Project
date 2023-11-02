require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY } = process.env;
const UserModel = require("./models/User");
const FavoriteModel = require("./models/Favorite");

// const database = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
//   { logging: false, native: false }
// );
//
const database = new Sequelize(DB_DEPLOY, {
  dialectModule: require("pg"),
  logging: false,
  native: false,
  ssl: {
    require: true,
  },
});

UserModel(database);
FavoriteModel(database);

const { User, Favorite } = database.models;

User.belongsToMany(Favorite, { through: "user_favorite" });
Favorite.belongsToMany(User, { through: "user_favorite" });

module.exports = {
  User,
  Favorite,
  conn: database,
};
