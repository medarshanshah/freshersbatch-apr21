var fs = require('fs')

var fileRead = process.argv[2]

console.log('Reading file ...')
fs.readFile(fileRead, 'utf8' , (err, fileContent)=>{
    if (err) throw err;
    console.log('Returning as an Array')
    var fileArray = fileContent.split(' ')
    console.log(fileArray)
})


//  Output

//  node processValue file.txt

// Reading file ...
// Returning as an Array
// [ 'This', 'is', 'the', 'content', 'of', 'the', 'file' ]