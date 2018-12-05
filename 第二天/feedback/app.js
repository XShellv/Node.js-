/**
 * Created by Administrator on 2018/11/24.
 */
const http = require('http')
const fs = require('fs')
const url = require('url')

var template = require('art-template')
var server = http.createServer()
var comments = [
    {
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


server.on('request',function (req, res) {
    urlparams = url.parse(req.url,true)
    if(urlparams.pathname === '/'){
        fs.readFile('./views/index.html',function (err, data) {
            if(err){
                return res.end("404 Not Found.")
            }
            var ret = template.render(data.toString(),{
                comments
            })
            res.end(ret)
        })
    }
    //对public文件夹的文件读取，如果url路径检测到/public/那么可以认为，你是在请求public文件夹的资源
    else if(urlparams.pathname.indexOf("/public/") === 0){
        //对url进行解析，提取pathname，作为读取文件的路径
        fs.readFile("."+ urlparams.pathname,function (err, data) {
            if(err){
                return res.end("抱歉，资源读取出错")
            }
            res.end(data.toString())
        })
    }
    else if(urlparams.pathname === "/post"){
       fs.readFile('./views/post.html',function (err, data) {
           if(err){
               return res.end("404 Not Found.")
           }
           res.end(data.toString())
       })
    }
    else if(urlparams.pathname === "/comment"){
        var comment = urlparams.query
        comment.dateTime = "2015-10-16"
        comments.unshift(comment)
        res.statusCode = 302
        res.setHeader('Location','/')
        res.end()
    }
    else{
        //说明url路径不存在因此返回404页面
        fs.readFile('./views/404.html',function (err,data) {
            return res.end(data.toString())
        })
    }
})

server.listen(3000,function () {
    console.log('server is running')
})