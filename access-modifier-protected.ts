{
  class BankAccount {
    public holderName: string;
    protected balance: number;

    constructor(holderName: string, initialBalance: number) {
      this.holderName = holderName;
      this.balance = initialBalance;
    }

    deposit(amount: number): void {
      if (amount > 0) {
        this.balance += amount;
      }
    }
  }

  // Child class
  class SavingsAccount extends BankAccount {
    addInterest(rate: number): void {
      const interest = this.balance * rate; // Accessible here
      this.balance += interest;
    }

    showBalance(): void {
      console.log(`Balance: ${this.balance}`);
    }
  }

  const savings = new SavingsAccount("Saheen", 1000);

  savings.deposit(500);
  savings.addInterest(0.1);
  savings.showBalance();

  // console.log(savings.balance); //Error: Property 'balance' is protected
}
