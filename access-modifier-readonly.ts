{
  //
  class BankAccount {
    public readonly accountNumber: string;
    public holderName: string;
    private balance: number;

    constructor(accountNumber: string, holderName: string, balance: number) {
      this.accountNumber = accountNumber;
      this.holderName = holderName;
      this.balance = balance;
    }

    deposit(amount: number): void {
      this.balance += amount;
    }
  }

  const account = new BankAccount("ACC12345", "Saheen", 1000);

  console.log(account.accountNumber); // Allowed

  account.holderName = "Sujon"; // Allowed

  // account.accountNumber = "NEW123"; // Error: Cannot assign to 'accountNumber' because it is a read-only property

  account.deposit(500);

  //
}
