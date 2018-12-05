/**
 * Created by Administrator on 2018/11/21.
 */
const fs = require('fs');
const content = '大家好，我叫node.js';
fs.writeFile('./data/你好.md',content,function (err) {
    if(err){
        console.log('写入文件失败!');
        return true
    }
    console.log('写入文件成功')
});