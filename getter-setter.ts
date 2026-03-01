{
  class BankAccount {
    private balance: number;

    constructor(balance: number) {
      this.balance = balance;
    }

    // Getter
    get getBalance(): number {
      return this.balance;
    }

    // Setter
    set deposit(amount: number) {
      if (amount > 0) {
        this.balance += amount;
      } else {
        console.log("Deposit amount must be positive");
      }
    }
  }

  const account = new BankAccount(1000);

  // Using setter
  account.deposit = 500;

  // Using getter
  console.log(account.getBalance); // 1500
}
