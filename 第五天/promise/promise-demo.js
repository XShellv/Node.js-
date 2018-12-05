/**
 * Created by Administrator on 2018/11/28.
 */
var fs = require('fs')
// new Promise(function () {
//     fs.readFile("./a.txt","utf-8",function (err,data) {
//         if(err){
//             console.log("读取失败")
//         }
//         else{
//             console.log(data)
//         }
//     })
// })

// function readFile(filepath) {
//     return new Promise(function (resolve, reject) {
//         fs.readFile(filepath, "utf-8", function (err, data) {
//             if (err) {
//                 reject(err)
//             }
//             else {
//                 resolve(data)
//             }
//         })
//     })
// }
//
// readFile("./a.txt").then(function (ret) {
//     console.log(ret)
// },function () {
//
// })

var a = new Promise(function (resolve, reject) {
    fs.readFile("./a.txt", "utf-8", function (err, data) {
        if (err) {
            reject(err)
        }
        else {
            resolve(data)
        }
    })
})

var b = new Promise(function (resolve, reject) {
    fs.readFile("./b.txt", "utf-8", function (err, data) {
        if (err) {
            reject(err)
        }
        else {
            resolve(data)
        }
    })
})

var c = new Promise(function (resolve, reject) {
    fs.readFile("./c.txt", "utf-8", function (err, data) {
        if (err) {
            reject(err)
        }
        else {
            resolve(data)
        }
    })
})

a.then(function (data) {
    console.log(data)
    return b
}).then(function (data) {
    console.log(data)
    return c
}).then(function (data) {
    console.log(data)
})