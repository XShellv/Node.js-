/**
 * Created by Administrator on 2018/11/26.
 */
//这里是学生的数据增删改查的封装模块.可以直接通过students.方法调用
var fs = require('fs')

//获取db数据，并返回
exports.find = function (callback) {
    fs.readFile("./db.json","utf-8",function (err, data) {
        if(err){
            return callback(err)
        }
        callback(null,JSON.parse(data).students)
    })
}

//增加新的记录
exports.add = function (student,callback) {
    fs.readFile("./db.json","utf-8",function (err, data) {
        if(err){
            return callback(err)
        }
        //给student添加一条id，同时将数据追加到结尾
        var students = JSON.parse(data).students
        var i = students.length - 1 < 0 ? 0 : students[students.length - 1].id + 1
        student.id = i
        students.push(student)
        var dataStr = JSON.stringify({students:students})
        //将students转化为字符串保存到db.json当中
        fs.writeFile("./db.json", dataStr ,function (err) {
            if(err){
                return callback(err)
            }
            callback(null)
        })
    })
}

// 根据id查找对应的student数据并返回
exports.findById = function (id,callback) {
    fs.readFile("./db.json","utf-8",function (err, data) {
        if(err){
            return callback(err)
        }
        var students = JSON.parse(data).students
        var student = students.find(item => {
            return item.id === id
        })
        callback(null,student)
    })
}

// 更新db.json并重写
exports.updateById = function (student, callback) {
    fs.readFile("./db.json","utf-8",function (err, data) {
        if(err){
            return callback(err)
        }
        students = JSON.parse(data).students
        student.id = parseInt(student.id)
        var stu = students.find(item => {
            return item.id === student.id
        })
        for(var key in stu) {
            stu[key] = student[key]
        }
        var dataStr = JSON.stringify({"students":students})
        fs.writeFile("./db.json",dataStr,function (err) {
            if(err){
                return callback(err)
            }
            callback(null)
        })
    })
}

// 删除数据
exports.deleteById = function (id, callback) {
    // 读取db.json
    fs.readFile("./db.json","utf-8",function (err, data) {
        if(err){
            return callback(err)
        }
        var students = JSON.parse(data).students
        // 根据id查找index值，并删除
        var index = students.findIndex(item => {
            return item.id === id
        })
        students.splice(index,1)
        var dataStr = JSON.stringify({"students":students})
        // // 将json转换为字符串后重写如db.json
        fs.writeFile("./db.json",dataStr,function (err) {
            if(err){
                return callback(err)
            }
            callback(null)
        })
    })
}
