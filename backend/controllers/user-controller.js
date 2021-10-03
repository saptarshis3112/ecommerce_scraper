const { User } = require("../models");
const { responseHelper } = require("../helpers");

const getUserDetails = async (req, h) => {
  try {
    const { id } = req.user;

    const userDetailsFound = await User.findOne({
      where: { id },
      attributes: {
        exclude: ["createdAt", "deletedAt", "updatedAt", "password"],
      },
      raw: true,
    });

    return responseHelper.success(h, "USERDETAILS200", {
      user: userDetailsFound,
    });
  } catch (ex) {
    return responseHelper.error(h, "SERVER500", ex);
  }
}

module.exports = {
  getUserDetails,
};
