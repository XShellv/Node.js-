/**
 * Created by Administrator on 2018/11/26.
 */
//引入第三方包
var express = require('express')
var bodyParser = require('body-parser')

//调用express方法
var app = express()

//配置art-template
app.engine('html', require('express-art-template'))

//配置body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//开放node_modules和public这两个文件夹
app.use("/public/",express.static("./public/"))
app.use("/node_modules",express.static("./node_modules/"))

//导入路由
var router = require("./router.js")
app.use(router)


//监听3000端口
app.listen(3000,function () {
    console.log('3000 port is running...')
})