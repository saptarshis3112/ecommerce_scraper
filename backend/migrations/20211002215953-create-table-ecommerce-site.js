'use strict';

const { constants: { DatabaseTable, MigrationDataTypes } } = require("../config");

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable(DatabaseTable.EcommerceSite, {
    id: { type: MigrationDataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    site_name: { type: MigrationDataTypes.STRING, notNull: true },
    is_active: { type: MigrationDataTypes.BOOLEAN, notNull: false },
    createdAt: { type: MigrationDataTypes.DATE_TIME, notNull: false },
    updatedAt: { type: MigrationDataTypes.DATE_TIME, notNull: false },
    deletedAt: { type: MigrationDataTypes.DATE_TIME, notNull: false },
  });
};

exports.down = function(db) {
  return db.dropTable(DatabaseTable.EcommerceSite);
};

exports._meta = {
  "version": 1
};
