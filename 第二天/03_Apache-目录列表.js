/**
 * Created by Administrator on 2018/11/23.
 */
const http = require('http')
const fs = require('fs')

var server = http.createServer()
var wwwDir = "D:/Movie/www"


server.on("request",function (req, res) {
    //读取文件列表
    fs.readdir(wwwDir,function (err, files) {
        if(err){
            return res.end("Can not find www dir.")
        }
        console.log(files)
        //读取template
        fs.readFile("./template.html",function (err, data) {
            if(err){
                return res.end("404 Not Found!")
            }
            //循环遍历files将文件名拼接到content到当中
            var content = ""
            files.forEach(item => {
                content += `
               <tr>
                <td data-value="apple/"><a class="icon dir" href="/D:/Movie/www/apple/">${item}/</a></td>
                <td class="detailsColumn" data-value="0"></td>
                <td class="detailsColumn" data-value="1509589967">2017/11/2 上午10:32:47</td>
              </tr>
            `
            })
            //将content替换到template.html当中
            data = data.toString().replace("^_^",content)
            res.end(data)
        })
    })

})


server.listen(3000,function () {
    console.log('server is running')
})