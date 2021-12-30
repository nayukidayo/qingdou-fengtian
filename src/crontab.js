function blp(table) {
  return `
    IF OBJECT_ID(N'dbo.TTFC2000TBLP${table}', N'U') IS NULL
    BEGIN
    CREATE TABLE [dbo].[TTFC2000TBLP${table}] (
      [banci] [int] NULL,
      [day1] [int] NULL,
      [day2] [int] NULL,
      [day3] [int] NULL,
      [day4] [int] NULL,
      [day5] [int] NULL,
      [day6] [int] NULL,
      [day7] [int] NULL,
      [day8] [int] NULL,
      [day9] [int] NULL,
      [day10] [int] NULL,
      [day11] [int] NULL,
      [day12] [int] NULL,
      [day13] [int] NULL,
      [day14] [int] NULL,
      [day15] [int] NULL,
      [day16] [int] NULL,
      [day17] [int] NULL,
      [day18] [int] NULL,
      [day19] [int] NULL,
      [day20] [int] NULL,
      [day21] [int] NULL,
      [day22] [int] NULL,
      [day23] [int] NULL,
      [day24] [int] NULL,
      [day25] [int] NULL,
      [day26] [int] NULL,
      [day27] [int] NULL,
      [day28] [int] NULL,
      [day29] [int] NULL,
      [day30] [int] NULL,
      [day31] [int] NULL,
      [pinfan1] [int] NULL,
      [pinfan2] [int] NULL,
      [pinfan3] [int] NULL,
      [pinfan4] [int] NULL,
      [pinfan5] [int] NULL,
      [pinfan6] [int] NULL,
      [pinfan7] [int] NULL,
      [pinfan8] [int] NULL,
      [pinfan9] [int] NULL,
      [pinfan10] [int] NULL,
      [pinfan11] [int] NULL,
      [pinfan12] [int] NULL,
      [pinfan13] [int] NULL,
      [pinfan14] [int] NULL,
      [pinfan15] [int] NULL,
      [pinfan16] [int] NULL,
      [pinfan17] [int] NULL,
      [pinfan18] [int] NULL,
      [pinfan19] [int] NULL,
      [pinfan20] [int] NULL,
      [pinfan21] [int] NULL,
      [pinfan22] [int] NULL,
      [pinfan23] [int] NULL,
      [pinfan24] [int] NULL,
      [pinfan25] [int] NULL,
      [pinfan26] [int] NULL,
      [pinfan27] [int] NULL,
      [pinfan28] [int] NULL,
      [pinfan29] [int] NULL,
      [pinfan30] [int] NULL,
      [pinfan31] [int] NULL,
      [uptime] [smalldatetime] NULL,
      [Id] [bigint] IDENTITY(1,1) NOT NULL,
      CONSTRAINT [PK_TTFC2000TBLP${table}] PRIMARY KEY CLUSTERED ([Id] ASC)
      WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
    ) ON [PRIMARY]
    END`
}

function cutno1(table) {
  return `
    IF OBJECT_ID(N'dbo.TTFC2000TCUTNO1${table}', N'U') IS NULL
    BEGIN
      CREATE TABLE [dbo].[TTFC2000TCUTNO1${table}](
        [banci] [int] NULL,
        [day1] [int] NULL,
        [day2] [int] NULL,
        [day3] [int] NULL,
        [day4] [int] NULL,
        [day5] [int] NULL,
        [day6] [int] NULL,
        [day7] [int] NULL,
        [day8] [int] NULL,
        [day9] [int] NULL,
        [day10] [int] NULL,
        [day11] [int] NULL,
        [day12] [int] NULL,
        [day13] [int] NULL,
        [day14] [int] NULL,
        [day15] [int] NULL,
        [day16] [int] NULL,
        [day17] [int] NULL,
        [day18] [int] NULL,
        [day19] [int] NULL,
        [day20] [int] NULL,
        [day21] [int] NULL,
        [day22] [int] NULL,
        [day23] [int] NULL,
        [day24] [int] NULL,
        [day25] [int] NULL,
        [day26] [int] NULL,
        [day27] [int] NULL,
        [day28] [int] NULL,
        [day29] [int] NULL,
        [day30] [int] NULL,
        [day31] [int] NULL,
        [uptime] [smalldatetime] NULL,
        [Id] [bigint] IDENTITY(1,1) NOT NULL,
        CONSTRAINT [PK_TTFC2000TCUTNO1${table}] PRIMARY KEY CLUSTERED ([Id] ASC)
        WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
      ) ON [PRIMARY]
    END`
}

