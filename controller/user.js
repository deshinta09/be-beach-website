const { comparePassword } = require("../helpers/bcrypt");
const user = require("../models/user");

class ControllerUser {
  static async createUser(req, res, next) {
    try {
      const { email, password, username, role } = req.body;
      if (!email) {
        throw { name: "BadRequest", message: "Invalid Email" };
      }
      if (!password) {
        throw { name: "BadRequest", message: "Invalid Password" };
      }
      const user = await user.create({
        email,
        password,
        username,
        role: role || "customer",
      });
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }
  static async loginUser(req, res, next) {
    try {
      const { email, password } = req.body;
      const userLogin = await user.findOne({ where: { email } });
      const checkPassword = comparePassword(password, userLogin.password);
      if (!checkPassword) {
        throw { name: "Unauthorize", message: "Error invalid password" };
      }
      res.status(200).json(userLogin);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllerUser;
