var fs = require('fs')

var textInFile = process.argv[2]

fs.writeFile('savedFile.txt', textInFile, (err) => {
    if (err) throw err;
    console.log("The file was saved!")
})
