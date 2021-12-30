const fp = require('fastify-plugin')

function table() {
  const now = new Date()
  const y = now.getFullYear()
  const m = now.getMonth() + 1
  return `${y}${m.toString().padStart(2, '0')}`
}

function banci(rs) {
  const data = []
  const list = ['早班', '中班', '晚班']
  rs.recordset.forEach(v => {
    const k = v.banci - 1
    const c = { name: list[k], data: [] }
    for (let i = 1; i < 32; i++) {
      c.data.push(v[`day${i}`])
    }
    data[k] = c
  })
  return data
}

function pinfan(rs) {
  const data = []
  const list = ['品番1', '品番2', '品番3', '品番4', '品番5', '品番6', '品番7', '品番8']
  rs.recordset.forEach(v => {
    const k = v.pinfan - 1
    const c = { name: list[k], data: [] }
    for (let i = 1; i < 32; i++) {
      c.data.push(v[`day${i}`])
    }
    data[k] = c
  })
  return data
}

function blp(rs) {
  const data = []
  const list = ['早班', '中班', '晚班']
  const now = new Date()
  const y = now.getFullYear()
  const m = now.getMonth() + 1
  const d = now.getDate()
  for (let i = d; i > 0; i--) {
    for (let j = 0; j < rs.recordset.length; j++) {
      data.push({
        banci: list[rs.recordset[j].banci - 1],
        pinfan: rs.recordset[j][`pinfan${i}`],
        num: rs.recordset[j][`day${i}`],
        date: `${y}年${m}月${i}日`,
      })
    }
  }
  return data
}

function rate(rs) {
  const data = []
  const list = [
    '锯切机#1',
    '锯切机#2',
    '锯切后搬送',
    '加热炉',
    '加热炉后搬送R/B',
    '2000T成型冲压机',
    '成型工程盘',
    '成型后搬送',
    '去毛边冲压机',
    '去毛边搬送',
    '温间精整',
    '温间搬送',
    '空冷链排',
    '抛丸机',
    '磁气探伤',
    '备用',
  ]
  for (let i = 1; i < 17; i++) {
    data.push({
      name: list[i - 1],
      jdrate: (rs.recordset[0][`jdrate${i}`] / 10).toFixed(1),
      ctrate: (rs.recordset[0][`ctrate${i}`] / 100).toFixed(2),
      scdata: rs.recordset[0][`scdata${i}`],
    })
  }
  return data
}

function stat(rs1, rs2) {
  const scdata = rs1.recordset[0]['scdata10']
  const jdrate = rs1.recordset[0]['jdrate10']
  const mubiao = rs2.recordset[0].mubiao
  return {
    scdata: scdata.toString(),
    jdrate: (jdrate / 10).toFixed(0),
    mubiao: mubiao.toString(),
    cpl: ((scdata / mubiao) * 100).toFixed(0),
  }
}

module.exports = fp(async f => {
  f.decorate('table', table)
  f.decorate('banci', banci)
  f.decorate('pinfan', pinfan)
  f.decorate('blp', blp)
  f.decorate('rate', rate)
  f.decorate('stat', stat)
})
