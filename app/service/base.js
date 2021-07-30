const prisma = require('../utils/prisma');
const CustomError = require('../utils/customError');

const { ERROR } = KT;
class BaseService {
  constructor() {
    this.prisma = prisma;
    this.CustomError = CustomError;
    this.ERROR = ERROR;
  }
}

module.exports = BaseService;
