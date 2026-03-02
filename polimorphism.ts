{
  class Animal {
    makeSound(): void {
      console.log("Some generic sound");
    }
  }

  class Cat extends Animal {
    makeSound(): void {
      console.log("Meow");
    }
  }

  class Dog extends Animal {
    makeSound(): void {
      console.log("Woof");
    }
  }

  // Polymorphism in action
  function animalSound(animal: Animal) {
    animal.makeSound(); // Different behavior depending on object
  }

  const cat = new Cat();
  const dog = new Dog();

  animalSound(cat); // Meow 
  animalSound(dog); // Woof 
}
