const { comparePassword } = require("../helpers/bcrypt");

async function authentication(req, res, next) {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      throw { name: "Unauthorized", message: "Invalid Token" };
    }

    let verifed = authorization.split(" ")[1];
  } catch (error) {
    next(error);
  }
}
