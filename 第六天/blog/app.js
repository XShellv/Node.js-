/**
 * Created by Administrator on 2018/11/29.
 */
// 引包
var express = require('express')
var app = express()
var path = require('path')
var template = require('art-template')
var router = require('./router.js')
var bodyParser = require('body-parser')
var session = require('express-session')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// parse application/json
app.use(bodyParser.json())

app.use(session({
    // 配置加密字符串，它会在原有加密基础之上和这个字符串拼起来去加密
    // 目的是为了增加安全性，防止客户端恶意伪造
    secret: 'itcast',
    resave: false,
    saveUninitialized: false // 无论你是否使用 Session ，我都默认直接给你分配一把钥匙
}))

// 开放资源目录
app.use('/public/', express.static(path.join(__dirname, "./public")))
app.use('/node_modules/', express.static(path.join(__dirname, "./node_modules")))

// 配置art-template
app.engine('html', require('express-art-template'));

// 将路由挂载到app当中
app.use(router)

// 配置一个处理 404 的中间件
app.use(function (req, res) {
    res.render('404.html')
})

// 配置一个全局错误处理中间件
app.use(function (err, req, res, next) {
    res.status(500).json({
        err_code: 500,
        message: err.message
    })
})

// 开启端口
app.listen(3000, function () {
    console.log("running...")
})