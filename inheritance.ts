//THIS IS MANUALLY- NO INHERITANCE HERE
{
  //OOP Inheritance
  class Student {
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

  //creating instances
  const student1 = new Student("Shuvo", 22, "Feni");

  //Teacher Class
  class Teacher {
    name: string;
    age: number;
    address: string;
    designation: string;

    //constructor
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string,
    ) {
      //initializing
      this.name = name;
      this.age = age;
      this.address = address;
      this.designation = designation;
    }

    //method or function
    getSleep(numberOfHours: number) {
      console.log(`${this.name} sleeps only ${numberOfHours} hours a day!`);
    }
    takeClass(numberOfClasses: number) {
      console.log(`${this.name} takes ${numberOfClasses} class a day!`);
    }
  }

  //creating instances
  const teacher1 = new Teacher("Mubin", 32, "Dhaka", "Lecturer");
}
