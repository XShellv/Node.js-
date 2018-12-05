/**
 * Created by Administrator on 2018/11/23.
 */
/**
 * Created by Administrator on 2018/11/23.
 */
const http = require('http')
const fs = require('fs')
var  template = require('art-template')

var server = http.createServer()
var wwwDir = "D:/Movie/www"


server.on('request',function (req, res) {
    //读取模板
    fs.readFile('./template-apache.html',function (err, data) {
        if(err){
            return res.end("404 Not Found!")
        }
        //读取文件列表
        fs.readdir(wwwDir,function (err, files) {
            if(err){
                return console.log('读取目录失败')
            }
            console.log(files)
            var result = template.render(data.toString(),{
                files:files
            })
            console.log(result)
            res.end(result)
        })
    })
})

server.listen(3000,function () {
    console.log('server is running')
})