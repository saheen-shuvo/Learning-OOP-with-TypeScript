# Learning OOP with TypeScript

A collection of TypeScript examples demonstrating core **Object-Oriented Programming (OOP)** concepts. Each file focuses on a specific concept with clear, runnable examples.

## Topics Covered

| File | Concept |
|---|---|
| `class-and-object.ts` | Classes, objects, constructors, and methods |
| `inheritance.ts` | Inheritance using `extends` and `super` |
| `inheritance2.ts` | Inheritance with a shared base `Person` class |
| `encapsulation.ts` | Encapsulation with private properties and public methods |
| `getter-setter.ts` | Getters and setters for controlled property access |
| `access-modifier-private.ts` | `private` access modifier |
| `access-modifier-protected.ts` | `protected` access modifier |
| `access-modifier-readonly.ts` | `readonly` access modifier |
| `abstract-abstraction.ts` | Abstraction using abstract classes |
| `interface-abstraction.ts` | Abstraction using interfaces |
| `polimorphism.ts` | Polymorphism with method overriding |
| `instanceof-guard.ts` | Type narrowing with `instanceof` |
| `type-guard-in.ts` | Type narrowing with the `in` operator |
| `type-gurad-typeof.ts` | Type narrowing with `typeof` |
| `static.ts` | Static properties and methods |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [TypeScript](https://www.typescriptlang.org/) (`npm install -g typescript`)

### Running the Examples

Compile and run any file using `ts-node`:

```bash
npx ts-node <filename>.ts
```

Or compile with the TypeScript compiler and then run with Node.js:

```bash
tsc <filename>.ts
node <filename>.js
```

## Concepts at a Glance

### Classes & Objects
Define blueprints for objects using `class`, instantiate them, and call methods.

### Inheritance
Child classes extend parent classes with `extends`, reusing and extending behaviour via `super`.

### Encapsulation
Hide internal state using `private` properties and expose a controlled public interface through methods.

### Getters & Setters
Use `get` and `set` keywords to define computed or validated property accessors.

### Access Modifiers
- `public` — accessible anywhere (default)
- `private` — accessible only within the class
- `protected` — accessible within the class and its subclasses
- `readonly` — can be set only during initialisation

### Abstraction
Define contracts through abstract classes or interfaces, hiding implementation details from consumers.

### Polymorphism
Override methods in subclasses so that the same interface produces different behaviours depending on the object type.

### Type Guards
Narrow union types at runtime using `typeof`, `instanceof`, or the `in` operator.

### Static Members
Declare class-level properties and methods with `static` that are shared across all instances.
