/* 
Problem statement

You are building a banking system where multiple bank accounts can exist. Each account has an account Number, holderName, and balance. Implement the following methods:

    • deposit(amount): Adds money to the balance.
    • withdraw(amount): Deducts money but prevents overdraft.
    • transfer (amount, targetAccount): Transfers money from one account to another if the balance allows it.

Challenge

    • Implement BankAccount constructor with accountNumber, holderName, and balance.
    • Attach deposit (amount), withdraw(amount), and transfer(amount, targetAccount) methods to the prototype.

*/

function BankAccount(accountNumber, holderName, balance) {
    this.accountNumber = accountNumber
    this.holderName = holderName
    this.balance = balance
}

BankAccount.prototype.deposit = function (amount) {
    this.balance += amount
}

BankAccount.prototype.withdraw = function (amount) {
    if(this.balance >= amount) {
        this.balance -= amount
    }
}

BankAccount.prototype.transfer = function (amount, targetAccount) {
    if(this.balance >= amount) {
        this.balance -= amount
        targetAccount.deposit(amount)
    }
}