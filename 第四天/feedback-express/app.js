var express = require('express')
var bodyParser = require('body-parser')
var app = express()

var comments = [{
    name: '张三',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
},
    {
        name: '张三2',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三3',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三4',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三5',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    }
]

//配置art-template
app.engine('html', require('express-art-template'));

//配置bodyParser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//公开public
app.use("/public/",express.static("./public/"))

//请求index页面
app.get("/",function (req, res) {
    res.render("index.html",{
        comments
    })
})
//请求post.html
app.get("/post",function (req, res) {
    res.render("post.html")
})
//发送post，提交请求
app.post("/post",function (req, res) {
    //处理post请求体中的数据，并重定向
    var comment = req.body
    comments.unshift(comment);
    res.redirect("/")
})

app.listen(3000,function () {
    console.log('express is running')
})