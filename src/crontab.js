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

function ratehis(table) {
  return `
    IF OBJECT_ID(N'dbo.TTFC2000TRATEHIS${table}', N'U') IS NULL
    BEGIN
      CREATE TABLE [dbo].[TTFC2000TRATEHIS${table}](
        [Name1] [varchar](255) NULL,
        [jdrate1] [int] NULL,
        [ctrate1] [int] NULL,
        [scdata1] [int] NULL,
        [uptime1] [smalldatetime] NULL,
        [Name2] [varchar](255) NULL,
        [jdrate2] [int] NULL,
        [ctrate2] [int] NULL,
        [scdata2] [int] NULL,
        [uptime2] [smalldatetime] NULL,
        [Name3] [varchar](255) NULL,
        [jdrate3] [int] NULL,
        [ctrate3] [int] NULL,
        [scdata3] [int] NULL,
        [uptime3] [smalldatetime] NULL,
        [Name4] [varchar](255) NULL,
        [jdrate4] [int] NULL,
        [ctrate4] [int] NULL,
        [scdata4] [int] NULL,
        [uptime4] [smalldatetime] NULL,
        [Name5] [varchar](255) NULL,
        [jdrate5] [int] NULL,
        [ctrate5] [int] NULL,
        [scdata5] [int] NULL,
        [uptime5] [smalldatetime] NULL,
        [Name6] [varchar](255) NULL,
        [jdrate6] [int] NULL,
        [ctrate6] [int] NULL,
        [scdata6] [int] NULL,
        [uptime6] [smalldatetime] NULL,
        [Name7] [varchar](255) NULL,
        [jdrate7] [int] NULL,
        [ctrate7] [int] NULL,
        [scdata7] [int] NULL,
        [uptime7] [smalldatetime] NULL,
        [Name8] [varchar](255) NULL,
        [jdrate8] [int] NULL,
        [ctrate8] [int] NULL,
        [scdata8] [int] NULL,
        [uptime8] [smalldatetime] NULL,
        [Name9] [varchar](255) NULL,
        [jdrate9] [int] NULL,
        [ctrate9] [int] NULL,
        [scdata9] [int] NULL,
        [uptime9] [smalldatetime] NULL,
        [Name10] [varchar](255) NULL,
        [jdrate10] [int] NULL,
        [ctrate10] [int] NULL,
        [scdata10] [int] NULL,
        [uptime10] [smalldatetime] NULL,
        [Name11] [varchar](255) NULL,
        [jdrate11] [int] NULL,
        [ctrate11] [int] NULL,
        [scdata11] [int] NULL,
        [uptime11] [smalldatetime] NULL,
        [Name12] [varchar](255) NULL,
        [jdrate12] [int] NULL,
        [ctrate12] [int] NULL,
        [scdata12] [int] NULL,
        [uptime12] [smalldatetime] NULL,
        [Name13] [varchar](255) NULL,
        [jdrate13] [int] NULL,
        [ctrate13] [int] NULL,
        [scdata13] [int] NULL,
        [uptime13] [smalldatetime] NULL,
        [Name14] [varchar](255) NULL,
        [jdrate14] [int] NULL,
        [ctrate14] [int] NULL,
        [scdata14] [int] NULL,
        [uptime14] [smalldatetime] NULL,
        [Name15] [varchar](255) NULL,
        [jdrate15] [int] NULL,
        [ctrate15] [int] NULL,
        [scdata15] [int] NULL,
        [uptime15] [smalldatetime] NULL,
        [Name16] [varchar](255) NULL,
        [jdrate16] [int] NULL,
        [ctrate16] [int] NULL,
        [scdata16] [int] NULL,
        [uptime16] [smalldatetime] NULL,
        [uptimea] [timestamp] NOT NULL,
        [Id] [bigint] IDENTITY(1,1) NOT NULL,
        CONSTRAINT [PK_TTFC2000TRATEHIS${table}] PRIMARY KEY CLUSTERED ([Id] ASC)
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
      const rs = await f.db.request().query(`IF OBJECT_ID(N'dbo.TTFC2000TWCP2${table}', N'U') IS NOT NULL SELECT 1`)
      if (rs.rowsAffected.length) return
      await f.db.request().query(blp(table))
      await f.db.request().query(cutno1(table))
      await f.db.request().query(cutno2(table))
      await f.db.request().query(gsc(table))
      await f.db.request().query(sgc(table))
      await f.db.request().query(scp(table))
      await f.db.request().query(wcp(table))
      await f.db.request().query(ratehis(table))
    } catch (err) {
      f.log.error(err)
    }
  }, 2 * 60 * 60 * 1000)
}
