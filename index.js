require('dotenv').config({
  path: '.env',
});
const config = require('./config');
const {
  logger,
} = require('./app/utils/log4js');
const ERROR = require('./app/constant/ERROR');

const KT = {
  config,
  logger,
  ERROR,
};
global.KT = KT;

const server = require('./app/app').start();

module.exports = server;
