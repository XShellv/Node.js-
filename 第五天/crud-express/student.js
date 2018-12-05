/**
 * Created by Administrator on 2018/11/27.
 */
var mongoose = require("mongoose")
var Schema = mongoose.Schema

mongoose.connect("mongodb://localhost/students")

var StudentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: Number,
        enum: [0, 1],
        default: 0
    },
    age: {
        type: Number
    },
    hobbies: {
        type: String
    }
})

module.exports = mongoose.model("Student", StudentSchema)
