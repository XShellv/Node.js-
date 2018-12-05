/**
 * Created by Administrator on 2018/11/21.
 */
var http = require('http');
var server = http.createServer();

server.on('request',function (req, res) {
    console.log(req.url);
    console.log('请求我的客户端的地址是：',req.socket.remoteAddress,req.socket.remotePort)
});

server.listen(3000,function () {
    console.log('服务器启动成功，可以访问了。。。')
});