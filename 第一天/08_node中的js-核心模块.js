/**
 * Created by Administrator on 2018/11/21.
 */
// 用来获取机器信息的
const os = require('os');

// 用来操作路径的
var path = require('path');

//用来获取当前机器的cpu信息的
console.log(os.cpus());

//用来获取当前机器的内存
console.log(os.totalmem());