/**
 * Created by Administrator on 2018/11/21.
 */
const http = require('http');
const fs = require('fs');
const server = http.createServer();

server.on('request',function (req, res) {
    if(req.url === '/'){
        fs.readFile('./resource/index.html',function (err, data) {
            if(err){
                res.setHeader('content-type','text/plain; charset=UTF8')
                res.end('文件读取失败，请稍后重试！')
            }else{
                res.setHeader('content-type','text/html; charset=utf-8')
                res.end(data)
            }
        })
    }
    else if(req.url === '/baby'){
        fs.readFile('./resource/ab2.jpg',function (err, data) {
            if(err){
                res.setHeader('content-type','text/plain; charset=UTF8');
                res.end('文件读取失败，请稍后重试！')
            }else{
                res.setHeader('content-type','image/jpeg');
                res.end(data)
            }
        })
    }
});

server.listen(3000,function () {
    console.log('server is running')
});