function cutno2(table) {
  return `
    IF OBJECT_ID(N'dbo.TTFC2000TCUTNO2${table}', N'U') IS NULL
    BEGIN
      CREATE TABLE [dbo].[TTFC2000TCUTNO2${table}](
        [banci] [int] NULL,
        [day1] [int] NULL,
        [day2] [int] NULL,
        [day3] [int] NULL,
        [day4] [int] NULL,
        [day5] [int] NULL,
        [day6] [int] NULL,
        [day7] [int] NULL,
        [day8] [int] NULL,
        [day9] [int] NULL,
        [day10] [int] NULL,
        [day11] [int] NULL,
        [day12] [int] NULL,
        [day13] [int] NULL,
        [day14] [int] NULL,
        [day15] [int] NULL,
        [day16] [int] NULL,
        [day17] [int] NULL,
        [day18] [int] NULL,
        [day19] [int] NULL,
        [day20] [int] NULL,
        [day21] [int] NULL,
        [day22] [int] NULL,
        [day23] [int] NULL,
        [day24] [int] NULL,
        [day25] [int] NULL,
        [day26] [int] NULL,
        [day27] [int] NULL,
        [day28] [int] NULL,
        [day29] [int] NULL,
        [day30] [int] NULL,
        [day31] [int] NULL,
        [uptime] [smalldatetime] NULL,
        [Id] [bigint] IDENTITY(1,1) NOT NULL,
        CONSTRAINT [PK_TTFC2000TCUTNO2${table}] PRIMARY KEY CLUSTERED ([Id] ASC)
        WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
      ) ON [PRIMARY]
    END`
}

function gsc(table) {
  return `
    IF OBJECT_ID(N'dbo.TTFC2000TGSC2${table}', N'U') IS NULL
    BEGIN
      CREATE TABLE [dbo].[TTFC2000TGSC2${table}](
        [banci] [int] NULL,
        [day1] [int] NULL,
        [day2] [int] NULL,
        [day3] [int] NULL,
        [day4] [int] NULL,
        [day5] [int] NULL,
        [day6] [int] NULL,
        [day7] [int] NULL,
        [day8] [int] NULL,
        [day9] [int] NULL,
        [day10] [int] NULL,
        [day11] [int] NULL,
        [day12] [int] NULL,
        [day13] [int] NULL,
        [day14] [int] NULL,
        [day15] [int] NULL,
        [day16] [int] NULL,
        [day17] [int] NULL,
        [day18] [int] NULL,
        [day19] [int] NULL,
        [day20] [int] NULL,
        [day21] [int] NULL,
        [day22] [int] NULL,
        [day23] [int] NULL,
        [day24] [int] NULL,
        [day25] [int] NULL,
        [day26] [int] NULL,
        [day27] [int] NULL,
        [day28] [int] NULL,
        [day29] [int] NULL,
        [day30] [int] NULL,
        [day31] [int] NULL,
        [uptime] [smalldatetime] NULL,
        [Id] [bigint] IDENTITY(1,1) NOT NULL,
        CONSTRAINT [PK_TTFC2000TGSC2${table}] PRIMARY KEY CLUSTERED ([Id] ASC)
        WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
      ) ON [PRIMARY]
    END`
}

function sgc(table) {
  return `
    IF OBJECT_ID(N'dbo.TTFC2000TSGC2${table}', N'U') IS NULL
    BEGIN
      CREATE TABLE [dbo].[TTFC2000TSGC2${table}](
        [banci] [int] NULL,
        [day1] [int] NULL,
        [day2] [int] NULL,
        [day3] [int] NULL,
        [day4] [int] NULL,
        [day5] [int] NULL,
        [day6] [int] NULL,
        [day7] [int] NULL,
        [day8] [int] NULL,
        [day9] [int] NULL,
        [day10] [int] NULL,
        [day11] [int] NULL,
        [day12] [int] NULL,
        [day13] [int] NULL,
        [day14] [int] NULL,
        [day15] [int] NULL,
        [day16] [int] NULL,
        [day17] [int] NULL,
        [day18] [int] NULL,
        [day19] [int] NULL,
        [day20] [int] NULL,
        [day21] [int] NULL,
        [day22] [int] NULL,
        [day23] [int] NULL,
        [day24] [int] NULL,
        [day25] [int] NULL,
        [day26] [int] NULL,
        [day27] [int] NULL,
        [day28] [int] NULL,
        [day29] [int] NULL,
        [day30] [int] NULL,
        [day31] [int] NULL,
        [uptime] [smalldatetime] NULL,
        [Id] [bigint] IDENTITY(1,1) NOT NULL,
        CONSTRAINT [PK_TTFC2000TSGC2${table}] PRIMARY KEY CLUSTERED ([Id] ASC)
        WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
      ) ON [PRIMARY]
    END`
}

