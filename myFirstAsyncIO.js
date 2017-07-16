var fs = require('fs');
var result = undefined;
function countLines(callback){
	fs.readFile(process.argv[2], 'utf8', function func(error, text){
		result = text.split('\n');
		callback();
	})
};

function logResult() {
  console.log(result.length - 1);
};

countLines(logResult);
//var str = obj.toString();
//var arr = str.split('\n');
