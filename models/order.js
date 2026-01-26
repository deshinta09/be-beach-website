"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.User, { foreignKey: "user_id" });
      Order.belongsTo(models.Service, { foreignKey: "service_id" });
      Order.belongsTo(models.Product, { foreignKey: "product_id" });
    }
  }
  Order.init(
    {
      user_id: {
        type: DataTypes.STRING,
        validate: {
          notNull: { msg: "user_id is require" },
          notEmpty: { msg: "user_id is require" },
        },
      },
      service_id: {
        type: DataTypes.STRING,
        validate: {
          notNull: { msg: "service_id is require" },
          notEmpty: { msg: "service_id is require" },
        },
      },
      product_id: {
        type: DataTypes.STRING,
        validate: {
          notNull: { msg: "product_id is require" },
          notEmpty: { msg: "product_id is require" },
        },
      },
    },
    {
      sequelize,
      modelName: "Order",
    },
  );
  return Order;
};
