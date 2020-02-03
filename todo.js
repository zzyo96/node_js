var fs = require('fs'); //file system 获取文件系统
const verb = process.argv[2];
const content = process.argv[3];
const content2 = process.argv[4];
const dbPath = 'C:\\Users\\admin\\Desktop\\node\\node_js\\db';
let list,n

//存数据库
function save(list){
  fs.writeFileSync(dbPath,JSON.stringify(list))  //序列化
}

//读数据库
function fetch(){
  const fileContent = fs.readFileSync(dbPath).toString()
  list = JSON.parse(fileContent) || []; //反序列化
  return list
}

//展示list
function display(list){
  console.log(list)
}

//添加任务
function addTask(list,content){
  list.push([content,false])
}

//移除任务项
function removeTask(list,n){
  list.splice(n-1,1)
}

//标记已完成
function markTaskAsDone(list,n){
  list[n-1][1] = true
}

//编辑任务项
function editTask(list,n,newContent){
  list[n-1][0] = newContent
}

try{
  fs.statSync(dbPath)
}catch(error){
  fs.writeFileSync(dbPath,'')
}

switch(verb){
	case 'add':
    list = fetch();
    addTask(list,content);
    save(list);
    display(list);
		break;
	case 'list':
    list = fetch();
    display(list);
		break;
	case 'delete':
    list = fetch();
		n = content
    removeTask(list,n)
    display(list);
    save(list);
		break;
	case 'done':
    list = fetch();
		n = content
    markTaskAsDone(list,n)
    display(list);
    save(list);
		break;
	case 'edit':
    list = fetch();
		n = content
    editTask(list,n,content2)
    display(list);
    save(list);
		break;
	default:
		console.log('我不知道你想干啥')
		break;
}


