var http = require('http')
var fs = require('fs')

var server = http.createServer()

var wwwDir = 'D:/Movie/www'

server.on('request', function (req, res) {
    var url = req.url
    // / index.html
    // /a.txt wwwDir + /a.txt
    // /apple/login.html wwwDir + /apple/login.html
    // /img/ab1.jpg wwwDir + /img/ab1.jpg
    var filepath = "/index.html"
    if(url !== "/"){
        filepath = url;
    }
    fs.readFile(wwwDir+filepath,function (err, data) {
        if(err){
            res.end("404 Not Found!")
            return true
        }
        res.end(data)
    })
})

// 3. 绑定端口号，启动服务
server.listen(3000, function () {
    console.log('running...')
})
