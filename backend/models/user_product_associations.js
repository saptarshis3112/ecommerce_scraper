const { DataTypes } = require("sequelize");
const { sequelize, constants: {
  DatabaseTable,
} } = require("../config");

const UserProductAssociation = sequelize.define(DatabaseTable.UserProductAssociation, {

  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  product_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
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

module.exports = UserProductAssociation;
