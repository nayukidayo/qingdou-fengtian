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

  // 统计年数据
  f.get(
    '/api/stat/year',
    {
      schema: {
        querystring: {
          type: 'object',
          properties: {
            year: { type: 'string' },
            type: { type: 'string' },
          },
          required: ['year', 'type'],
        },
      },
    },
    async req => {
      const { year, type } = req.query
      const list = []
      for (let i = 1; i <= 12; i++) {
        const table = `TTFC2000T${type}${year}${i.toString().padStart(2, '0')}`
        try {
          const rs = await f.db.request().query(`select * from ${table}`)
          list.push(f.yStat(rs))
        } catch (_) {
          list.push(new Array(8).fill(0))
        }
      }
      if (type === 'SCP2' || type === 'WCP2') {
        return { err: 0, data: f.yPinfan(list) }
      } else {
        return { err: 0, data: f.yBanci(list) }
      }
    }
  )

  // 统计月数据
  f.get(
    '/api/stat/month',
    {
      schema: {
        querystring: {
          type: 'object',
          properties: {
            year: { type: 'string' },
            month: { type: 'string' },
            type: { type: 'string' },
          },
          required: ['year', 'month', 'type'],
        },
      },
    },
    async req => {
      const { year, month, type } = req.query
      const table = `TTFC2000T${type}${year}${month}`
      let rs = await f.db.request().query(`IF OBJECT_ID(N'dbo.${table}', N'U') IS NOT NULL SELECT 1`)
      if (!rs.recordset) return { err: 4002, msg: '请求参数错误' }
      rs = await f.db.request().query(`select * from ${table}`)
      if (type === 'SCP2' || type === 'WCP2') {
        return { err: 0, data: f.mPinfan(rs) }
      } else {
        return { err: 0, data: f.mBanci(rs) }
      }
    }
  )

  // 不良品 3 banci 31 day 31 pinfan
  f.get(
    '/api/blp',
    {
      schema: {
        querystring: {
          type: 'object',
          properties: {
            year: { type: 'string' },
            month: { type: 'string' },
          },
          required: ['year', 'month'],
        },
      },
    },
    async req => {
      const { year, month } = req.query
      const table = `TTFC2000TBLP${year}${month}`
      let rs = await f.db.request().query(`IF OBJECT_ID(N'dbo.${table}', N'U') IS NOT NULL SELECT 1`)
      if (!rs.recordset) return { err: 4002, msg: '请求参数错误' }
      rs = await f.db.request().query(`select * from ${table}`)
      return { err: 0, data: f.blp(rs) }
    }
  )

  // 切断面积
  f.get(
    '/api/mianji',
    {
      schema: {
        querystring: {
          type: 'object',
          properties: {
            limit: { type: 'number', default: 30 },
          },
          required: ['limit'],
        },
      },
    },
    async req => {
      const { limit } = req.query
      const rs = await f.db
        .request()
        .query(`select * from TTFC2000TMIANJI order by Id desc offset 0 rows fetch next ${limit} rows only`)
      return { err: 0, data: rs.recordset }
    }
  )

  // 异常信息
  f.get(
    '/api/yichang',
    {
      schema: {
        querystring: {
          type: 'object',
          properties: {
            limit: { type: 'number', default: 5 },
          },
          required: ['limit'],
        },
      },
    },
    async req => {
      const { limit } = req.query
      const rs = await f.db
        .request()
        .query(`select * from TTFC2000TYICHANG order by Id desc offset 0 rows fetch next ${limit} rows only`)
      return { err: 0, data: rs.recordset }
    }
  )

  // 可动率
  f.get(
    '/api/ratehis',
    {
      schema: {
        querystring: {
          type: 'object',
          properties: {
            year: { type: 'string' },
            month: { type: 'string' },
          },
          required: ['year', 'month'],
        },
      },
    },
    async req => {
      const { year, month } = req.query
      const table = `TTFC2000TRATEHIS${year}${month}`
      let rs = await f.db.request().query(`IF OBJECT_ID(N'dbo.${table}', N'U') IS NOT NULL SELECT 1`)
      if (!rs.recordset) return { err: 4002, msg: '请求参数错误' }
      rs = await f.db.request().query(`select * from ${table}`)
      return { err: 0, data: f.ratehis(rs) }
    }
  )
}
