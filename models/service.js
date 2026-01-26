"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Service.hasMany(models.Order, { foreignKey: "service_id" });
    }
  }
  Service.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notNull: { msg: "Name is require" },
          notEmpty: { msg: "Name is require" },
        },
      },
      description: {
        type: DataTypes.STRING,
        validate: {
          notNull: { msg: "Description is require" },
          notEmpty: { msg: "Description is require" },
        },
      },
      image_url: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Service",
    },
  );
  return Service;
};
