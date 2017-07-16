var array = []
for (var i = 2; i < process.argv.length; i++){
	array.push(+process.argv[i]);
};
console.log(array.reduce(function(total,value){
	return total + value;
}));