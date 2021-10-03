const { responseHelper, userHelper } = require('../helpers');
const { User } = require("../models");

/**
 * Check user authentications
 * @param {*} server 
 * @param {*} option 
 * @param {*} next 
 * @returns 
 */
module.exports = (server, option, next) => {
  return {
    authenticate: async (request, h) => {
      try {

        const { authorization } = request.headers;

        const decoded = userHelper.verifyToken(authorization);

        const userFound = await User.findOne({
          where: {
            id: decoded.id,
          },
          raw: true,
          attributes: {
            exclude: ['createdAt', 'deletedAt', 'updatedAt'],
          },
        });

        if (!userFound) {
          return responseHelper.error(h, "AUTH403").takeover();
        }

        request.user = userFound;
        return h.continue;

      } catch (err) {
        return responseHelper.error(h, "SERVER500", err).takeover();
      }
    },
  };
};
