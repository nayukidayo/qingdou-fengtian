const option ={
  "detail": {
      "width": 1920,
      "height": 1080,
      "query": {},
      "header": "",
      "mark": {
          "show": false,
          "text": "avue数据大屏水印",
          "fontSize": 20,
          "color": "rgba(100,100,100,0.2)",
          "degree": -20
      },
      "scale": 105.72916666666667,
      "backgroundImage": "/img/bg/bg.png",
      "url": "",
      "gradeShow": false,
      "gradeLen": 30,
      "name": "qieduan"
  },
  "component": [
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
              "value": "切断面积"
          },
          "component": {
              "width": 250.15,
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
          "left": 831.6,
          "top": 14.7,
          "index": "5e83c3d7-6501-4593-871b-b05bd9a0ff7d",
          "zIndex": 2
      },
      {
          "title": "图片框",
          "name": "图片框",
          "icon": "icon-img",
          "img": "/img/imgborder.a784b680.png",
          "top": 0,
          "left": 813.75,
          "dataType": 0,
          "data": "/img/border/border5.png",
          "component": {
              "width": 290.15,
              "height": 78.05,
              "name": "imgborder",
              "prop": "imgborder"
          },
          "option": {
              "backgroundColor": "rgba(180, 181, 198, 0.1)",
              "opacity": 0
          },
          "index": "4146e391-8794-4ed3-bf61-28a569e9fd57",
          "zIndex": 1,
          "child": {}
      },
      {
          "title": "表格",
          "name": "表格",
          "icon": "icon-table",
          "img": "/img/table.215c94c3.png",
          "top": 94.5,
          "left": 1.05,
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
          "dataFormatter": "function (data, params, refs) {\n  if (data.err !== 0) {\n    return {}\n  }\n  data.data.forEach(v => {\n    const now = new Date(v.uptime)\n    const date = now.toLocaleDateString('cn')\n    const time = now.toLocaleTimeString('uk')\n    v.uptime = `${date} ${time}`\n    v.mianji1 = v.mianji1 || 0\n    v.mianji2 = v.mianji2 || 0\n  })\n  return data.data\n}",
          "stylesFormatter": "",
          "component": {
              "width": 1895.95,
              "height": 964.25,
              "name": "table",
              "prop": "table"
          },
          "option": {
              "showHeader": true,
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
              "count": 30,
              "index": true,
              "column": [
                  {
                      "$hide": "显示",
                      "label": "面积#1",
                      "prop": "mianji1",
                      "width": "",
                      "hide": false,
                      "$index": 0
                  },
                  {
                      "$hide": "显示",
                      "label": "面积#2",
                      "prop": "mianji2",
                      "width": "",
                      "hide": false,
                      "$index": 1
                  },
                  {
                      "$hide": "显示",
                      "label": "更新时间",
                      "prop": "uptime",
                      "width": "",
                      "hide": false,
                      "$index": 2
                  }
              ]
          },
          "index": "0cf41903-1ce0-4356-9269-9d12169bf9ed",
          "zIndex": 0,
          "child": {},
          "time": 600000,
          "url": "/api/v2/mianji",
          "dataMethod": "get"
      }
  ]
}