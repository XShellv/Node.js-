var express = require('express')
var User = require("./models/user.js")
var md5 = require('blueimp-md5')

var router = express.Router()

// 路由的设置

// 请求方法             路径              get参数               post参数                          备注
// get                  /                                                                       渲染主页面
// get                  /register                                                               渲染注册页面
// post                 /register                              email  nickname password         处理注册请求
// get                  /login                                                                  渲染登录页面
// post                 /login                                 email  password                  处理登陆请求
// get                  /logout                                                                 请求退出

// 请求主页面
router.get("/", function (req, res, next) {
    res.render("index.html", {
        user: req.session.user
    })
})

// 渲染注册页面
router.get("/register", function (req, res, next) {
    res.render("register.html")
})

// 处理注册请求
router.post("/register", function (req, res, next) {
    var body = req.body
    // 获取表单数据
    // 验证并存储表单数据
    // 响应浏览器的请求
    User.findOne({
        $or: [
            {email: body.email}, {nickname: body.nickname}
        ]
    }, function (err, data) {
        // 如果失败查找失败，返回500状态码
        if (err) {
            // return res.status(500).json({
            //     err_code: 500,
            //     message: 'server error'
            // })
            return next(err)
        }
        // 如果存在，返回200状态码并设置err_code 500
        if (data) {
            return res.status(200).json({
                err_code: 1,
                message: 'Email or nickname aleady exists.'
            })
        }
        // md5加密
        body.password = md5(md5(body.password))
        new User(body).save(function (err, user) {
            if (err) {
                // return res.status(500).json({
                //     err_code: 500,
                //     message: 'server error'
                // })
                return next(err)
            }
            req.session.user = user
            res.status(200).json({
                err_code: 0,
                message: 'OK'
            })
        })
    })
})

// 渲染登录页面
router.get("/login", function (req, res, next) {
    res.render("login.html")
})

// 请求登录页面
router.post("/login", function (req, res, next) {
    // 获取请求数据
    // 数据库查找对应的邮箱密码
    // 不同的状态返回对应的json
    var body = req.body
    var password = md5(md5(body.password))
    User.findOne(
        {email: body.email, password: password}, function (err, user) {
            if (err) {
                // return res.status(500).json({
                //     err_code: 500,
                //     message: "server error"
                // })
                return next(err)
            }
            else if (!user) {
                return res.status(200).json({
                    err_code: 1,
                    message: "Email or password is invalid"
                })
            }
            req.session.user = user
            res.status(200).json({
                err_code: 0,
                message: "ok"
            })
        }
    )
})

// 退出登录
router.get("/logout", function (req, res, next) {
    req.session.user = null
    res.redirect("/")
})

module.exports = router