const option ={
  "detail": {
      "width": 1920,
      "height": 1080,
      "query": {},
      "header": "",
      "mark": {},
      "scale": 61.458333333333336,
      "backgroundImage": "/img/bg/bg2.png",
      "url": "",
      "gradeShow": false,
      "gradeLen": 30,
      "name": "2000t"
  },
  "component": [
      {
          "title": "超链接",
          "name": "超链接",
          "icon": "icon-link",
          "img": "/img/text3.f5d96f13.png",
          "top": 10.53,
          "left": 1711.71,
          "data": {
              "value": "历史数据"
          },
          "dataFormatter": "",
          "stylesFormatter": "",
          "component": {
              "width": 142.12,
              "height": 39.47,
              "name": "text",
              "prop": "text"
          },
          "option": {
              "link": true,
              "linkHref": "/history.html",
              "linkTarget": "_blank",
              "textAlign": "center",
              "fontSize": 24,
              "fontWeight": "normal",
              "color": "rgba(144, 240, 144, 0.5)",
              "split": 0,
              "lineHeight": 0,
              "backgroundColor": ""
          },
          "index": "490a8b18-8661-4ece-8513-0883e4379adc",
          "zIndex": 23,
          "child": {
              "index": []
          }
      },
      {
          "title": "超链接",
          "name": "超链接",
          "icon": "icon-link",
          "img": "/img/text3.f5d96f13.png",
          "top": 10.5,
          "left": 474.6,
          "data": {
              "value": "详细"
          },
          "dataFormatter": "",
          "stylesFormatter": "",
          "component": {
              "width": 100,
              "height": 29,
              "name": "text",
              "prop": "text"
          },
          "option": {
              "link": true,
              "linkHref": "http://192.168.0.200:8391/index",
              "linkTarget": "_blank",
              "textAlign": "center",
              "fontSize": 16,
              "fontWeight": "normal",
              "color": "rgba(144, 240, 144, 0.5)",
              "split": 0,
              "lineHeight": 0
          },
          "index": "0fa6ef65-ba38-4a3c-9988-e4a42c817501",
          "zIndex": 22,
          "child": {
              "index": []
          }
      },
      {
          "title": "超链接",
          "name": "详细",
          "icon": "icon-link",
          "img": "/img/text3.f5d96f13.png",
          "top": 658.05,
          "left": 1653.6,
          "data": {
              "value": "润滑异常"
          },
          "dataFormatter": "",
          "stylesFormatter": "",
          "component": {
              "width": 89.2,
              "height": 35.15,
              "name": "text",
              "prop": "text"
          },
          "option": {
              "link": true,
              "linkHref": "/runhua.html",
              "linkTarget": "_blank",
              "textAlign": "center",
              "fontSize": 16,
              "fontWeight": "normal",
              "color": "rgba(144, 240, 144, 0.5)",
              "split": 0,
              "lineHeight": 0
          },
          "index": "1b4f4b8e-0a27-41cf-a89f-9ca3f1324f83",
          "zIndex": 21,
          "child": {
              "index": []
          },
          "display": false
      },
      {
          "title": "超链接",
          "name": "详细",
          "icon": "icon-link",
          "img": "/img/text3.f5d96f13.png",
          "top": 658.98,
          "left": 1751.13,
          "data": {
              "value": "型温异常"
          },
          "dataFormatter": "",
          "stylesFormatter": "",
          "component": {
              "width": 89.2,
              "height": 35.15,
              "name": "text",
              "prop": "text"
          },
          "option": {
              "link": true,
              "linkHref": "/xingwen.html",
              "linkTarget": "_blank",
              "textAlign": "center",
              "fontSize": 16,
              "fontWeight": "normal",
              "color": "rgba(144, 240, 144, 0.5)",
              "split": 0,
              "lineHeight": 0
          },
          "index": "5debc5d2-9c0c-4349-8dee-b10eea6cf135",
          "zIndex": 20,
          "child": {
              "index": []
          },
          "display": false
      },
      {
          "title": "颜色块",
          "name": "颜色块",
          "icon": "icon-flop",
          "img": "/img/flop2.31ee8a48.png",
          "child": {
              "index": [],
              "paramName": ""
          },
          "top": 79.95,
          "left": 1331.1,
          "dataType": 1,
          "data": [
              {
                  "backgroundColor": "#67C23A",
                  "prefixText": "当前生产数量",
                  "value": "12345",
                  "suffixText": "个"
              },
              {
                  "backgroundColor": "#409EFF",
                  "prefixText": "计划生产数量",
                  "value": "12345",
                  "suffixText": "个"
              },
              {
                  "backgroundColor": "#E6A23C",
                  "prefixText": "设备可动率",
                  "value": "12345",
                  "suffixText": "%"
              },
              {
                  "backgroundColor": "#F56C6C",
                  "prefixText": "目标完成度",
                  "value": "12345",
                  "suffixText": "%"
              }
          ],
          "dataFormatter": "function (data, params, refs) {\n  if (data.err === 0) {\n    return [\n      {\n        backgroundColor: '#67C23A',\n        prefixText: '当前生产数量',\n        value: data.data.scdata,\n        suffixText: '个',\n      },\n      {\n        backgroundColor: '#409EFF',\n        prefixText: '计划生产数量',\n        value: data.data.mubiao,\n\n        suffixText: '个',\n      },\n      {\n        backgroundColor: '#E6A23C',\n        prefixText: '设备可动率',\n        value: data.data.jdrate,\n\n        suffixText: '%',\n      },\n      {\n        backgroundColor: '#F56C6C',\n        prefixText: '目标完成度',\n        value: data.data.cpl,\n\n        suffixText: '%',\n      },\n    ]\n  }\n  return {}\n}\n",
          "stylesFormatter": "",
          "component": {
              "width": 554.55,
              "height": 208.4,
              "name": "flop",
              "prop": "flop"
          },
          "option": {
              "span": 2,
              "decimals": 0,
              "whole": true,
              "padding": 12,
              "textAlign": "left",
              "splity": 8,
              "splitx": 17,
              "fontSize": 28,
              "prefixSplity": 4,
              "prefixFontSize": 13,
              "backgroundColor": "#F56C6C",
              "suffixText": "人",
              "suffixInline": true,
              "suffixSplitx": 10,
              "suffixFontSize": 18,
              "prefixSplitx": 0,
              "suffixSplity": 0
          },
          "index": "1b7f7b4d-52cb-4a39-a790-2dec0cb481b2",
          "zIndex": 19,
          "time": 600000,
          "url": "/api/v1/STAT",
          "dataMethod": "get"
      },
      {
          "title": "颜色块",
          "name": "颜色块",
          "icon": "icon-flop",
          "img": "/img/flop2.31ee8a48.png",
          "child": {
              "index": [],
              "paramName": ""
          },
          "top": 199.8,
          "left": 603.45,
          "dataType": 1,
          "data": [
              {
                  "value": "12345"
              },
              {
                  "value": "12345"
              }
          ],
          "dataFormatter": "function (data, params, refs) {\n  if (data.err === 0) {\n    return [\n      {\n        value: data.data.mianji1,\n      },\n      {\n        value: data.data.mianji2,\n      },\n    ]\n  }\n  return {}\n}",
          "stylesFormatter": "",
          "component": {
              "width": 711.15,
              "height": 36.95,
              "name": "flop",
              "prop": "flop"
          },
          "option": {
              "span": 2,
              "decimals": 0,
              "whole": true,
              "padding": 12,
              "textAlign": "center",
              "splity": 0,
              "splitx": 0,
              "fontSize": 28,
              "prefixSplity": 4,
              "prefixFontSize": 13,
              "backgroundColor": "#F56C6C",
              "suffixText": "人",
              "suffixInline": true,
              "suffixSplitx": 10,
              "suffixFontSize": 18,
              "prefixSplitx": 0,
              "suffixSplity": 0,
              "type": "",
              "color": "rgba(30, 144, 255, 1)",
              "empColor": "rgba(30, 144, 255, 1)",
              "fontWeight": "bold"
          },
          "index": "57bcd463-54d1-4a58-8e2f-b4483e6f6a25",
          "zIndex": 18,
          "url": "/api/v1/MIANJI",
          "dataMethod": "get",
          "time": 600000
      },
      {
          "title": "文本框",
          "name": "文本框",
          "icon": "icon-text",
          "img": "/img/text.852a3c54.png",
          "dataType": 0,
          "dataFormatter": "",
          "stylesFormatter": "",
          "child": {
              "index": [],
              "paramName": ""
          },
          "data": {
              "value": "异常数据"
          },
          "component": {
              "width": 197.09,
              "height": 40,
              "name": "text",
              "prop": "text"
          },
          "option": {
              "textAlign": "center",
              "fontSize": 26,
              "fontWeight": "bold",
              "color": "rgba(0, 186, 189, 1)",
              "split": 0,
              "lineHeight": 0,
              "link": false,
              "linkTarget": "_blank",
              "linkHref": ""
          },
          "left": 655.69,
          "top": 657.02,
          "index": "6a11d0d2-3bae-4fba-9309-2fa5e52b2fdf",
          "zIndex": 17
      },
      {
          "title": "文本框",
          "name": "文本框",
          "icon": "icon-text",
          "img": "/img/text.852a3c54.png",
          "dataType": 0,
          "dataFormatter": "",
          "stylesFormatter": "",
          "child": {
              "index": [],
              "paramName": ""
          },
          "data": {
              "value": "锯切机#2切断面积"
          },
          "component": {
              "width": 248.96,
              "height": 40,
              "name": "text",
              "prop": "text"
          },
          "option": {
              "textAlign": "center",
              "fontSize": 26,
              "fontWeight": "normal",
              "color": "rgba(255, 140, 0, 1)",
              "split": 0,
              "lineHeight": 0
          },
          "left": 1005.48,
          "top": 139.65,
          "index": "734d0e5e-d913-42d7-b5bc-94593e289ad9",
          "zIndex": 16
      },
      {
          "title": "文本框",
          "name": "文本框",
          "icon": "icon-text",
          "img": "/img/text.852a3c54.png",
          "dataType": 0,
          "dataFormatter": "",
          "stylesFormatter": "",
          "child": {
              "index": [],
              "paramName": ""
          },
          "data": {
              "value": "锯切机#1切断面积"
          },
          "component": {
              "width": 221.03,
              "height": 40,
              "name": "text",
              "prop": "text"
          },
          "option": {
              "textAlign": "center",
              "fontSize": 26,
              "fontWeight": "normal",
              "color": "rgba(255, 140, 0, 1)",
              "split": 0,
              "lineHeight": 0
          },
          "left": 668.99,
          "top": 140.98,
          "index": "f4cf792e-052b-47e8-85fa-4d5cd398d9e4",
          "zIndex": 15
      },
      {
          "title": "表格",
          "name": "表格",
          "icon": "icon-table",
          "img": "/img/table.215c94c3.png",
          "top": 698.41,
          "left": 639.73,
          "dataType": 1,
          "data": [
              {
                  "type1": "数据1",
                  "type2": "数据1"
              },
              {
                  "type1": "数据2",
                  "type2": "数据2"
              },
              {
                  "type1": "数据3",
                  "type2": "数据3"
              },
              {
                  "type1": "数据4",
                  "type2": "数据4"
              }
          ],
          "dataFormatter": "function (data, params, refs) {\n  if (data.err === 0) {\n    data.data.forEach(v => {\n      const now = new Date(v.uptime)\n      const date = now.toLocaleDateString('cn')\n      const time = now.toLocaleTimeString('uk')\n      v.uptime = `${date} ${time}`\n    })\n    return data.data\n  }\n  return {}\n}",
          "stylesFormatter": "",
          "component": {
              "width": 1228.07,
              "height": 336.7,
              "name": "table",
              "prop": "table"
          },
          "option": {
              "columnShow": true,
              "columnViews": true,
              "headerBackground": "rgba(8, 90, 111, 0.8)",
              "headerColor": "rgba(154, 168, 212, 1)",
              "headerTextAlign": "center",
              "nthColor": "rgba(14, 86, 241, 0.08)",
              "bodyBackground": "rgba(0, 0, 0, 0.01)",
              "bodyColor": "rgba(154, 168, 212, 1)",
              "bodyTextAlign": "center",
              "align": "center",
              "headerAlign": "center",
              "header": false,
              "scrollSpeed": 1,
              "fontSize": 15,
              "count": 5,
              "index": false,
              "column": [
                  {
                      "label": "品番",
                      "prop": "pinfan",
                      "$index": 0
                  },
                  {
                      "label": "S/H",
                      "prop": "runhua1",
                      "$index": 1
                  },
                  {
                      "label": "荒1荷重",
                      "prop": "runhua2",
                      "$index": 2
                  },
                  {
                      "label": "荒2荷重",
                      "prop": "runhua3",
                      "$index": 3
                  },
                  {
                      "label": "仕上+背切荷重",
                      "prop": "runhua4",
                      "$index": 4
                  },
                  {
                      "label": "材料温度",
                      "prop": "xingwen31",
                      "$index": 5
                  },
                  {
                      "label": "温间精整荷重",
                      "prop": "xingwen32",
                      "$index": 6
                  },
                  {
                      "$hide": "显示",
                      "label": "更新时间",
                      "prop": "uptime",
                      "width": "200",
                      "hide": false,
                      "$index": 7
                  }
              ]
          },
          "index": "4f425ed0-cc3e-4c18-8581-ddf307c95f25",
          "zIndex": 14,
          "child": {},
          "time": 600000,
          "url": "/api/v1/YICHANG",
          "dataMethod": "get"
      },
      {
          "title": "文本框",
          "name": "文本框",
          "icon": "icon-text",
          "img": "/img/text.852a3c54.png",
          "dataType": 0,
          "dataFormatter": "",
          "stylesFormatter": "",
          "child": {
              "index": [],
              "paramName": ""
          },
          "data": {
              "value": "设备可动率"
          },
          "component": {
              "width": 156.35,
              "height": 40,
              "name": "text",
              "prop": "text"
          },
          "option": {
              "textAlign": "center",
              "fontSize": 26,
              "fontWeight": "bold",
              "color": "rgba(0, 186, 189, 1)",
              "split": 0,
              "lineHeight": 0
          },
          "left": 43.7,
          "top": 11.5,
          "index": "049dfbe9-002a-4f4d-a5ab-4aab67dbe1c7",
          "zIndex": 13
      },
      {
          "title": "表格",
          "name": "表格",
          "icon": "icon-table",
          "img": "/img/table.215c94c3.png",
          "top": 49.98,
          "left": 25.47,
          "dataType": 1,
          "data": [
              {
                  "type1": "数据1",
                  "type2": "数据1"
              },
              {
                  "type1": "数据2",
                  "type2": "数据2"
              },
              {
                  "type1": "数据3",
                  "type2": "数据3"
              },
              {
                  "type1": "数据4",
                  "type2": "数据4"
              }
          ],
          "dataFormatter": "function (data, params, refs) {\n  if (data.err === 0) {\n    return data.data\n  }\n  return {}\n}\n",
          "stylesFormatter": "",
          "component": {
              "width": 550.38,
              "height": 560.18,
              "name": "table",
              "prop": "table"
          },
          "option": {
              "columnShow": true,
              "columnViews": true,
              "headerBackground": "rgba(8, 90, 111, 0.8)",
              "headerColor": "rgba(154, 168, 212, 1)",
              "headerTextAlign": "center",
              "nthColor": "rgba(14, 86, 241, 0.08)",
              "bodyBackground": "rgba(0, 0, 0, 0.01)",
              "bodyColor": "rgba(154, 168, 212, 1)",
              "bodyTextAlign": "center",
              "align": "center",
              "headerAlign": "center",
              "header": false,
              "scrollSpeed": 1,
              "fontSize": 15,
              "count": 16,
              "index": false,
              "column": [
                  {
                      "$hide": "显示",
                      "label": "设备名称",
                      "prop": "name",
                      "width": "",
                      "hide": false,
                      "$index": 0
                  },
                  {
                      "$hide": "显示",
                      "label": "可动率%",
                      "prop": "jdrate",
                      "width": "",
                      "hide": false,
                      "$index": 1
                  },
                  {
                      "$hide": "显示",
                      "label": "CT时间",
                      "prop": "ctrate",
                      "width": "",
                      "hide": false,
                      "$index": 2
                  },
                  {
                      "$hide": "显示",
                      "label": "产量",
                      "prop": "scdata",
                      "width": "",
                      "hide": false,
                      "$index": 3
                  }
              ]
          },
          "index": "95beaced-fcc1-4182-a8f4-a70bf766b305",
          "zIndex": 12,
          "child": {},
          "url": "/api/v1/RATE",
          "dataMethod": "get",
          "time": 600000
      },
      {
          "title": "文本框",
          "name": "文本框",
          "icon": "icon-text",
          "img": "/img/text.852a3c54.png",
          "dataType": 0,
          "dataFormatter": "",
          "stylesFormatter": "",
          "child": {
              "index": [],
              "paramName": ""
          },
          "data": {
              "value": "不良品数据"
          },
          "component": {
              "width": 171.15,
              "height": 40,
              "name": "text",
              "prop": "text"
          },
          "option": {
              "textAlign": "center",
              "fontSize": 26,
              "fontWeight": "bold",
              "color": "rgba(0, 206, 209, 1)",
              "split": 0,
              "lineHeight": 0,
              "scroll": false,
              "backgroundColor": ""
          },
          "left": 36.25,
          "top": 658.92,
          "index": "8d103f17-c610-4d82-8791-70a9580ee0de",
          "zIndex": 11
      },
      {
          "title": "表格",
          "name": "表格",
          "icon": "icon-table",
          "img": "/img/table.215c94c3.png",
          "top": 700.32,
          "left": 25.21,
          "dataType": 1,
          "data": [
              {
                  "type1": "数据1",
                  "type2": "数据1"
              },
              {
                  "type1": "数据2",
                  "type2": "数据2"
              },
              {
                  "type1": "数据3",
                  "type2": "数据3"
              },
              {
                  "type1": "数据4",
                  "type2": "数据4"
              }
          ],
          "dataFormatter": "function (data, params, refs) {\n  if (data.err === 0) {\n    return data.data\n  }\n  return {}\n}\n",
          "stylesFormatter": "",
          "component": {
              "width": 558.45,
              "height": 353.45,
              "name": "table",
              "prop": "table"
          },
          "option": {
              "columnShow": true,
              "columnViews": true,
              "headerBackground": "rgba(8, 90, 111, 0.8)",
              "headerColor": "rgba(154, 168, 212, 1)",
              "headerTextAlign": "center",
              "nthColor": "rgba(14, 86, 241, 0.08)",
              "bodyBackground": "rgba(0, 0, 0, 0.01)",
              "bodyColor": "rgba(154, 168, 212, 1)",
              "bodyTextAlign": "center",
              "align": "center",
              "headerAlign": "center",
              "header": false,
              "scrollSpeed": 1,
              "fontSize": 15,
              "count": 5,
              "index": false,
              "column": [
                  {
                      "$hide": "显示",
                      "label": "班次",
                      "prop": "banci",
                      "width": "",
                      "hide": false,
                      "$index": 0
                  },
                  {
                      "$hide": "显示",
                      "label": "品番",
                      "prop": "pinfan",
                      "width": "",
                      "hide": false,
                      "$index": 1
                  },
                  {
                      "$hide": "显示",
                      "label": "数量",
                      "prop": "num",
                      "width": "",
                      "hide": false,
                      "$index": 2
                  },
                  {
                      "$hide": "显示",
                      "label": "时间",
                      "prop": "date",
                      "width": "200",
                      "hide": false,
                      "$index": 3
                  }
              ],
              "border": false,
              "dataAppend": false,
              "scroll": false,
              "scrollTime": 3
          },
          "index": "fb09f343-62ac-4502-9225-84184938f129",
          "zIndex": 10,
          "child": {},
          "url": "/api/v1/BLP",
          "dataMethod": "get",
          "display": false,
          "time": 600000
      },
      {
          "title": "文本框",
          "name": "文本框",
          "icon": "icon-text",
          "img": "/img/text.852a3c54.png",
          "dataType": 0,
          "dataFormatter": "",
          "stylesFormatter": "",
          "child": {
              "index": [],
              "paramName": ""
          },
          "data": {
              "value": "TTFC2000T数据展示"
          },
          "component": {
              "width": 632.87,
              "height": 42.66,
              "name": "text",
              "prop": "text"
          },
          "option": {
              "textAlign": "center",
              "fontSize": 42,
              "fontWeight": "bold",
              "color": "#fff",
              "split": 2,
              "lineHeight": 0
          },
          "left": 637.24,
          "top": 22.42,
          "index": "b04c2c49-5198-43fd-8cf6-ce6fa5032577",
          "zIndex": 9
      },
      {
          "title": "文件夹",
          "name": "文件夹",
          "index": "33eb3e71-3c21-4d6d-880d-0623cd70ecb2",
          "children": [
              {
                  "title": "选项卡",
                  "name": "选项卡",
                  "icon": "icon-tabs",
                  "child": {
                      "index": [
                          "c41023a1-e9b1-46cc-a0ae-b3256d8e87bc"
                      ],
                      "paramName": "type"
                  },
                  "dataFormatter": "",
                  "dataType": 0,
                  "data": [
                      {
                          "label": "完成品",
                          "value": "WCP"
                      },
                      {
                          "label": "手持品",
                          "value": "SCP"
                      },
                      {
                          "label": "锯切机1号切断数",
                          "value": "CUTNO1"
                      },
                      {
                          "label": "锯切机2号切断数",
                          "value": "CUTNO2"
                      },
                      {
                          "label": "过烧材",
                          "value": "GSC"
                      },
                      {
                          "label": "烧过材",
                          "value": "SGC"
                      }
                  ],
                  "component": {
                      "width": 1242.16,
                      "height": 53.39,
                      "name": "tabs",
                      "prop": "tabs"
                  },
                  "option": {
                      "type": "tabs",
                      "color": "#eee",
                      "empColor": "#4dffff",
                      "fontSize": 18,
                      "split": 8,
                      "empBackgroundImage": "/img/banner/banner5.png",
                      "backgroundImage": "/img/banner/banner4.png",
                      "iconSplit": 0
                  },
                  "left": 631.95,
                  "top": 296.74,
                  "index": "7481deb9-3cdf-4c90-9cb9-ba6ed4e6d49f",
                  "zIndex": 8
              },
              {
                  "name": "折线图v1",
                  "title": "折线图",
                  "icon": "icon-line",
                  "img": "/img/line.d9ed6cf6.png",
                  "dataType": 1,
                  "dataMethod": "get",
                  "data": {
                      "categories": [
                          "1",
                          "2",
                          "3",
                          "4",
                          "5",
                          "6",
                          "7",
                          "8",
                          "9",
                          "10",
                          "11",
                          "12",
                          "13",
                          "14",
                          "15",
                          "16",
                          "17",
                          "18",
                          "19",
                          "20",
                          "21",
                          "22",
                          "23",
                          "24",
                          "25",
                          "26",
                          "27",
                          "28",
                          "29",
                          "30",
                          "31"
                      ],
                      "series": [
                          {
                              "name": "早班",
                              "data": [
                                  1,
                                  2,
                                  2,
                                  3,
                                  1
                              ]
                          },
                          {
                              "name": "中班",
                              "data": [
                                  2,
                                  1,
                                  1,
                                  2,
                                  3
                              ]
                          }
                      ]
                  },
                  "dataFormatter": "function (data, params, refs) {\n  const rs = {\n    categories: [\n      '1',\n      '2',\n      '3',\n      '4',\n      '5',\n      '6',\n      '7',\n      '8',\n      '9',\n      '10',\n      '11',\n      '12',\n      '13',\n      '14',\n      '15',\n      '16',\n      '17',\n      '18',\n      '19',\n      '20',\n      '21',\n      '22',\n      '23',\n      '24',\n      '25',\n      '26',\n      '27',\n      '28',\n      '29',\n      '30',\n      '31',\n    ],\n    series: [],\n  }\n  if (data.err === 0) {\n    rs.series = data.data\n  }\n  return rs\n}",
                  "stylesFormatter": "",
                  "url": "/api/v1/day",
                  "time": 600000,
                  "component": {
                      "width": 1261.59,
                      "height": 300.69,
                      "name": "line",
                      "prop": "line"
                  },
                  "option": {
                      "gridX": 90,
                      "gridY": 0,
                      "gridX2": 60,
                      "gridY2": 0,
                      "nameColor": "#eee",
                      "lineColor": "#eee",
                      "lineWidth": 5,
                      "xNameFontSize": 16,
                      "yNameFontSize": 16,
                      "labelShow": false,
                      "labelShowFontSize": 14,
                      "labelShowFontWeight": 300,
                      "yAxisInverse": false,
                      "xAxisInverse": false,
                      "xAxisShow": true,
                      "yAxisShow": true,
                      "xAxisSplitLineShow": false,
                      "yAxisSplitLineShow": false,
                      "barWidth": 30,
                      "barRadius": 8,
                      "barColor": [
                          {
                              "color1": "rgba(30, 144, 255, 1)",
                              "color2": "",
                              "postion": 1,
                              "$index": 0
                          },
                          {
                              "color1": "rgba(255, 120, 0, 1)",
                              "color2": "",
                              "postion": 2,
                              "$index": 1
                          },
                          {
                              "color1": "rgba(0, 206, 209, 1)",
                              "color2": "",
                              "postion": 3,
                              "$index": 2
                          },
                          {
                              "color1": "rgba(145, 255, 0, 1)",
                              "color2": "",
                              "postion": 4,
                              "$index": 3
                          },
                          {
                              "color1": "rgba(85, 0, 255, 1)",
                              "color2": "",
                              "postion": 5,
                              "$index": 4
                          },
                          {
                              "color1": "rgba(255, 0, 123, 1)",
                              "color2": "",
                              "postion": 6,
                              "$index": 5
                          },
                          {
                              "color1": "rgba(255, 0, 0, 1)",
                              "color2": "",
                              "postion": 7,
                              "$index": 6
                          },
                          {
                              "color1": "rgba(255, 251, 0, 1)",
                              "color2": "",
                              "postion": 8,
                              "$index": 7
                          }
                      ],
                      "symbolSize": 6,
                      "smooth": false,
                      "barMinHeight": 2,
                      "xAxisinterval": false,
                      "legend": true,
                      "xAxisName": "日期/天",
                      "yAxisName": "数量/根"
                  },
                  "left": 603.6,
                  "top": 363.78,
                  "index": "c41023a1-e9b1-46cc-a0ae-b3256d8e87bc",
                  "zIndex": 7,
                  "child": {}
              }
          ],
          "menu": false,
          "isname": false
      },
      {
          "title": "图片框",
          "name": "图片框",
          "icon": "icon-img",
          "img": "/img/imgborder.a784b680.png",
          "top": 649.41,
          "left": 13.02,
          "dataType": 0,
          "data": "/img/border/border16.png",
          "component": {
              "width": 582.68,
              "height": 408.77,
              "name": "imgborder",
              "prop": "imgborder"
          },
          "option": {
              "backgroundColor": "rgba(180, 181, 198, 0.1)",
              "opacity": 0
          },
          "index": "a7235d6f-b241-4f1b-89ac-bf4b02fca839",
          "zIndex": 6,
          "child": {}
      },
      {
          "title": "图片框",
          "name": "图片框",
          "icon": "icon-img",
          "img": "/img/imgborder.a784b680.png",
          "top": 3.85,
          "left": 14.44,
          "dataType": 0,
          "data": "/img/border/border16.png",
          "component": {
              "width": 578.66,
              "height": 634.36,
              "name": "imgborder",
              "prop": "imgborder"
          },
          "option": {
              "backgroundColor": "rgba(180, 181, 198, 0.1)",
              "opacity": 0
          },
          "index": "0eedd255-766a-43af-8f7e-33ff3131d824",
          "zIndex": 5,
          "child": {}
      },
      {
          "title": "图片框",
          "name": "图片框",
          "icon": "icon-img",
          "img": "/img/imgborder.a784b680.png",
          "top": 109.04,
          "left": 622.44,
          "dataType": 0,
          "data": "/img/border/border4.png",
          "component": {
              "width": 328.86,
              "height": 171.92,
              "name": "imgborder",
              "prop": "imgborder"
          },
          "option": {
              "backgroundColor": "rgba(180, 181, 198, 0.1)",
              "opacity": 0
          },
          "index": "104d1d55-d63b-42f7-8330-fb0f309459bb",
          "zIndex": 4,
          "child": {}
      },
      {
          "title": "图片框",
          "name": "图片框",
          "icon": "icon-img",
          "img": "/img/imgborder.a784b680.png",
          "top": 64.74,
          "left": 1315.37,
          "dataType": 0,
          "data": "/img/border/border10.png",
          "component": {
              "width": 565.6,
              "height": 216.24,
              "name": "imgborder",
              "prop": "imgborder"
          },
          "option": {
              "backgroundColor": "rgba(180, 181, 198, 0.1)",
              "opacity": 0
          },
          "index": "18179a80-74c5-4370-8f4c-b53ee720a77c",
          "zIndex": 3,
          "child": {}
      },
      {
          "title": "图片框",
          "name": "图片框",
          "icon": "icon-img",
          "img": "/img/imgborder.a784b680.png",
          "top": 287.28,
          "left": 621.11,
          "dataType": 0,
          "data": "/img/border/border5.png",
          "component": {
              "width": 1263.85,
              "height": 358.46,
              "name": "imgborder",
              "prop": "imgborder"
          },
          "option": {
              "backgroundColor": "rgba(180, 181, 198, 0.1)",
              "opacity": 0
          },
          "index": "33432d7f-2964-45b0-9be8-004b3cc5701b",
          "zIndex": 2,
          "child": {}
      },
      {
          "title": "图片框",
          "name": "图片框",
          "icon": "icon-img",
          "img": "/img/imgborder.a784b680.png",
          "top": 651.12,
          "left": 622.71,
          "dataType": 0,
          "data": "/img/border/border16.png",
          "component": {
              "width": 1264.07,
              "height": 404.38,
              "name": "imgborder",
              "prop": "imgborder"
          },
          "option": {
              "backgroundColor": "rgba(180, 181, 198, 0.1)",
              "opacity": 0
          },
          "index": "fe318fda-8cfb-47c3-8149-928aad1211b9",
          "zIndex": 1,
          "child": {}
      },
      {
          "title": "图片框",
          "name": "图片框",
          "icon": "icon-img",
          "img": "/img/imgborder.a784b680.png",
          "top": 109.06,
          "left": 965.5,
          "dataType": 0,
          "data": "/img/border/border4.png",
          "component": {
              "width": 328.86,
              "height": 173.25,
              "name": "imgborder",
              "prop": "imgborder"
          },
          "option": {
              "backgroundColor": "rgba(180, 181, 198, 0.1)",
              "opacity": 0
          },
          "index": "149a89cd-aba1-4c57-acf9-9132f7e6544f",
          "zIndex": 0,
          "child": {}
      }
  ]
}
