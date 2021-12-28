const sql = require('mssql')

module.exports = async f => {
  // 明文登录
  f.post(
    '/api/login',
    {
      schema: {
        body: {
          type: 'object',
          properties: {
            username: { type: 'string' },
            password: { type: 'string' },
          },
          required: ['username', 'password'],
        },
      },
    },
    async req => {
      const { username, password } = req.body
      const { recordset } = await f.db
        .request()
        .input('name', sql.VarChar(50), username)
        .query('select * from TTFC2000TREG where name = @name')
      if (recordset[0]?.password !== password) {
        return { err: 403 }
      }
      return { err: 0 }
    }
  )

  // 完成品 8 pinfan 31 day
  // 手持品 8 pinfan 31 day
  // 锯切机#1 3 banci 31 day
  // 锯切机#2 3 banci 31 day
  // 过烧材 3 banci 31 day
  // 烧过材 3 banci 31 day
  f.get(
    '/api/day',
    {
      schema: {
        querystring: {
          type: 'object',
          properties: {
            cat: { type: 'string' },
          },
          required: ['cat'],
        },
      },
    },
    async req => {
      const now = new Date()
      const table = `${now.getFullYear()}${now.getMonth() + 1}`
      const { cat } = req.query
      if (cat === 'CUTNO1') {
        const rs = await f.db.request().query(`select * from TTFC2000TCUTNO1${table}`)
        return { err: 0, data: f.banci(rs) }
      }
      if (cat === 'CUTNO2') {
        const rs = await f.db.request().query(`select * from TTFC2000TCUTNO2${table}`)
        return { err: 0, data: f.banci(rs) }
      }
      if (cat === 'GSC') {
        const rs = await f.db.request().query(`select * from TTFC2000TGSC2${table}`)
        return { err: 0, data: f.banci(rs) }
      }
      if (cat === 'SGC') {
        const rs = await f.db.request().query(`select * from TTFC2000TSGC2${table}`)
        return { err: 0, data: f.banci(rs) }
      }
      if (cat === 'SCP') {
        const rs = await f.db.request().query(`select * from TTFC2000TSCP2${table}`)
        return { err: 0, data: f.pinfan(rs) }
      }
      if (cat === 'WCP') {
        const rs = await f.db.request().query(`select * from TTFC2000TWCP2${table}`)
        return { err: 0, data: f.pinfan(rs) }
      }
      return { err: 400, msg: '请求参数有误' }
    }
  )

  // 不良品 3 banci 31 day 31 pinfan
  f.get('/api/BLP', async () => {
    const now = new Date()
    const table = `${now.getFullYear()}${now.getMonth() + 1}`
    const rs = await f.db.request().query(`select * from TTFC2000TBLP${table}`)
    return { err: 0, data: f.blp(rs) }
  })

  // 切断面积
  f.get('/api/MIANJI', async () => {
    const rs = await f.db
      .request()
      .query(`select * from TTFC2000TMIANJI where Id = (SELECT max(Id) FROM TTFC2000TMIANJI)`)
    return { err: 0, data: rs.recordset[0] }
  })

  // 可动率
  f.get('/api/RATE', async () => {
    const rs = await f.db.request().query(`select * from TTFC2000TRATE`)
    return { err: 0, data: f.rate(rs) }
  })

  // 统计
  f.get('/api/STAT', async () => {
    const rs1 = await f.db.request().query(`select * from TTFC2000TRATE`)
    const rs2 = await f.db.request().query(`select * from TTFC2000TREG`)
    return { err: 0, data: f.stat(rs1, rs2) }
  })

  // 异常信息
  f.get('/api/YICHANG', async () => {
    const rs = await f.db
      .request()
      .query(`select * from TTFC2000TYICHANG order by Id desc offset 0 rows fetch next 5 rows only`)
    return { err: 0, data: rs.recordset }
  })
}
