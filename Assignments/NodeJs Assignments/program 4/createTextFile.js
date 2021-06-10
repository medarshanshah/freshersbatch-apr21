var fs = require('fs')

var textInFile = process.argv[2]

fs.writeFile('savedFile.txt', textInFile, (err) => {
    if (err) throw err;
    console.log("The file was saved!")
})


//  Output
//  node compareValues.js 'life'
//  The word "life" has 17 coincidences in text