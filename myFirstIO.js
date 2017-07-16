var fs = require('fs');
var obj = fs.readFileSync(process.argv[2]);
var str = obj.toString();
var arr = str.split('\n');
console.log(arr.length - 1);