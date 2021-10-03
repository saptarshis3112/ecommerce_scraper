const { DataTypes } = require("sequelize");
const { sequelize, constants: { DatabaseTable } } = require("../config");

const EcommerceSite = sequelize.define(DatabaseTable.EcommerceSite, {

  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  site_name: { type: DataTypes.STRING, allowNull: false },
  is_active: { type: DataTypes.BOOLEAN, allowNull: true },

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

module.exports = EcommerceSite;