function scp(table) {
  return `
    IF OBJECT_ID(N'dbo.TTFC2000TSCP2${table}', N'U') IS NULL
    BEGIN
      CREATE TABLE [dbo].[TTFC2000TSCP2${table}](
        [pinfan] [int] NULL,
        [day1] [int] NULL,
        [day2] [int] NULL,
        [day3] [int] NULL,
        [day4] [int] NULL,
        [day5] [int] NULL,
        [day6] [int] NULL,
        [day7] [int] NULL,
        [day8] [int] NULL,
        [day9] [int] NULL,
        [day10] [int] NULL,
        [day11] [int] NULL,
        [day12] [int] NULL,
        [day13] [int] NULL,
        [day14] [int] NULL,
        [day15] [int] NULL,
        [day16] [int] NULL,
        [day17] [int] NULL,
        [day18] [int] NULL,
        [day19] [int] NULL,
        [day20] [int] NULL,
        [day21] [int] NULL,
        [day22] [int] NULL,
        [day23] [int] NULL,
        [day24] [int] NULL,
        [day25] [int] NULL,
        [day26] [int] NULL,
        [day27] [int] NULL,
        [day28] [int] NULL,
        [day29] [int] NULL,
        [day30] [int] NULL,
        [day31] [int] NULL,
        [uptime] [smalldatetime] NULL,
        [Id] [bigint] IDENTITY(1,1) NOT NULL,
        CONSTRAINT [PK_TTFC2000TSCP2${table}] PRIMARY KEY CLUSTERED ([Id] ASC)
        WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
      ) ON [PRIMARY]
    END`
}

function wcp(table) {
  return `
    IF OBJECT_ID(N'dbo.TTFC2000TWCP2${table}', N'U') IS NULL
    BEGIN
      CREATE TABLE [dbo].[TTFC2000TWCP2${table}](
        [pinfan] [int] NULL,
        [day1] [int] NULL,
        [day2] [int] NULL,
        [day3] [int] NULL,
        [day4] [int] NULL,
        [day5] [int] NULL,
        [day6] [int] NULL,
        [day7] [int] NULL,
        [day8] [int] NULL,
        [day9] [int] NULL,
        [day10] [int] NULL,
        [day11] [int] NULL,
        [day12] [int] NULL,
        [day13] [int] NULL,
        [day14] [int] NULL,
        [day15] [int] NULL,
        [day16] [int] NULL,
        [day17] [int] NULL,
        [day18] [int] NULL,
        [day19] [int] NULL,
        [day20] [int] NULL,
        [day21] [int] NULL,
        [day22] [int] NULL,
        [day23] [int] NULL,
        [day24] [int] NULL,
        [day25] [int] NULL,
        [day26] [int] NULL,
        [day27] [int] NULL,
        [day28] [int] NULL,
        [day29] [int] NULL,
        [day30] [int] NULL,
        [day31] [int] NULL,
        [uptime] [smalldatetime] NULL,
        [Id] [bigint] IDENTITY(1,1) NOT NULL,
        CONSTRAINT [PK_TTFC2000TWCP2${table}] PRIMARY KEY CLUSTERED ([Id] ASC)
        WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
      ) ON [PRIMARY]
    END`
}

module.exports = async f => {
  setInterval(async () => {
    const now = new Date()
    const d = now.getDate()
    if (d < 28) return

    let y = now.getFullYear()
    let m = now.getMonth() + 1
    if (m === 12) {
      y += 1
      m = 1
    } else {
      m += 1
    }
    const table = `${y}${m.toString().padStart(2, '0')}`

    try {
      const rs = await f.db
        .request()
        .query(`IF OBJECT_ID(N'dbo.TTFC2000TWCP2${table}', N'U') IS NOT NULL SELECT 1`)
      if (rs.rowsAffected.length) return
      await f.db.request().query(blp(table))
      await f.db.request().query(cutno1(table))
      await f.db.request().query(cutno2(table))
      await f.db.request().query(gsc(table))
      await f.db.request().query(sgc(table))
      await f.db.request().query(scp(table))
      await f.db.request().query(wcp(table))
    } catch (err) {
      f.log.error(err)
    }
  }, 2 * 60 * 60 * 1000)
}
