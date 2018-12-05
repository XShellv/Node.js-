/**
 * Created by Administrator on 2018/11/28.
 */
var express = require("express")
var fs = require("fs")
var app = express()


app.use(function (req, res) {
    // http://127.0.0.1:3000/users/4
    // 根据id获取用户信息
    res.setHeader("Access-Control-Allow-Origin", "*")
    if(req.url.indexOf("users") !== -1){
        var id = 0
        var i = req.url.lastIndexOf("/")
        if (i === 6) {
            id = req.url.slice(i+1)
        }
        fs.readFile("./data.json","utf-8",function (err, data) {
            if(err){
                return res.send("server error")
            }
            users = JSON.parse(data).users[id-1]
            res.send(users)
        })
    }
    // http://127.0.0.1:3000/jobs
    // 获取jobs
    else if(req.url.indexOf("jobs") !== -1){
        fs.readFile("./data.json","utf-8",function (err, data) {
            if(err){
                return res.send("server error")
            }
            console.log(data)
            jobs = JSON.parse(data).jobs
            res.send(jobs)
        })
    }
    else{
        res.send("404 Not Found!")
    }
})

app.listen(3000,function () {
    console.log("server is running...")
})