class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    // if (amount > 0) {
    //   this.balance += amount;
    //   console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    // } else {
    //   console.log("Invalid deposit amount. Amount must be greater than 0.");
    // }

    switch (amount > 0) {
      case true:
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
        break;
      default:
        console.log("Invalid deposit amount. Amount must be greater than 0.");
    }
  }

  withdraw(amount) {
    // if (amount > 0 && amount <= this.balance) {
    //   this.balance -= amount;
    //   console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
    // } else if (amount <= 0) {
    //   console.log("Invalid withdrawal amount. Amount must be greater than 0.");
    // } else {
    //   console.log("Insufficient funds.");
    // }

    switch (amount > 0 && amount <= this.balance) {
      case true:
        this.balance -= amount;
        console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
        break;
      case false:
        console.log("Insufficient funds.");
        break;
      default:
        console.log(
          "Invalid withdrawal amount. Amount must be greater than 0."
        );
    }
  }
}

const account1 = new BankAccount("0123456789", 0);
const account2 = new BankAccount("9876543210", 500);

// Deposit & withdraws money into account1
account1.deposit(0);
account1.withdraw(200);

// Deposit & withdraws money into account2
account2.deposit(200);
account2.withdraw(300);
