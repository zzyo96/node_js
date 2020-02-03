var fs = require('fs');
var path = require('path');
const verb = process.argv[2]
const content = process.argv[3]

if(verb === 'add'){
	fs.stat('C:\\Users\\admin\\Desktop\\node\\node_js\\db',function(err,stat){
		if(err == null){
			const fileContent = fs.readFileSync('C:\\Users\\admin\\Desktop\\node\\node_js\\db').toString()
			const list = JSON.parse(fileContent); //反序列化

			const task = content 
			list.push([task,false])
			fs.writeFileSync('C:\\Users\\admin\\Desktop\\node\\node_js\\db',JSON.stringify(list))  //序列化
			console.log(list)
		}else if(err.code == 'ENOENT'){
			fs.writeFileSync('C:\\Users\\admin\\Desktop\\node\\node_js\\db','') 
			const list = [];

			const task = content 
			list.push([task,false])
			fs.writeFileSync('C:\\Users\\admin\\Desktop\\node\\node_js\\db',JSON.stringify(list))  //序列化
			console.log(list)
		}
	})
}else if(verb === 'list'){
	const fileContent = fs.readFileSync('C:\\Users\\admin\\Desktop\\node\\node_js\\db').toString()
	const list = JSON.parse(fileContent); //反序列化
	console.log(list)
}else if(verb === 'delete'){
	const fileContent = fs.readFileSync('C:\\Users\\admin\\Desktop\\node\\node_js\\db').toString()
	const list = JSON.parse(fileContent); //反序列化	
	const n = content
	list.splice(n-1,1)
	console.log(list)
	fs.writeFileSync('C:\\Users\\admin\\Desktop\\node\\node_js\\db',JSON.stringify(list))  //序列化
}else{
	console.log('我不知道你要干嘛，你的动词是' + verb)
}


