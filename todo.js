var fs = require('fs');
var path = require('path');
const verb = process.argv[2]
const content = process.argv[3]

fs.stat('C:\\Users\\admin\\Desktop\\node\\node_js\\db',function(err,stat){
	if(err == null){
		console.log(111)
		const fileContent = fs.readFileSync('C:\\Users\\admin\\Desktop\\node\\node_js\\db').toString()
		const list = JSON.parse(fileContent); //反序列化

		const task = content 
		list.push(task)
		fs.writeFileSync('C:\\Users\\admin\\Desktop\\node\\node_js\\db',JSON.stringify(list))  //序列化
		console.log(list)
	}else if(err.code == 'ENOENT'){
		fs.writeFileSync('C:\\Users\\admin\\Desktop\\node\\node_js\\db','') 
		const list = [];

		const task = content 
		list.push(task)
		fs.writeFileSync('C:\\Users\\admin\\Desktop\\node\\node_js\\db',JSON.stringify(list))  //序列化
		console.log(list)
	}
})



