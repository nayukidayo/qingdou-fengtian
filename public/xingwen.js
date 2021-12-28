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
        "name": "biaobiao"
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
                "value": "型温异常数据"
            },
            "component": {
                "width": 181,
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
            "left": 843.75,
            "top": 12.15,
            "index": "93d3be4a-73b4-4dd9-83fc-d659f1117d7a",
            "zIndex": 3
        },
        {
            "title": "图片框",
            "name": "图片框",
            "icon": "icon-img",
            "img": "/img/imgborder.a784b680.png",
            "top": -1.35,
            "left": 780.3,
            "dataType": 0,
            "data": "/img/border/border5.png",
            "component": {
                "width": 319.55,
                "height": 75.2,
                "name": "imgborder",
                "prop": "imgborder"
            },
            "option": {
                "backgroundColor": "rgba(180, 181, 198, 0.1)",
                "opacity": 0
            },
            "index": "1128d530-a0c6-4402-bc16-a0e5827d3663",
            "zIndex": 2,
            "child": {}
        },
        {
            "title": "表格",
            "name": "表格2",
            "icon": "icon-table",
            "img": "/img/table.215c94c3.png",
            "top": 554.85,
            "left": 5.4,
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
            "dataFormatter": "function (data, params, refs) {\n  if (data.err === 0) {\n    data.data.forEach(v => {\n      const now = new Date(v.uptime)\n      const y = now.getFullYear()\n      const m = now.getMonth() + 1\n      const d = now.getDate()\n      v.uptime = `${y}年${m}月${d}日`\n    })\n    return data.data\n  }\n  return {}\n}",
            "stylesFormatter": "",
            "component": {
                "width": 1888,
                "height": 501.2,
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
                "count": 6,
                "index": false,
                "column": [
                    {
                        "label": "荒2-下-2",
                        "prop": "xingwen17",
                        "$index": 0
                    },
                    {
                        "label": "荒2-下-3",
                        "prop": "xingwen18",
                        "$index": 1
                    },
                    {
                        "label": "荒2-下-4",
                        "prop": "xingwen19",
                        "$index": 2
                    },
                    {
                        "label": "荒2-下-5",
                        "prop": "xingwen20",
                        "$index": 3
                    },
                    {
                        "label": "仕上上-1",
                        "prop": "xingwen21",
                        "$index": 4
                    },
                    {
                        "label": "仕上上-2",
                        "prop": "xingwen22",
                        "$index": 5
                    },
                    {
                        "label": "仕上上-3",
                        "prop": "xingwen23",
                        "$index": 6
                    },
                    {
                        "label": "仕上上-4",
                        "prop": "xingwen24",
                        "$index": 7
                    },
                    {
                        "label": "仕上上-5",
                        "prop": "xingwen25",
                        "$index": 8
                    },
                    {
                        "label": "仕上下-1",
                        "prop": "xingwen26",
                        "$index": 9
                    },
                    {
                        "label": "仕上下-2",
                        "prop": "xingwen27",
                        "$index": 10
                    },
                    {
                        "label": "仕上下-3",
                        "prop": "xingwen28",
                        "$index": 11
                    },
                    {
                        "label": "仕上下-4",
                        "prop": "xingwen29",
                        "$index": 12
                    },
                    {
                        "label": "仕上下-5",
                        "prop": "xingwen30",
                        "$index": 13
                    },
                    {
                        "label": "材料温度",
                        "prop": "xingwen31",
                        "$index": 14
                    },
                    {
                        "label": "温间精整荷重",
                        "prop": "xingwen32",
                        "$index": 15
                    },
                    {
                        "label": "更新时间",
                        "prop": "uptime",
                        "$index": 16
                    }
                ],
                "headerFontSize": 12
            },
            "index": "896c052e-6b88-410d-84d0-9c88073ddca4",
            "zIndex": 1,
            "child": {},
            "url": "http://127.0.0.1:3000/api/YICHANG",
            "dataMethod": "get"
        },
        {
            "title": "表格",
            "name": "表格1",
            "icon": "icon-table",
            "img": "/img/table.215c94c3.png",
            "top": 90.85,
            "left": 1.15,
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
            "dataFormatter": "function (data, params, refs) {\n  if (data.err === 0) {\n    return data.data\n  }\n  return {}\n}",
            "stylesFormatter": "",
            "component": {
                "width": 1890.25,
                "height": 450.5,
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
                "count": 6,
                "index": false,
                "column": [
                    {
                        "label": "品番",
                        "prop": "pinfan",
                        "$index": 0
                    },
                    {
                        "label": "荒1上-1",
                        "prop": "xingwen1",
                        "$index": 1
                    },
                    {
                        "label": "荒1上-2",
                        "prop": "xingwen2",
                        "$index": 2
                    },
                    {
                        "label": "荒1上-3",
                        "prop": "xingwen3",
                        "$index": 3
                    },
                    {
                        "label": "荒1上-4",
                        "prop": "xingwen4",
                        "$index": 4
                    },
                    {
                        "label": "荒1上-5",
                        "prop": "xingwen5",
                        "$index": 5
                    },
                    {
                        "label": "荒1下-1",
                        "prop": "xingwen6",
                        "$index": 6
                    },
                    {
                        "label": "荒1下-2",
                        "prop": "xingwen7",
                        "$index": 7
                    },
                    {
                        "label": "荒1下-3",
                        "prop": "xingwen8",
                        "$index": 8
                    },
                    {
                        "label": "荒1下-4",
                        "prop": "xingwen9",
                        "$index": 9
                    },
                    {
                        "label": "荒1下-5",
                        "prop": "xingwen10",
                        "$index": 10
                    },
                    {
                        "label": "荒2上-1",
                        "prop": "xingwen11",
                        "$index": 11
                    },
                    {
                        "label": "荒2上-2",
                        "prop": "xingwen12",
                        "$index": 12
                    },
                    {
                        "label": "荒2上-3",
                        "prop": "xingwen13",
                        "$index": 13
                    },
                    {
                        "label": "荒2上-4",
                        "prop": "xingwen14",
                        "$index": 14
                    },
                    {
                        "label": "荒2上-5",
                        "prop": "xingwen15",
                        "$index": 15
                    },
                    {
                        "label": "荒2-下-1",
                        "prop": "xingwen16",
                        "$index": 16
                    }
                ],
                "headerFontSize": 12
            },
            "index": "07c9fa39-af46-4561-876f-1b807e0bed56",
            "zIndex": 0,
            "child": {},
            "url": "http://127.0.0.1:3000/api/YICHANG",
            "dataMethod": "get"
        }
    ]
}