/**
 * Created by Administrator on 2018/11/21.
 */
const http = require('http');
var Server = http.createServer();
Server.on('request',function (req, res) {
    console.log(req.url)
    res.write('hello');
    res.write('world');
    res.end()
});

Server.listen(3000,function () {
    console.log('服务器启动成功了，可以通过 http://127.0.0.1:3000/ 来进行访问')
});