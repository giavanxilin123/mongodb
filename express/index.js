require('dotenv').config();
require('./service/dbMongo');
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
require("./apiExpress");