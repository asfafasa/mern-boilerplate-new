const verify = require("./auth/verify");
const login = require("./auth/login");
const register = require("./auth/register");
const auth = require("./auth/auth");
const googleLogin = require("./auth/googleLogin");

module.exports = {
  login,
  register,
  verify,
  auth,
  googleLogin,
};
