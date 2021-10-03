const { DataTypes } = require("sequelize");
const { sequelize, constants: { DatabaseTable } } = require("../config");

const Product = sequelize.define(DatabaseTable.Product, {

  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  product_name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  site_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  url: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  current_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },

  lowest_price: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },

  product_star: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  product_rating: {
    type: DataTypes.TEXT,
    allowNull: false,
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

module.exports = Product;
