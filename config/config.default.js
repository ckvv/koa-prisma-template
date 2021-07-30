module.exports = {
  name: 'koa-template',
  port: 8001,
  cookie: {
    key: 'mjhgfcd@#$%^e456789o',
    maxage: 1000 * 60 * 60 * 24 * 7,
  },
  redis: {
    host: '127.0.0.1',
    port: 6379,
  },
  bodyParser: {
    limit: 100 * 1048576,
  },
};
