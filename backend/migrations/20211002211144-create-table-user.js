'use strict';

const { constants: { DatabaseTable, MigrationDataTypes } } = require("../config");

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db) {
  return db.createTable(DatabaseTable.User, {
    id: { type: MigrationDataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    first_name: { type: MigrationDataTypes.STRING, notNull: true },
    last_name: { type: MigrationDataTypes.STRING, notNull: true },
    email: { type: MigrationDataTypes.STRING, notNull: true },
    password: { type: MigrationDataTypes.STRING, notNull: true },
    is_verified: { type: MigrationDataTypes.BOOLEAN, notNull: false },
    user_login_type: { type: MigrationDataTypes.STRING, notNull: false },
    product_count: { type: MigrationDataTypes.INTEGER, notNull: false },
    createdAt: { type: MigrationDataTypes.DATE_TIME, notNull: false },
    updatedAt: { type: MigrationDataTypes.DATE_TIME, notNull: false },
    deletedAt: { type: MigrationDataTypes.DATE_TIME, notNull: false },
  });
};

exports.down = function (db) {
  return db.dropTable(DatabaseTable.User);
};

exports._meta = {
  "version": 1
};
