require("dotenv").config();

module.exports = {

  Environment: {
    PORT: process.env.PORT,
    HOST: process.env.HOST,
    ENV: process.env.ENV,
    DB_NAME: process.env.DB_NAME,
    DB_HOST: process.env.DB_HOST,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_USER: process.env.DB_USER,
    DB_DIALECT: process.env.DB_DIALECT,
    DB_PORT: process.env.DB_PORT,
    JWT_SECRET: process.env.JWT_SECRET,
    NODEMAILER_USER: process.env.NODEMAILER_USER,
    NODEMAILER_PASSWORD: process.env.NODEMAILER_PASSWORD,
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
  },

  MigrationDataTypes: {
    CHAR: 'char',
    STRING: 'string',
    TEXT: 'text',
    SMALLINT: 'smallint',
    BIGINT: 'bigint',
    INTEGER: 'int',
    SMALL_INTEGER: 'smallint',
    BIG_INTEGER: 'bigint',
    REAL: 'real',
    DATE: 'date',
    DATE_TIME: 'datetime',
    TIME: 'time',
    BLOB: 'blob',
    TIMESTAMP: 'timestamp',
    BINARY: 'binary',
    BOOLEAN: 'boolean',
    DECIMAL: 'decimal'
  },

  DatabaseTable: {
    User: 'users',
    Product: 'products',
    Device: 'devices',
    UserAuthentication: 'user_authentications',
    UserProductAssociation: 'user_product_associations',
    EcommerceSite: 'ecommerce_sites',
  },

};
