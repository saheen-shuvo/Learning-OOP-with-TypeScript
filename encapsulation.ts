{
  class BankAccount {
    private balance: number;

    constructor(initialBalance: number) {
      this.balance = initialBalance;
    }

    deposit(amount: number): void {
      if (amount > 0) {
        this.balance += amount;
      }
    }

    withdraw(amount: number): void {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
      } else {
        console.log("Invalid amount");
      }
    }

    getBalance(): number {
      return this.balance;
    }
  }

  const account = new BankAccount(1000);

  account.deposit(500);
  account.withdraw(200);

  console.log(account.getBalance()); // 1300

  // Error: Property 'balance' is private
  // console.log(account.balance);
}
