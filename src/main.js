const path = require('path')
const fastify = require('fastify')({
  logger: false,
})

fastify.setErrorHandler(async (err, req, res) => {
  console.log(err)
  return { err: 500 }
})

const start = async () => {
  try {
    await fastify.register(require('./db'))
    await fastify.register(require('fastify-cors'))
    await fastify.register(require('./helper'))
    await fastify.register(require('./routes'))
    await fastify.register(require('fastify-static'), {
      root: path.join(__dirname, '../public'),
    })

    await fastify.listen(3000, '0.0.0.0')
  } catch (err) {
    // fastify.log.error(err)
    console.log(err)
    process.exit(1)
  }
}
start()
