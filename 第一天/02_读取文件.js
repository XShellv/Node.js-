/**
 * Created by Administrator on 2018/11/21.
 */
const fs = require('fs');

fs.readFile('./data/你好.md',function (err, data) {
    if(err){
        throw err
    }
    else{
       console.log(data.toString())
    }
});