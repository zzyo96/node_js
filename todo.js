var fs = require('fs'); //file system 获取文件系统
const verb = process.argv[2];
const content = process.argv[3];
const content2 = process.argv[4];
const dbPath = 'C:\\Users\\admin\\Desktop\\node\\node_js\\db';

const list = fetch();
const n = content;

ensureDb();

switch(verb){
	case 'add':
    addTask(list,content);
		break;
	case 'list':
		break;
	case 'delete':
    removeTask(list,n)
		break;
	case 'done':
    markTaskAsDone(list,n)
		break;
	case 'edit':
    editTask(list,n,content2)
		break;
	default:
		console.log('我不知道你想干啥')
		break;
}

display(list);
if(verb !== 'list'){
  save(list);
}

//----以下是帮助函数------
function ensureDb(){
  try{
    fs.statSync(dbPath)
  }catch(error){
    fs.writeFileSync(dbPath,'')
  }
}

//存数据库
function save(list){
  fs.writeFileSync(dbPath,JSON.stringify(list))  //序列化
}

//读数据库
function fetch(){
  let list
  const fileContent = fs.readFileSync(dbPath).toString();
  try{
    list = JSON.parse(fileContent); //反序列化
  }catch{
    list = []
  }
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
