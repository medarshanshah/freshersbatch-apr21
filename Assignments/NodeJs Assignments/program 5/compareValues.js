var fs = require('fs')

var searchWord = process.argv[2].toLowerCase()

fs.readFile('commencement.txt', 'utf8', (err, fileContent) => {
    if (err) throw err;
    var wordsFromFile = fileContent.toLowerCase().split(' ')
    var coincidence = wordsFromFile.filter((word) => {
        return word.includes(searchWord)
    })
    console.log('The word "'+searchWord+'" has '+coincidence.length+' coincidences in text')
})