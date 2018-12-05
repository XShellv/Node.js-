/**
 * Created by Administrator on 2018/11/27.
 */
var fs = require('fs')

function fn(callback) {
    fs.readFile("./data.txt","utf-8",function (err, data) {
        if(err){
            return callback(err)
        }
        callback(null,data)
    })
}
fn(function (err,data) {
    if(err){
        console.log("读取失败！")
    }
    console.log(data)
})