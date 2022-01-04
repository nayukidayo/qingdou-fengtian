const fp = require('fastify-plugin')

function yStat(rs) {
  const data = []
  rs.recordset.forEach(v => {
    let t = 0
    const k = (v.pinfan ?? v.banci) - 1
    for (let i = 1; i <= 31; i++) {
      const day = Number(v[`day${i}`]) || 0
      t += day
    }
    data[k] = t
  })
  return data
}

function yBanci(list) {
  const data = {
    categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    series: [],
  }
  const dict = ['早班', '中班', '晚班']
  dict.forEach((m, i) => {
    const s = { name: m, data: [] }
    list.forEach(n => s.data.push(Number(n[i]) || 0))
    data.series.push(s)
  })
  return data
}

function yPinfan(list) {
  const data = {
    categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    series: [],
  }
  const dict = ['品番1', '品番2', '品番3', '品番4', '品番5', '品番6', '品番7', '品番8']
  dict.forEach((m, i) => {
    const s = { name: m, data: [] }
    list.forEach(n => s.data.push(Number(n[i]) || 0))
    data.series.push(s)
  })
  return data
}

function mBanci(rs) {
  const data = {
    // prettier-ignore
    categories: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
    series: [],
  }
  const dict = ['早班', '中班', '晚班']
  rs.recordset.forEach(v => {
    const k = v.banci - 1
    const s = { name: dict[k], data: [] }
    for (let i = 1; i <= 31; i++) {
      s.data.push(v[`day${i}`])
    }
    data.series[k] = s
  })
  return data
}

function mPinfan(rs) {
  const data = {
    // prettier-ignore
    categories: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
    series: [],
  }
  const dict = ['品番1', '品番2', '品番3', '品番4', '品番5', '品番6', '品番7', '品番8']
  rs.recordset.forEach(v => {
    const k = v.pinfan - 1
    const s = { name: dict[k], data: [] }
    for (let i = 1; i <= 31; i++) {
      s.data.push(v[`day${i}`])
    }
    data.series[k] = s
  })
  return data
}

function blp(rs) {
  const data = []
  const dict = ['早班', '中班', '晚班']
  for (let i = 1; i <= 31; i++) {
    for (let j = 0; j < 3; j++) {
      data.push({
        banci: dict[rs.recordset[j].banci - 1],
        pinfan: rs.recordset[j][`pinfan${i}`],
        num: rs.recordset[j][`day${i}`],
        day: `${i}日`,
      })
    }
  }
  return data
}

function ratehis(rs) {
  console.log('rs.recordset', rs.recordset)
  return rs.recordset.map(v => ({ jdrate: (v['jdrate10'] / 10).toFixed(1) }))
}

module.exports = fp(async f => {
  f.decorate('yStat', yStat)
  f.decorate('yBanci', yBanci)
  f.decorate('yPinfan', yPinfan)
  f.decorate('mBanci', mBanci)
  f.decorate('mPinfan', mPinfan)
  f.decorate('blp', blp)
  f.decorate('ratehis', ratehis)
})
