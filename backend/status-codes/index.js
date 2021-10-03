const authCodes = require("./auth-codes");
const httpCodes = require("./http-codes");
const userCodes = require("./user-codes");

module.exports = {
  ...authCodes,
  ...httpCodes,
  ...userCodes,
};
