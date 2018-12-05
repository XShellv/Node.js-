/**
 * Created by Administrator on 2018/11/23.
 */
var fs = require('fs')

fs.readdir('D:/Movie/www', function (err, files) {
    if (err) {
        return console.log('目录不存在')
    }
    console.log(files)
})
