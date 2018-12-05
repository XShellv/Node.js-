/**
 * Created by Administrator on 2018/11/21.
 */
const http = require('http');
const server = http.createServer();

server.on('request',function (req, res) {
    if(req.url === '/plain'){
        res.setHeader('content-type','text/plain; charset=UTF8');
        res.end("hello world")
    }
    else if(req.url === '/html'){
        res.setHeader('Content-type','text/html; charset=UTF8');
        res.end("<p><a href='#'>点击我</a></p>")
    }
});

server.listen(3000,function () {
    console.log('server is running')
});