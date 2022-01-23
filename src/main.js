const PORT = process.env.PORT || 3000

const path = require('path')
const LOG = path.join(__dirname, '../error.log')
const PUBLIC = path.join(__dirname, '../public')

const f = require('fastify')({
  logger: {
    level: 'error',
    file: LOG,
  },
})

f.setErrorHandler(async (err, req, res) => {
  console.log(req.method, req.url, err)
  if (err.validation) {
    res.code(400)
    return { err: 4001, msg: err.message }
  }
  f.log.error(err)
  res.code(500)
  return { err: 5001, msg: '服务器内部错误' }
})

!(async () => {
  try {
    await f.register(require('./db'))
    await f.register(require('./helper'))
    await f.register(require('./crontab'))
    await f.register(require('fastify-cors'))
    await f.register(require('./routes/v1'), { prefix: '/api/v1' })
    await f.register(require('./routes/v2'), { prefix: '/api/v2' })
    await f.register(require('fastify-static'), { root: PUBLIC })
    await f.listen(PORT, '0.0.0.0')
  } catch (err) {
    f.log.fatal(err)
    process.exit(1)
  }
})()
