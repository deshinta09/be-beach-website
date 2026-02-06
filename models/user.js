"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers/bcrypt");
const uuid = require("uuid");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Order, { foreignKey: "user_id" });
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        validate: {
          notNull: { msg: "Username is require" },
          notEmpty: { msg: "Username is require" },
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: { args: true, msg: "Email must be unique" },
        validate: {
          notNull: { args: true, msg: "Email is require" },
          isEmail: { msg: "Email must be type email" },
          notEmpty: { msg: "Email is require" },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          len: 5,
          notEmpty: { msg: "Password is require" },
          notNull: { msg: "Password is require" },
          notEmpty: { msg: "Password is require" },
        },
      },
      role: {
        type: DataTypes.STRING,
        validate: {
          notNull: { msg: "Role is require" },
          notEmpty: { msg: "Role is require" },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    },
  );
  User.beforeCreate((user) => (user.password = hashPassword(user.password)));
  User.beforeCreate((user) => (user.id = uuid(10)));
  return User;
};
