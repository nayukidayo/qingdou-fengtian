const fp = require('fastify-plugin')
const sql = require('mssql')

module.exports = fp(async f => {
  const pool = await sql.connect({
    user: 'sa',
    password: 'ttfc',
    database: 'TTFC2000T',
    server: '127.0.0.1',
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000,
    },
    options: {
      encrypt: false, // for azure
      trustServerCertificate: true, // change to true for local dev / self-signed certs
    },
  })

  f.decorate('db', pool)
})
