{
  class BankAccount {
    public holderName: string;
    private balance: number;

    constructor(holderName: string, initialBalance: number) {
      this.holderName = holderName;
      this.balance = initialBalance;
    }

    deposit(amount: number): void {
      if (amount > 0) {
        this.balance += amount;
      }
    }

    getBalance(): number {
      return this.balance; // Access allowed inside class
    }
  }

  const account = new BankAccount("Saheen", 1000);

  account.deposit(500);
  console.log(account.getBalance()); // 1500

//   console.log(account.balance); // Error: Property 'balance' is private
}
