//USING INHERITANCE
{
  //OOP Inheritance
  //Person Class
  class Person {
    name: string;
    age: number;
    address: string;

    //constructor
    constructor(name: string, age: number, address: string) {
      //initializing
      this.name = name;
      this.age = age;
      this.address = address;
    }

    //method or function
    getSleep(numberOfHours: number) {
      console.log(`${this.name} sleeps only ${numberOfHours} hours a day!`);
    }
  }
  //Student class will inherit Person Class using extends
  class Student extends Person {
    //constructor
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  //creating instances
  const student1 = new Student("Shuvo", 22, "Feni");

  //Teacher Class extends Person class
  class Teacher extends Person {
    designation: string;

    //constructor
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string,
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numberOfClasses: number) {
      console.log(`${this.name} takes ${numberOfClasses} class a day!`);
    }
  }

  //creating instances
  const teacher1 = new Teacher("Mubin", 32, "Dhaka", "Lecturer");
}
