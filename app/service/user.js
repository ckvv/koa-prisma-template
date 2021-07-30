const BaseService = require('./base');
const utils = require('../utils/utils');

class UserService extends BaseService {
  async create(params) {
    const role = 2;
    const { username, password } = params;
    const findRes = await this.prisma.user.findFirst({
      where: {
        username,
      },
    });
    if (findRes) throw new this.CustomError(this.ERROR.ALREADY_EXIT, `${username} 已存在`);

    const salt = utils.getRandomStr(6);
    const createRes = await this.prisma.user.create({
      data: {
        role,
        username,
        password: utils.getMd5(`${password}${salt}`),
        salt,
      },
    });
    return createRes;
  }

  async signin(params) {
    const { username, password } = params;
    const createRes = await this.prisma.user.findFirst({
      where: {
        username,
      },
    });
    if (!createRes) throw new this.CustomError(this.ERROR.FAILED);
    if (utils.getMd5(`${password}${createRes.salt}`) !== createRes.password) throw new this.CustomError(this.ERROR.FAILED);
    return createRes;
  }

  async info(params) {
    const { id } = params;
    const createRes = await this.prisma.user.findFirst({
      select: {
        id: true,
        username: true,
        role: true,
      },
      where: {
        id,
      },
    });
    return createRes;
  }

  async list() {
    const allUsers = await this.prisma.user.findMany();
    return allUsers;
  }
}

module.exports = new UserService();
