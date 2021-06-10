// 1

const x = 10;
console.log(x)
x = 50;
//Uncaught TypeError: Assignment to constant variable
console.log(x)




// 2
if (x === 10) {
    let a = 100;
    console.log(a);
}
console.log(a);
//Uncaught ReferenceError: a is not defined



// 3
class Order {
    constructor(id, title, price) {
      id = id;
      title =  title;
      price = price;
    }
    printOrder(){
        console.log('Order ID: '+this.id+'\nTitle: '+this.title+'\nPrice: '+this.price)
    }
    getPrice(){
        return this.price
    }
}


let order1 = Object.assign({id:1001},{title:'new order'},{price:8500})




// 4


let names = ['Tom','Ivan','Jerry']
let arrofObj = names.map((name) => {
    return {name:name , length: name.length}
})
console.log(arrofObj)



// 5

// A
add = (x=4, y=6) => x+y
add(89,11)
add()

//  B
let username = 'Tony'
friends = ['Peter','Happy','Bruce','Steve']


function userFriends(username, ...friends){
    console.log(`User: ${username} \nFriends: ${friends}`)
}
userFriends(username, ...friends)

// Output
// User: Tony 
// Friends: Peter,Happy,Bruce,Steve


// C

let names = ['TonyStark', 'BruceBanner', 'NatashaRomanoff']
let capitalNames = []
function printCapitalNames(...names){
    
    names.forEach(index => {
        capitalNames.push(index.toUpperCase())
    })
    return capitalNames
}

// Output
// ["TONYSTARK", "BRUCEBANNER", "NATASHAROMANOFF"]





// 6

let l1 = {name:'Darshan',desk:45,laptopmodel:'Dell 43G67'}

console.log(
`TICKET
Subject: Problem in Laptop
Employee Name: ${l1.name}
Desk No: ${l1.desk}
Laptop Model: ${l1.laptopmodel}

Message: Please solve it fast`)



// Output

// TICKET
// Subject: Problem in Laptop
// Employee Name: Darshan
// Desk No: 45
// Laptop Model: Dell 43G67

// Message: Please solve it fast




//  7

//  A
let array = ['Apple','Mango','Pomegranate','Papaya']

let [ , , c, ] = array

console.log(c)

//  Output      ->      Pomegranate


//  B

let organization = {
    name: "Capgemini India",
    address: {
        city: "Bengaluru",
        pincode: 560103
    }
}

console.log(`The pincode for ${organization.name} in ${organization.address.city} is ${organization.address.pincode}`)


//  C

function Account(id, name, balance){
    this.id = id;
    this.name = name;
    this.balance = balance;
}


function SavingsAccount(id, name, balance,interest){
    Account.call(this, id, name, balance)
    this.interest = interest
}

function CurrentAccount(id, name, balance,cash_credit){
    Account.call(this, id, name, balance)
    this.cash_credit = cash_credit
}

SavingsAccount.prototype = new Account();
SavingsAccount.prototype.constructor = SavingsAccount;


CurrentAccount.prototype = new Account();
CurrentAccount.prototype.constructor = CurrentAccount;






//........................................................
// ES6     Assignment 2


//  1

class fibo{
    previousNo=1;
    currentNo=2;
    next(){
        return(this.previousNo+this.currentNo);
    }
}
let fib=new fibo();
console.log(fib.next());


// 2

function getArmstrongNumbers(start,end) {
    let armstrongArray = [];
    for (let i = start; i <= end; i++) {
        let numberOfDigits = i.toString().length;
        let sum = 0;
        let temp = i;
        while ( temp > 0) {
            let remainder = temp % 10;
            sum += remainder ** numberOfDigits;
            temp = parseInt( temp / 10) ;
        }
        if ( sum == i ) {
            armstrongArray.push(i) ;
        }
    }
        return armstrongArray;
}
    let getNextArmstrong = () => {
        let count = 0
        return {
            next: () => {
                let arr = getArmstrongNumbers( 100, 1000) ;
                return count < arr.length ?
                    { armstrong_value: arr[count++], done: false } :
                    { value: undefined, done: true }
            }
        }
    }
const armstrongIterator = getNextArmstrong();
console.log( armstrongIterator.next());
console.log( armstrongIterator.next());
console.log( armstrongIterator.next());


//  3

function getArmstrongNumbers(start, end) {
    let armstrongArray = [];
    if(end > 1000) {
        return 'Maximum limit exceeded'
    }
    for(let i = start; i <= end; i ++) {
        let numberOfDigits = i.toString().length;
        let sum = 0;
        let temp = i;
        while(temp > 0) {
            let remainder = temp % 10;
            sum += remainder ** numberOfDigits;
            temp = parseInt(temp / 10);
        }
        if(sum == i) {
            armstrongArray.push(i);
        }
    }
    return armstrongArray;
}
let getNextArmstrong = () => {
    let count = 0
    return {
        next: () => {
            let arr = getArmstrongNumbers( 0 , 1000);
                return count<arr.length ?
                { armstrong_value: arr[count++], done: false } :
                    { value: undefined, done: true }
        }
    }
}
const armstrongIterator = getNextArmstrong( );
console.log(armstrongIterator.next());
console.log(armstrongIterator.next());

//  4

let chatroom1 = new Map();
chatroom1.set('Dash', {
    msg1: " Hi everyone, I'm Dash",
    msg2: " How are you all?"
});
chatroom1.set('Tony', {
    msg1: " Hello, I'm Tony",
    msg2: " I'm fine",
});
chatroom1.set(' Bruce', {
    msg1: " Hey, I'm Bruce",
    msg2: " I'm good",
    msg3: " I'm a Developer",
});
let chatroom2 = new Map()
    .set(' Barry', {
        msg1: " Hey guys, I'm Barry",
        msg2: " I'm from a Engineer",
    })
    .set('Clark', {
        msg1: " Hi, I'm Clark",
        msg2: " I am from US"
    });
// To check all the users in chatroom1
console.log(" Total users in chatroom1: " + chatroom1.size);
// To list the users and messages
for (let [key, value] of chatroom1) {
    console.log(key, value);
}
// T o check all the users in chatroom2
console.log(" Total users in chatroom2 : " + chatroom2.size)
chatroom2.forEach((value, key, map) => {
    console.log(` ${key} `);
    console.log(chatroom2.get(` ${key} `));
})
// To get the messages of specific user
console.log(chatroom1.get("Dash"));
// To check user is in chatroom or not
console.log(chatroom1.has("Bruce"));
// To delete the user from chatroom
console.log(chatroom1.delete("Tony"));
// To clear the chatroom
chatroom1.clear();
console.log(" Total users in chatroom1: " + chatroom1.size);