const { DataTypes } = require("sequelize");

const { sequelize, constants: { DatabaseTable } } = require("../config");

const User = require("./users");

const UserAuthentication = sequelize.define(DatabaseTable.UserAuthentication, {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  otp: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  is_revoked: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: new Date(),
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

UserAuthentication.belongsTo(User, { foreignKey: "user_id" });

module.exports = UserAuthentication;
