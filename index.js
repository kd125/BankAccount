class Transaction {
  constructor(amount, payee) {
    this.amount = amount;
    this.payee = payee;
    this.date = new Date();
  }
}

class BankAccount {
  constructor(accountNumber, owner) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.transactions = [];
  }

  balance() {
    let currentBalance = 0;
    for (let i = 0; i < this.transactions.length; i++) {
      currentBalance += this.transactions[i].amount;
    }
    return currentBalance;
  }

  deposit(amt) {
    let depositTransaction = new Transaction(amt, "Deposit");
    this.transactions.push(depositTransaction);
  }

  charge(payee, amt) {
    let chargeTransaction = new Transaction(-amt, payee);
    this.transactions.push(chargeTransaction);
  }
}

// Testing

let newAccount = new BankAccount(2356562632, "John Doe");
console.log(newAccount);

newAccount.deposit(15275);
console.log(newAccount.balance());

newAccount.charge("Bob Smith", -5350);
console.log(newAccount.balance());
