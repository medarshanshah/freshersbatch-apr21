//  1
function helloWorld(){
    console.log('Hello World')
}

//  2
function greeting(){
    var name = window.prompt("What is your name?")
    if(name == null || name == '')    
        txt = 'Hello'
    else 
        txt = 'Hello ' +name
    document.getElementById('name').innerHTML = txt
}

//  3
function greeting(){
    txt = "Hello Alice and Bob"
    document.getElementById('name').innerHTML = txt
}

//  4
function sumtoN(n){
    var total=0
    for(i=1;i<=n;i++){
        total = total + i
    }
    return total
}

//  5
function sumtoN35(n){
    var total=0
    for(i=1;i<=n;i++){
        if(i%3===0 || i%5===0)
        total = total + i
    }
    return total
}

//  6
function sumPro(){
    var num = Number(prompt('Enter the number'))
    var choice = prompt('1- sum     2- product')
    if(choice=='1')  sumtoN(num)
    else if(choice=='2') protoN(num)
}

function protoN(n){
    var total=0
    for(i=1;i<=n;i++){
        total = total * i
    }
    return total
}

//  7
function multiplicationTable(){
    for(i=1;i<=12;i++){
        console.log('Multiplication Table for '+i)
        for(j=1;j<=10;j++){
            console.log(i+' X ' +j+' = '+(i*j))
        }
    }
}

//  8
function primeNumbers(n){
    max = 10
    prime = []
    for ( var i = 2; i < max; i++ ) {
        if ( max % i === 0 ) {
            continue
        }
        prime.push(i)
    }
    console.log("Prime Numbers: ")
    prime.forEach(element => {
        console.log(element)
    });
}

//  9
function guess(){
    var guessedNum = []
    var tries = 3
    randomNum = Math.floor(Math.random() * 11)
    //console.log('randomNumber: '+randomNum)
    alert('GAME:    Guess the Number \nYou have '+(tries)+' tries')
    var num = Number(numInput())
    while(tries !== 0){
        if(!guessedNum.includes(num)){
            tries--
        }
        guessedNum.push(num)
        if(num === randomNum || tries === 0 && num === randomNum){
            alert('Congrats, You guessed the correct number and won the game')
        }
        else if(tries === 0 && num !== randomNum){
            alert('Game Over \nThe correct number was '+randomNum)
        }
        else{
            if( num > randomNum){
                alert('Wrong, you have '+(tries)+' tries \nGuess the lower number')
            }
            else{
                alert('Wrong, you have '+(tries)+' tries \nGuess the higher number')
            }
            num = Number(numInput())
        }
       
             
    }
}

function numInput(){
    var xyz = prompt('Enter a number')
    return xyz
}


//  10
function leapyear(){
    var year = new Date().getFullYear()
    var next = 20
    console.log('The next 20 leap years are:')
    while(next > 0){
        if((year%4 === 0)&&(year%100 !== 0)||(year%400 === 0)){
            console.log(year)
            next--
        }
        year++
    }
}

//  11
function largestNumber(arr) {
    var list = [10, 20, 45, 90, 30]
    let max = list[0];
    for (i = 1; i < list.length; i++) {
        if (list[i] > max)
            max = list[i];
    }
    console.log("Largest in given list is " +max)
    //Using max function
    //console.log("Largest in given list is " +Math.max(...list))
}


//  12
function reverseList(){
    var list = [10, 20, 45, 90, 30]
    var rev = []
    len = list.length
    for (i = len - 1; i >= 0 ; i--) {
        rev.push(list[i])
    }
    console.log('The reversed list is: '+rev)
}

//  13
function checkOccurence(num){
    var list = [10, 20, 45, 90, 30]
    found = 0
    for(i=0; i<list.length; i++){
        if(num === list[i]){
            found++
            break
        }
    }
    if(found)   console.log("Element found")
    else    console.log('Element not found')

    //using Array.includes
    // if(list.includes(num))  console.log("Element found")
    // else    console.log('Element not found')
    
}


//  14
function returnOdd(){
    var list = [10, 20, 45, 90, 30]
    var oddList = []
    for(i=1 ; i<list.length; i+=2){
        oddList.push(list[i])
    }
    console.log(oddList)
}

//  15
function runningTotal(){
    var list = [10, 20, 45, 90, 30]
    var result = [], total=0
    for(i=0;i<list.length;i++){
        total = total + list[i]
        result.push(total)
    }
    console.log(result)
}

//  16
function isPalindrome(string){
    rev = string.split("").reverse().join("");
    if(string === rev)
        console.log( string+' is a palindrome')
    else
        console.log(string+' is not a palindrome')
}


//  17
function computeSum(){
    var list = [10, 20, 45, 90, 30]
    
    f = forSum(list)
    console.log('With For loop, Sum = '+f)

    w = whileSum(list)
    console.log('With While loop, Sum = '+w)

    r = recursionSum(list)
    console.log('With Recursion, Sum = '+r)
}

function forSum(list){
    total = 0
    for(i=0;i<list.length;i++){
        total += list[i]
    }
    return total
}

function whileSum(list){
    total = 0
    len = list.length -1
    while(len>=0){
        total += list[len]
        len--
    }
    return total
}

function recursionSum(list){
    if(list.length === 0)
        return 0
    else
        return list[0] + recursionSum(list.slice(1))
}


//  18
function perfectSquare(){
var list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,,19,20]
result = on_all(list)
console.log('The first twenty perfect squares are '+result)
}

function on_all(list){
    var perfectSquares = list.map(function(data){
        return data*data
    })
    return perfectSquares
}

//  19
function concatLists(){
    var list1 = ['a','b','c']
    var list2 = [1,2,3]

    // using loop and push
    // for(i=0; i < list2.length ; i++ ){
    //     list1.push(list2[i])
    // }
    // console.log(list1)

    //using spread operator
    return [...list1, ...list2]

    // using Array.concat method
    //return list1.concat(list2)
}

//  20
function combineAlternate(){
    var list1 = ['a','b','c']
    var list2 = [1,2,3]
    var result = []
    for(i=0, j=0; i<list1.length && j<list2.length ; i++, j++){
        result.push(list1[i])
        result.push(list2[i])
    }
    return result
}

//  21
function mergeList(){
    var list1 = [1,4,6]
    var list2 = [2,3,5]
    var sortedList = []
    sortedList = list1.concat(list2).sort()
    return sortedList
}

//  22
function rotateList(){
    var list = [1,2,3,4,5,6]
    var k = 2, temp=[]
    temp = list.slice(k)
    for(i=0; i<k; i++){
        temp.push(list[i])
    }
    list = temp
    console.log(list)
}

//  23
function fibonacci(){

    num = 100
    var fib = []
    fib[0]=1, fib[1]=1
    for(i=2;i<num;i++){
        fib[i] = fib[i-2] + fib[i-1]
    }
    return fib
}

//  24
function digitList(num){
    var digits = []
    while(num>0){
        digits.push(num % 10)
        num = parseInt(num / 10)
    }
    digits.reverse()
    return digits
    
    //Using Spread operator
    //return [...num+''].map(n=>+n)
    
    //using Array.from 
    //return Array.from(String(num), Number)
}

//  25

//  26

//  27

//  28

//  29

//  30

//..........................................................


