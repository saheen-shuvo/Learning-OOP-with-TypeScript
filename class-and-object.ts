{
  // OOP Class
  //   class Animal {
  //     name: string;
  //     species: string;
  //     sound: string;

  //     constructor(name: string, species: string, sound: string) {
  //       this.name = name;
  //       this.species = species;
  //       this.sound = sound;
  //     }

  //     makeSound(){
  //         console.log(`The ${this.name} sounds like ${this.sound}`);
  //     }
  //   }

  //   const dog = new Animal("dog", "german", "ghew ghew");
  //   const cat = new Animal("cat", "persian", "mew");
  //   cat.makeSound();
  //   dog.makeSound();

  //using parameter properties it makes easier
  class Animal {
    //creating constructor
    constructor(
      public name: string,
      public species: string,
      public sound: string,
    ) {}

    //creating method
    makeSound() {
      console.log(`The ${this.name} sounds like ${this.sound}`);
    }
  }

  //creating instances
  const dog = new Animal("dog", "german", "ghew ghew");
  const cat = new Animal("cat", "persian", "mew");
  cat.makeSound();
  dog.makeSound();

  //
}
