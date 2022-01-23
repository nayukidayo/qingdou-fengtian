const sql = require('mssql')

module.exports = async f => {
  // 明文登录
  f.post(
    '/login',
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
    async (req, res) => {
      const { username, password } = req.body
      const { recordset } = await f.db
        .request()
        .input('name', sql.VarChar(50), username)
        .query('select * from TTFC2000TREG where name = @name')
      if (recordset[0]?.password !== password) {
        res.code(401)
        return { err: 4011, msg: '身份验证错误' }
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
    '/day',
    {
      schema: {
        querystring: {
          type: 'object',
          properties: {
            type: { type: 'string' },
          },
          required: ['type'],
        },
      },
    },
    async (req, res) => {
      // const table = f.table()
      const table = '202112'
      const { type } = req.query
      if (type === 'CUTNO1') {
        const rs = await f.db.request().query(`select * from TTFC2000TCUTNO1${table}`)
        return { err: 0, data: f.banci(rs) }
      }
      if (type === 'CUTNO2') {
        const rs = await f.db.request().query(`select * from TTFC2000TCUTNO2${table}`)
        return { err: 0, data: f.banci(rs) }
      }
      if (type === 'GSC') {
        const rs = await f.db.request().query(`select * from TTFC2000TGSC2${table}`)
        return { err: 0, data: f.banci(rs) }
      }
      if (type === 'SGC') {
        const rs = await f.db.request().query(`select * from TTFC2000TSGC2${table}`)
        return { err: 0, data: f.banci(rs) }
      }
      if (type === 'SCP') {
        const rs = await f.db.request().query(`select * from TTFC2000TSCP2${table}`)
        return { err: 0, data: f.pinfan(rs) }
      }
      if (type === 'WCP') {
        const rs = await f.db.request().query(`select * from TTFC2000TWCP2${table}`)
        return { err: 0, data: f.pinfan(rs) }
      }
      res.code(400)
      return { err: 4002, msg: '请求参数错误' }
    }
  )

  // 不良品 3 banci 31 day 31 pinfan
  f.get('/BLP', async () => {
    const table = f.table()
    const rs = await f.db.request().query(`select * from TTFC2000TBLP${table}`)
    return { err: 0, data: f.blp(rs) }
  })

  // 切断面积
  f.get('/MIANJI', async () => {
    const rs = await f.db
      .request()
      .query(`select * from TTFC2000TMIANJI where Id = (SELECT max(Id) FROM TTFC2000TMIANJI)`)
    return { err: 0, data: rs.recordset[0] }
  })

  // 可动率
  f.get('/RATE', async () => {
    const rs = await f.db.request().query(`select * from TTFC2000TRATE`)
    return { err: 0, data: f.rate(rs) }
  })

  // 统计
  f.get('/STAT', async () => {
    const rs1 = await f.db.request().query(`select * from TTFC2000TRATE`)
    const rs2 = await f.db.request().query(`select * from TTFC2000TREG`)
    return { err: 0, data: f.stat(rs1, rs2) }
  })

  // 异常信息
  f.get('/YICHANG', async () => {
    const rs = await f.db
      .request()
      .query(`select * from TTFC2000TYICHANG order by Id desc offset 0 rows fetch next 5 rows only`)
    return { err: 0, data: rs.recordset }
  })
}
