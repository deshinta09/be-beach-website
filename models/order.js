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
      user_id: DataTypes.STRING,
      service_id: DataTypes.STRING,
      product_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
