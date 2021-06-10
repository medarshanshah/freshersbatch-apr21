var fs = require('fs')

readFromFile = process.argv[2]

//Asynchronous
// fs.readFile(readFromFile,'utf8', (err, fileContent)=>{
//     console.log(fileContent)
// })

//Synchronous
fileContent = fs.readFileSync(readFromFile,'utf8')
console.log(fileContent)


//Trying for multiple parameters - Unsuccessful
//readFromFile = process.argv.slice(1)
// readFromFile.forEach((index)=>{
//     fs.readFile(readFromFile[index],'utf8', (err, fileContent)=>{
//         console.log(fileContent)
//     })
// })





