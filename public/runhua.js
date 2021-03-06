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
                "value": "润滑异常数据"
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
            "left": 851.85,
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
            "left": 783,
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
            "top": 567,
            "left": 0,
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
                "width": 1897.45,
                "height": 489.05,
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
                        "label": "3回目液量-1荒上",
                        "prop": "runhua17",
                        "$index": 0
                    },
                    {
                        "label": "3回目液量-1荒下",
                        "prop": "runhua18",
                        "$index": 1
                    },
                    {
                        "label": "3回目液量-2荒上",
                        "prop": "runhua19",
                        "$index": 2
                    },
                    {
                        "label": "3回目液量-2荒下",
                        "prop": "runhua20",
                        "$index": 3
                    },
                    {
                        "label": "3回目液量-仕上上",
                        "prop": "runhua21",
                        "$index": 4
                    },
                    {
                        "label": "3回目液量-仕上下",
                        "prop": "runhua22",
                        "$index": 5
                    },
                    {
                        "label": "混合气压-1荒",
                        "prop": "runhua23",
                        "$index": 6
                    },
                    {
                        "label": "混合气压-2荒",
                        "prop": "runhua24",
                        "$index": 7
                    },
                    {
                        "label": "混合气压-仕上",
                        "prop": "runhua25",
                        "$index": 8
                    },
                    {
                        "label": "PA压-荒1",
                        "prop": "runhua26",
                        "$index": 9
                    },
                    {
                        "label": "PA压-荒2",
                        "prop": "runhua27",
                        "$index": 10
                    },
                    {
                        "label": "PA压-仕上",
                        "prop": "runhua28",
                        "$index": 11
                    },
                    {
                        "label": "干燥气压-1荒",
                        "prop": "runhua29",
                        "$index": 12
                    },
                    {
                        "label": "干燥气压-2荒",
                        "prop": "runhua30",
                        "$index": 13
                    },
                    {
                        "label": "干燥气压-仕上",
                        "prop": "runhua31",
                        "$index": 14
                    },
                    {
                        "label": "液压-1荒上",
                        "prop": "runhua32",
                        "$index": 15
                    },
                    {
                        "label": "液压-1荒下",
                        "prop": "runhua33",
                        "$index": 16
                    },
                    {
                        "label": "液压-2荒上",
                        "prop": "runhua34",
                        "$index": 17
                    },
                    {
                        "label": "液压-2荒下",
                        "prop": "runhua35",
                        "$index": 18
                    },
                    {
                        "label": "液压-仕上上",
                        "prop": "runhua36",
                        "$index": 19
                    },
                    {
                        "label": "液压-仕上下",
                        "prop": "runhua37",
                        "$index": 20
                    }
                ],
                "headerFontSize": 12
            },
            "index": "896c052e-6b88-410d-84d0-9c88073ddca4",
            "zIndex": 1,
            "child": {},
            "url": "/api/v2/yichang",
            "dataMethod": "get",
            "time": 600000
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
            "dataFormatter": "function (data, params, refs) {\n  if (data.err === 0) {\n    data.data.forEach(v => {\n      const now = new Date(v.uptime)\n      const date = now.toLocaleDateString('cn')\n      const time = now.toLocaleTimeString('uk')\n      v.uptime = `${date} ${time}`\n    })\n    return data.data\n  }\n  return {}\n}",
            "stylesFormatter": "",
            "component": {
                "width": 1895.65,
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
                        "label": "更新时间",
                        "prop": "uptime",
                        "width": "200",
                        "$index": 0
                    },
                    {
                        "label": "品番",
                        "prop": "pinfan",
                        "width": "50",
                        "$index": 1
                    },
                    {
                        "label": "S/H",
                        "prop": "runhua1",
                        "$index": 2
                    },
                    {
                        "label": "荒1荷重",
                        "prop": "runhua2",
                        "$index": 3
                    },
                    {
                        "label": "荒2荷重",
                        "prop": "runhua3",
                        "$index": 4
                    },
                    {
                        "label": "仕上+背切荷重",
                        "prop": "runhua4",
                        "$index": 5
                    },
                    {
                        "label": "1回目液量-1荒上",
                        "prop": "runhua5",
                        "$index": 6
                    },
                    {
                        "label": "1回目液量-1荒下",
                        "prop": "runhua6",
                        "$index": 7
                    },
                    {
                        "label": "1回目液量-2荒上",
                        "prop": "runhua7",
                        "$index": 8
                    },
                    {
                        "label": "1回目液量-2荒下",
                        "prop": "runhua8",
                        "$index": 9
                    },
                    {
                        "label": "1回目液量-仕上上",
                        "prop": "runhua9",
                        "$index": 10
                    },
                    {
                        "label": "1回目液量-仕上下",
                        "prop": "runhua10",
                        "$index": 11
                    },
                    {
                        "label": "2回目液量-1荒上",
                        "prop": "runhua11",
                        "$index": 12
                    },
                    {
                        "label": "2回目液量-1荒下",
                        "prop": "runhua12",
                        "$index": 13
                    },
                    {
                        "label": "2回目液量-2荒上",
                        "prop": "runhua13",
                        "$index": 14
                    },
                    {
                        "label": "2回目液量-2荒下",
                        "prop": "runhua14",
                        "$index": 15
                    },
                    {
                        "label": "2回目液量-仕上上",
                        "prop": "runhua15",
                        "$index": 16
                    },
                    {
                        "label": "2回目液量-仕上下",
                        "prop": "runhua16",
                        "$index": 17
                    }
                ],
                "headerFontSize": 12
            },
            "index": "07c9fa39-af46-4561-876f-1b807e0bed56",
            "zIndex": 0,
            "child": {},
            "url": "/api/v2/yichang",
            "dataMethod": "get",
            "time": 600000
        }
    ]
}