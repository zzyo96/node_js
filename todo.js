var fs = require('fs');
const fileContent = fs.readFileSync('C:\\Users\\Administrator\\Desktop\\node_js\\db').toString()
const list = JSON.parse(fileContent); //反序列化

const verb = process.argv[2]
const content = process.argv[3]

const task = content 
list.push(task)

fs.writeFileSync('C:\\Users\\Administrator\\Desktop\\node_js\\db',JSON.stringify(list))  //序列化

console.log(list)