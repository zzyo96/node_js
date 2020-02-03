var fs = require('fs'); //file system 获取文件系统
const verb = process.argv[2];
const content = process.argv[3];
const content2 = process.argv[4];
const dbPath = 'C:\\Users\\admin\\Desktop\\node\\node_js\\db';

//存数据库
function save(list){
  fs.writeFileSync(dbPath,JSON.stringify(list))  //序列化
}

//读数据库
function fetch(){
  const fileContent = fs.readFileSync(dbPath).toString()
  const list = JSON.parse(fileContent); //反序列化
  return list
}

//展示list
function display(list){
  console.log(list)
}

switch(verb){
	case 'add':
		fs.stat(dbPath,function(err,stat){
			if(err == null){
        const list = fetch();
				list.push([content,false])
        save(list);
        display(list);
			}else if(err.code == 'ENOENT'){
				fs.writeFileSync(dbPath,'')
				const list = [];
				list.push([content,false])
        save(list);
        display(list);
			}
		});
		break;
	case 'list':
    const list = fetch();
    display(list);
		break;
	case 'delete':
    const list = fetch();
		const n = content
		list.splice(n-1,1)
    display(list);
    save(list);
		break;
	case 'done':
    const list = fetch();
		const n = content
		list[n-1][1] = true
    display(list);
    save(list);
		break;
	case 'edit':
    const list = fetch();
		const n = content
		list[n-1][0] = content2
    display(list);
    save(list);
		break;
	default:
		console.log('我不知道你想干啥')
		break;
}


