"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers/bcrypt");
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
      username: DataTypes.STRING,
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
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.beforeCreate((user) => (user.password = hashPassword(user.password)));
  return User;
};
