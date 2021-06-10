//  1

function addByPromise(){
      
const sum = ( a , b ) => a + b;
const first = new Promise((resolve, reject) => {
const x = 5 ;
if (x) resolve(x) ;
else reject( x ) ;
});
const second = new Promise( (resolve, reject) => {
const y = 10;
if ( y ) resolve( y ) ;
else reject( y ) ;
});
const allpromises = Promise. all( [first, second] );
allpromises.then( success => console.log('sum:', sum(success[ 0 ] ,
success[ 1 ] )))
.catch( error => console.log('error:', error) )
.finally(() => console.log( "Executed finally block"));
}

//  2

class Account {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
}
class SavingsAccount extends Account {
    constructor(id, name, balance, interest) {
        super(id, name, balance);
        this.interest = interest;
    }
    totalBalance() {
        let newBalance = this.balance * this.interest;
        this.balance = this.balance + newBalance;
        return this.balance
    }
}
class CurrentAccount extends Account {
    constructor(id, name, balance, cash_credit) {
        super(id, name, balance);
        this.cash_credit = cash_credit;
    }
    totalBalance() {
        let newBalance = this.balance * this.cash_credit;
        this.balance = this.balance + newBalance;
        return this.balance;
    }
}
var saving = new SavingsAccount(" 987612345128", "Dash", 200000, 1.5);
var current = new CurrentAccount(" 987612345129", "Tony", 500000, 0.5);
console.log(saving.totalBalance());
console.log(current.totalBalance());



//  3

interface Printable {
    name: string,
    printAll: (string) => string
}
var circle: Printable = {
    name: "Dash",
    printAll: (str) => { return "hi" + str }
}
var employee: Printable = {
    name: " Tony ",
    printAll: (str) => { return "hello" + str }
}
console.log(circle.printAll(circle.name))
console.log(employee.printAll(employee.name))