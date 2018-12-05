const http = require('http')
const fs = require('fs')

var server = http.createServer()

var wwwDir = 'D:/Movie/www'

server.on('request',function (req, res) {
    // 首先所有的文件都保存在D:Movie/www根目录下
    // 1.1如果访问/ 则默认读取index.html
    // 1.2如果访问/a.txt 则D:Movie/www/a.txt
    // 1.3如果访问/apple/login.html 则读取D:Movie/www/apple/login.html
    if(req.url === "/"){
        fs.readFile(wwwDir+'/index.html',function (err, data) {
            if(err){
                return res.end('404 Not Found')
            }
            res.end(data)
        })
    }
    else if(req.url === "/a.txt"){
        fs.readFile(wwwDir+'/a.txt',function (err, data) {
            if(err){
                return res.end('404 Not Found')
            }
            res.setHeader("content-type","text/plain;charset=utf-8")
            res.end(data.toString())
        })
    }
    else if(req.url === "/apple/login.html"){
        fs.readFile(wwwDir+'/apple/login.html',function (err, data) {
            if(err){
                return res.end('404 Not Found')
            }
            res.end(data)
        })
    }

});


server.listen(3000,function () {
    console.log('server is running')
})