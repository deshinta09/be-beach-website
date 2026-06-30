const {Products} = require('../models')

class ControllerProduct {
  static getProducts(req, res, next) {
    try {
      let option = {where:{}}
      const {page,sort,search,filter} = req.query
      const products = await Products.findAndCountAll()
      res.status(200).json(products)
    } catch (error) {
      next(error);
    }
  }
  static createProduct(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllerProduct;
