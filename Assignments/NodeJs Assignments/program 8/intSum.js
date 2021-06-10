var fs = require('fs')

fs.readFile('numbers.txt','utf8', (err,file) => {
    if (err) throw err;
    var numbers = file.split(' ').map((num)=>{
        return parseInt(num)
    })
    
    //Using Array.prototype.reduce() function
    // var total = numbers.reduce(function(accumulator, currentNumber){
    //     return accumulator + currentNumber;
    // })

    //Using for loop
    var total = 0
    for(i in numbers){
        total += numbers[i]
    }

    console.log('The result of sum all numbers is: ' + total)
})
