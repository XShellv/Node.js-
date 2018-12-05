/**
 * Created by Administrator on 2018/11/23.
 */
const http = require('http')
const fs = require('fs')
var  template = require('art-template')

var server = http.createServer()
var info = {
    name:'徐小武',
    age:25,
    province:'江苏省',
    hobbies:['唱歌','写代码','玩游戏'],
    title:'我的第一个模板应用'
}

server.on('request',function (req, res) {
    //读取模板
    fs.readFile('./tpl.html',function (err, data) {
        if(err){
            return res.end("404 Not Found!")
        }
        var result = template.render(data.toString(),info)
        res.end(result)
    })
})

server.listen(3000,function () {
    console.log('server is running')
})