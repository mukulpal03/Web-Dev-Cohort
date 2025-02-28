/*

Problem statement

Create a BankAccount constructor that initializes:
    • A balance property representing the account balance.
    • A transactions array to log all deposit and withdrawal activities.

Implement the following methods on the prototype:

1. deposit (amount):
    • Increases the balance by the given amount.
    • Adds a transaction log in the format: "Deposited x" (where X is the amount).

2. withdraw(amount):
    • Decreases the balance by the given amount.
    • Prevents overdraft (cannot withdraw if balance is insufficient).
    • If withdrawal is successful, log: "withdrew X".
    • If balance is insufficient, log: "Insufficient balance".

3. getTransactionHistory():
    • Returns the list of all transactions as an array of strings in the order they occurred.

Challenge

    • Implement BankAccount constructor with balance and transactions.
    • Attach deposit (amount), withdraw(amount), and getTransactionHistory() methods to the prototype.

*/

function BankAccount (balance) {
    this.balance = balance
    this.transactions = []
}

BankAccount.prototype.deposit = function (amount) {
    this.balance += amount
    this.transactions.push(`Deposited ${amount}`)
}

BankAccount.prototype.withdraw = function (amount) {
    if(this.balance >= amount) {
        this.balance -= amount
        this.transactions.push(`Withdrew ${amount}`)
    } else {
        this.transactions.push("Insufficient balance")
    }
}

BankAccount.prototype.getTransactionHistory = function () {
    return this.transactions
}