var url = require('url')
var obj = url.parse('/pinglun?name=徐小武&message=你好', true)
console.log(obj)
console.log(obj.query)
