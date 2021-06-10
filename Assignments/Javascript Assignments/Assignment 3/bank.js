//  4
function BankAccount(accountNumber, accountHolderName, accountBalance){
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
}


function Savings(accountNumber, accountHolderName, accountBalance,isSalary){
    BankAccount.call(this, accountNumber, accountHolderName, accountBalance)
    this.isSalary = isSalary
}

function Current(accountNumber, accountHolderName, accountBalance,odLimit){
    BankAccount.call(this, accountNumber, accountHolderName, accountBalance)
    this.odLimit = odLimit
}

Savings.prototype = new BankAccount();
Savings.prototype.constructor = Savings;


Current.prototype = new BankAccount();
Current.prototype.constructor = Current;



var steve = new Savings(1001,'Steve Jobs',100000,10000)

var bill = new Current(1002,'Bill Gates',150000,12000)




Savings.prototype.withdraw = function(amount){
    if(this.accountBalance <= 0)
        console.log('The account balance is zero')
    else
        this.accountBalance = this.accountBalance - amount
}

steve.withdraw(1500)



Current.prototype.withdraw = function(amount){
    if(this.accountBalance < this.odLimit){
        console.log('The account balance is less than odLimit\nYour odLimit is '+this.odLimit)
    }
    else{
        this.accountBalance = this.accountBalance - amount
    }
}

bill.withdraw(2000)


BankAccount.prototype.getCurrentBalance = function(){
    return this.accountBalance;
}



console.log(steve.getCurrentBalance())
console.log(bill.getCurrentBalance())
