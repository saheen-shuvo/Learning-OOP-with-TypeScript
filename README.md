# Learning OOP with TypeScript

A collection of TypeScript examples covering **Object-Oriented Programming (OOP)** concepts and **Type Guards**. Each concept is demonstrated in its own dedicated file with practical, easy-to-follow examples.

## Table of Contents

- [Getting Started](#getting-started)
- [Topics Covered](#topics-covered)
  - [Class and Object](#1-class-and-object)
  - [Encapsulation](#2-encapsulation)
  - [Access Modifiers](#3-access-modifiers)
    - [Private](#private)
    - [Protected](#protected)
    - [Readonly](#readonly)
  - [Inheritance](#4-inheritance)
  - [Polymorphism](#5-polymorphism)
  - [Getter and Setter](#6-getter-and-setter)
  - [Abstraction](#7-abstraction)
    - [Abstract Classes](#abstract-classes)
    - [Interfaces](#interfaces)
  - [Static Members](#8-static-members)
  - [Type Guards](#9-type-guards)
    - [typeof Guard](#typeof-guard)
    - [in Guard](#in-guard)
    - [instanceof Guard](#instanceof-guard)

---

## Getting Started

**Prerequisites:** [Node.js](https://nodejs.org/) and [TypeScript](https://www.typescriptlang.org/) installed globally.

```bash
# Install TypeScript globally (if not already installed)
npm install -g typescript

# Compile a file
tsc <filename>.ts

# Run the compiled JavaScript
node <filename>.js
```

---

## Topics Covered

### 1. Class and Object

**File:** `class-and-object.ts`

A **class** is a blueprint for creating objects. It defines properties and methods that each object (instance) will have.

This example uses **parameter properties** — a TypeScript shorthand that declares and initializes class properties directly in the constructor.

```typescript
class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string,
  ) {}

  makeSound() {
    console.log(`The ${this.name} sounds like ${this.sound}`);
  }
}

const dog = new Animal("dog", "german", "ghew ghew");
const cat = new Animal("cat", "persian", "mew");

cat.makeSound(); // The cat sounds like mew
dog.makeSound(); // The dog sounds like ghew ghew
```

---

### 2. Encapsulation

**File:** `encapsulation.ts`

**Encapsulation** means bundling data (properties) and the methods that operate on that data inside a class, while restricting direct external access to the internal state.

```typescript
class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount > 0) this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
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
// account.balance — Error: 'balance' is private
```

---

### 3. Access Modifiers

TypeScript provides three access modifiers to control the visibility of class members.

#### Private

**File:** `access-modifier-private.ts`

`private` members are **only accessible within the class** they are defined in.

```typescript
class BankAccount {
  public holderName: string;
  private balance: number;

  // ...

  getBalance(): number {
    return this.balance; // Allowed inside the class
  }
}

const account = new BankAccount("Saheen", 1000);
console.log(account.holderName); // Allowed
// console.log(account.balance); // Error: 'balance' is private
```

#### Protected

**File:** `access-modifier-protected.ts`

`protected` members are accessible within the class **and in any subclass**, but not from outside.

```typescript
class BankAccount {
  protected balance: number;
  // ...
}

class SavingsAccount extends BankAccount {
  addInterest(rate: number): void {
    this.balance += this.balance * rate; // Accessible in child class
  }
}

// console.log(savings.balance); // Error: 'balance' is protected
```

#### Readonly

**File:** `access-modifier-readonly.ts`

`readonly` properties can only be set during initialization (in the constructor) and **cannot be reassigned** afterwards.

```typescript
class BankAccount {
  public readonly accountNumber: string;

  constructor(accountNumber: string, ...) {
    this.accountNumber = accountNumber; // Allowed in constructor
  }
}

const account = new BankAccount("ACC12345", "Saheen", 1000);
console.log(account.accountNumber); // Allowed
// account.accountNumber = "NEW123"; // Error: read-only property
```

---

### 4. Inheritance

**Files:** `inheritance.ts` (without inheritance), `inheritance2.ts` (with inheritance)

**Inheritance** allows a class (child) to reuse the properties and methods of another class (parent) using the `extends` keyword. The `super()` call invokes the parent class constructor.

`inheritance.ts` demonstrates the problem — code duplication without inheritance.

`inheritance2.ts` solves it using a `Person` base class:

```typescript
class Person {
  constructor(
    public name: string,
    public age: number,
    public address: string,
  ) {}

  getSleep(numberOfHours: number) {
    console.log(`${this.name} sleeps only ${numberOfHours} hours a day!`);
  }
}

class Student extends Person {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}

class Teacher extends Person {
  constructor(name: string, age: number, address: string, public designation: string) {
    super(name, age, address);
  }

  takeClass(numberOfClasses: number) {
    console.log(`${this.name} takes ${numberOfClasses} class a day!`);
  }
}
```

---

### 5. Polymorphism

**File:** `polimorphism.ts`

**Polymorphism** allows objects of different classes to be treated as instances of a shared base class. Each subclass can **override** a method to provide its own specific behavior.

```typescript
class Animal {
  makeSound(): void {
    console.log("Some generic sound");
  }
}

class Cat extends Animal {
  makeSound(): void { console.log("Meow"); }
}

class Dog extends Animal {
  makeSound(): void { console.log("Woof"); }
}

function animalSound(animal: Animal) {
  animal.makeSound(); // Behavior differs based on the actual object
}

animalSound(new Cat()); // Meow
animalSound(new Dog()); // Woof
```

---

### 6. Getter and Setter

**File:** `getter-setter.ts`

**Getters** and **setters** allow you to define property-like access to methods, providing a clean syntax while keeping internal data encapsulated.

```typescript
class BankAccount {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  get getBalance(): number {
    return this.balance;
  }

  set deposit(amount: number) {
    if (amount > 0) {
      this.balance += amount;
    }
  }
}

const account = new BankAccount(1000);
account.deposit = 500;              // Using setter
console.log(account.getBalance);    // 1500 — Using getter
```

---

### 7. Abstraction

Abstraction hides implementation details and exposes only the essential interface. TypeScript supports abstraction via **abstract classes** and **interfaces**.

#### Abstract Classes

**File:** `abstract-abstraction.ts`

An `abstract` class cannot be instantiated directly. It can define **abstract methods** (no body) that every subclass **must** implement, as well as concrete (normal) methods.

```typescript
abstract class Car {
  abstract startEngine(): void;
  abstract moveCar(): void;

  stopCar(): void {
    console.log("Car stopped.");
  }
}

class Toyota extends Car {
  startEngine(): void { console.log("Toyota engine started.."); }
  moveCar(): void { console.log("Toyota is moving..."); }
}

const myToyota = new Toyota();
myToyota.startEngine();
myToyota.stopCar();
```

#### Interfaces

**File:** `interface-abstraction.ts`

An `interface` defines a **contract** — a set of method/property signatures that a class must implement using the `implements` keyword.

```typescript
interface Car {
  startEngine(): void;
  moveCar(): void;
}

class Toyota implements Car {
  startEngine(): void { console.log("Toyota engine started.."); }
  moveCar(): void { console.log("Toyota is moving..."); }
}
```

---

### 8. Static Members

**File:** `static.ts`

`static` properties and methods belong to the **class itself**, not to any individual instance. All instances share the same static value.

```typescript
class Counter {
  static count: number = 0;

  increment() {
    return (Counter.count += 1);
  }

  decrement() {
    return (Counter.count -= 1);
  }
}

const instance1 = new Counter();
console.log(instance1.increment()); // 1

const instance2 = new Counter();
console.log(instance2.decrement()); // 0 — both instances share the same count
```

---

### 9. Type Guards

Type guards allow you to **narrow down** the type of a variable at runtime, enabling type-safe operations on union types.

#### typeof Guard

**File:** `type-gurad-typeof.ts`

Uses the `typeof` operator to check for primitive types like `"string"`, `"number"`, `"boolean"`.

```typescript
type AlphaNumeric = string | number;

const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
};
```

#### in Guard

**File:** `type-guard-in.ts`

Uses the `in` operator to check whether a specific **property exists** in an object, distinguishing between object types in a union.

```typescript
type NormalUser = { name: string };
type AdminUser  = { name: string; role: "admin" };

const getUser = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    console.log("Admin");
  }
};
```

#### instanceof Guard

**File:** `instanceof-guard.ts`

Uses the `instanceof` operator to check whether an object is an **instance of a specific class**, enabling access to class-specific methods safely.

```typescript
function handleAnimal(animal: Animal) {
  animal.makeSound();

  if (animal instanceof Cat) {
    animal.climb(); // TypeScript knows it's a Cat
  } else if (animal instanceof Dog) {
    animal.fetch(); // TypeScript knows it's a Dog
  }
}

handleAnimal(new Cat("Whiskers")); // Meow 🐱 + climbing
handleAnimal(new Dog("Buddy"));    // Woof 🐶 + fetching
```

---

## Project Structure

```
Learning-OOP-with-TypeScript/
├── class-and-object.ts           # Classes, objects, parameter properties
├── encapsulation.ts              # Encapsulation with private members
├── access-modifier-private.ts    # private access modifier
├── access-modifier-protected.ts  # protected access modifier
├── access-modifier-readonly.ts   # readonly access modifier
├── inheritance.ts                # Code duplication without inheritance
├── inheritance2.ts               # Inheritance with extends & super
├── polimorphism.ts               # Method overriding & polymorphism
├── getter-setter.ts              # Getters and setters
├── abstract-abstraction.ts       # Abstraction with abstract classes
├── interface-abstraction.ts      # Abstraction with interfaces
├── static.ts                     # Static properties and methods
├── type-gurad-typeof.ts          # typeof type guard
├── type-guard-in.ts              # in type guard
├── instanceof-guard.ts           # instanceof type guard
└── tsconfig.json                 # TypeScript compiler configuration
```
