const Sequelize = require("sequelize");

const {
  Environment: {
    DB_DIALECT,
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
    DB_PORT,
    DB_USER,
  }
} = require("./constants");

/**
 * Setup sequelize to be imported in other modules.
 */
module.exports = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  logging: false,
  port: DB_PORT,
});
