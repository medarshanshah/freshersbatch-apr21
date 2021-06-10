var fs = require('fs'), path = require('path')

fs.readdir('./', (err, files) => {
    files.forEach( (file) => {
        if (fs.statSync(file).isDirectory()){
            console.log('DIR : '+ file)
        } else {
            console.log('FILE : '+ file)
        }
    })
})


//Note

// The fs.readdir() method is used to asynchronously read the contents of a given directory. 
// The callback of this method returns an array of all the file names in the directory.
// The options argument can be used to change the format in which the files are returned from the method.

// The fs.statSync() method is used to asynchronously return information about the given file path. 
// The fs.Stat object returned has several fields and methods to get more details about the file.