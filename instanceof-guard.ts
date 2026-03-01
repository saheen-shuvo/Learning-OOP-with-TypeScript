{
  // Base class
  class Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    makeSound(): void {
      console.log("Some generic animal sound");
    }
  }

  // Derived class - Cat
  class Cat extends Animal {
    constructor(name: string) {
      super(name);
    }

    makeSound(): void {
      console.log("Meow 🐱");
    }

    climb(): void {
      console.log(`${this.name} is climbing a tree!`);
    }
  }

  // Derived class - Dog
  class Dog extends Animal {
    constructor(name: string) {
      super(name);
    }

    makeSound(): void {
      console.log("Woof 🐶");
    }

    fetch(): void {
      console.log(`${this.name} is fetching the ball!`);
    }
  }

  // Function using instanceof
  function handleAnimal(animal: Animal) {
    animal.makeSound();

    if (animal instanceof Cat) {
      animal.climb(); // TypeScript now knows it's a Cat
    } else if (animal instanceof Dog) {
      animal.fetch(); // TypeScript now knows it's a Dog
    } else {
      console.log("Unknown animal type");
    }
  }

  // Creating objects
  const myCat = new Cat("Whiskers");
  const myDog = new Dog("Buddy");

  // Testing
  handleAnimal(myCat);
  handleAnimal(myDog);
}
