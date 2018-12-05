/**
 * Created by Administrator on 2018/11/27.
 */
var mongoose = require('mongoose')
var Schema = mongoose.Schema

// 1. 连接数据库
// 指定连接的数据库不需要存在，当你插入第一条数据之后就会自动被创建出来
mongoose.connect("mongodb://localhost/mongooseDemo")

// 2. 设计文档结构（表结构）
// 字段名称就是表结构中的属性名称
// 约束的目的是为了保证数据的完整性，不要有脏数据
var StudentSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        age: {

            type: Number
        },
        hobbies: {
            type: String
        }
    }
)

// 3. 将文档结构发布为模型
//    mongoose.model 方法就是用来将一个架构发布为 model
//    第一个参数：传入一个大写名词单数字符串用来表示你的数据库名称
//                 mongoose 会自动将大写名词的字符串生成 小写复数 的集合名称
//                 例如这里的 User 最终会变为 users 集合名称
//    第二个参数：架构 Schema
//
//    返回值：模型构造函数
var Student = mongoose.model('Student', StudentSchema);

// 4. 当我们有了模型构造函数之后，就可以使用这个构造函数对 users 集合中的数据为所欲为了（增删改查）
var student = new Student({
    name: "张三",
    age: 26,
    hobbies: "写代码"
})

// 保存数据
// student.save(function (err, ret) {
//     if (err) {
//         console.log("保存失败")
//     }
//     else {
//         console.log("保存成功")
//         console.log(ret)
//     }
// })

//查询所有数据
// Student.find(function (err, ret) {
//     if (err) {
//         console.log("读取数据失败")
//     }
//     else {
//         console.log(ret)
//     }
// })


// 根据指定条件查询数据
// Student.find({name:"徐小武"},function (err, ret) {
//     if (err) {
//         console.log("读取数据失败")
//     }
//     else {
//         console.log(ret)
//     }
// })

// 查找一个
// Student.findOne({name:"徐小武"},function (err, ret) {
//     if (err) {
//         console.log("读取数据失败")
//     }
//     else {
//         console.log(ret)
//     }
// })

// 删除数据
// Student.remove({name:"徐小武"},function (err, ret) {
//     if(err){
//         console.log("删除时数据失败")
//     }
//     else{
//         console.log(ret)
//     }
// })

// 更新数据
// Student.findByIdAndUpdate("5bfd023e5b8fc62398c5cdeb", {name: "李四", hobbies: "吃饭 唱歌"}, function (err, ret) {
//     if (err) {
//         console.log("更新失败")
//     }
//     else {
//         console.log(ret)
//     }
// })