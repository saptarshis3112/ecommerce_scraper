const brcypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { constants: { Environment: {
  JWT_SECRET,
} } } = require("../config");

const hashPassword = (password) => {
  const salt = brcypt.genSaltSync(10);
  return brcypt.hashSync(password, salt);
}

const comparePassword = (password, hash) => {
  return brcypt.compareSync(password, hash);
}

const generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "1d",
  });
}

const generateOtp = () => {
  return Math.floor(1000 + Math.random() * 9000);
}

const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (ex) {
    throw new Error(ex.message);
  }
}

module.exports = {
  hashPassword,
  comparePassword,
  generateToken,
  generateOtp,
  verifyToken,
};
