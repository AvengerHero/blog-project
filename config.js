const configs = {
  development: {
    BASE_URL: 'http://localhost:3000'
  },
  production: {
    BASE_URL: 'http://35.240.155.199'
  }
}

const nodeEnv = process.env.NODE_ENV
module.exports = configs[nodeEnv]
