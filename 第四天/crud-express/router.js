/**
 * Created by Administrator on 2018/11/26.
 */
// 路由设计
// 请求方式        请求路径           get请求参数         post请求参数                    备注
// get            /students                                                            获取主页面
// get            /students/new                                                        获取添加记录页面
// post           /students/new                         name,gender,age,hobbies        请求添加记录
// get            /students/edit     id                                                获取编辑页面
// post           /students/edit                        id,name,gender,age,hobbies     请求编辑修改
// get            /students/delete   id                                                请求删除数据并跳转

var express = require('express')
var router = express.Router();

var students = require('./students')

//获取主页面
router.get('/students', function (req, res) {
    students.find(function (err, students) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.render("index.html", {
            students: students
        })
    })
});

// 获取添加记录页面
router.get('/students/new', function (req, res) {
    res.render("new.html")
});

// 请求添加记录
router.post('/students/new', function (req, res) {
    // 获取post请求过来的数据
    // 读取db.json当中的数据，然后在结尾追加该请求过来的数据
    // redirect("/students")
    students.add(req.body, function (err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.redirect("/students")
    })
});

// 获取编辑页面
router.get('/students/edit', function (req, res) {
    // 获取要编辑的数据的id
    // 读取db.json
    // 通过id进行查找db.json相应的记录，返回该条记录并渲染edit.html
    students.findById(parseInt(req.query.id), function (err, student) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.render("edit.html", {
            student: student
        })
    })
});

//请求编辑修改
router.post('/students/edit', function (req, res) {
    // 获取post请求过来的数据
    // 读取db.json，并进行遍历拷贝
    // 将修改后的students数据重写
    var student = req.body
    students.updateById(student, function (err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.redirect("/students")
    })
});

//请求删除数据并跳转
router.get('/students/delete', function (req, res) {
    // 获取删除元素的id
    students.deleteById(parseInt(req.query.id), function (err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.redirect("/students")
    })
});

module.exports = router

