var fs = require('fs'); //file system 获取文件系统
const verb = process.argv[2];
const content = process.argv[3];
const content2 = process.argv[4];
const dbPath = 'C:\\Users\\admin\\Desktop\\node\\node_js\\db';

function save(list){
  fs.writeFileSync(dbPath,JSON.stringify(list))  //保存数据
}

switch(verb){
	case 'add':
		fs.stat(dbPath,function(err,stat){
			if(err == null){
				const fileContent = fs.readFileSync(dbPath).toString()
				const list = JSON.parse(fileContent); //反序列化

				const task = content
				list.push([task,false])
        save(list);
				console.log(list)
			}else if(err.code == 'ENOENT'){
				fs.writeFileSync(dbPath,'')
				const list = [];

				const task = content
				list.push([task,false])
        save(list);
				console.log(list)
			}
		});
		break;
	case 'list':
		const fileContent = fs.readFileSync(dbPath).toString()
		const list = JSON.parse(fileContent); //反序列化
		console.log(list)
		break;
	case 'delete':
		const fileContent = fs.readFileSync(dbPath).toString()
		const list = JSON.parse(fileContent); //反序列化
		const n = content
		list.splice(n-1,1)
		console.log(list)
    save(list);
		break;
	case 'done':
		const fileContent = fs.readFileSync(dbPath).toString()
		const list = JSON.parse(fileContent); //反序列化
		const n = content
		list[n-1][1] = true
		console.log(list)
    save(list);
		break;
	case 'edit':
		const fileContent = fs.readFileSync(dbPath).toString()
		const list = JSON.parse(fileContent); //反序列化
		const n = content
		list[n-1][0] = content2
		console.log(list)
    save(list);
		break;
	default:
		console.log('我不知道你想干啥')
		break;
}


