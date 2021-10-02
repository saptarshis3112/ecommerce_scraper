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
  return db.createTable(DatabaseTable.Product, { 
    id: { type: MigrationDataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    product_name: { type: MigrationDataTypes.TEXT, notNull: true },
    site_name: { type: MigrationDataTypes.STRING, notNull: true },
    url: { type: MigrationDataTypes.TEXT, notNull: true },
    current_price: { type: MigrationDataTypes.REAL, notNull: true },
    lowest_price: { type: MigrationDataTypes.REAL, notNull: true },
    product_star: { type: MigrationDataTypes.TEXT, notNull: false },
    product_rating: { type: MigrationDataTypes.TEXT, notNull: true },
    createdAt: { type: MigrationDataTypes.DATE_TIME, notNull: false },
    updatedAt: { type: MigrationDataTypes.DATE_TIME, notNull: false },
    deletedAt: { type: MigrationDataTypes.DATE_TIME, notNull: false },
  });
};

exports.down = function(db) {
  return db.dropTable(DatabaseTable.Product);
};

exports._meta = {
  "version": 1
};
