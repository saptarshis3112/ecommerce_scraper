const { DataTypes } = require("sequelize");
const { sequelize, constants: { DatabaseTable } } = require("../config");

const User = sequelize.define(DatabaseTable.User, {

  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  is_verified: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },

  user_login_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  product_count: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },

  createdAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },

  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },

  deletedAt: { 
    type: DataTypes.DATE,
    allowNull: true,
  },

});

module.exports = User;
