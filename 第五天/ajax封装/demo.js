/**
 * Created by Administrator on 2018/11/28.
 */
var http = require('http')
var server = http.createServer()

server.on("request",function (req,res) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    if(req.url === "/ajax"){
        res.end(JSON.stringify({
            username:"admin",
            password:"123"
        }))
    }
    else{
        res.end("拒绝访问")
    }

})

server.listen(3000,function () {
    console.log("server is running...")
})