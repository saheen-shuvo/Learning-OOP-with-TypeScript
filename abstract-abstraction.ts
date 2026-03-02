{
  // Abstraction using abstract class
  abstract class Car {
    // Abstract methods (no body)
    abstract startEngine(): void;
    abstract moveCar(): void;

    // Normal method
    stopCar(): void {
      console.log("Car stopped.");
    }
  }

  class Toyota extends Car {
    startEngine(): void {
      console.log("Toyota engine started..");
    }

    moveCar(): void {
      console.log("Toyota is moving...");
    }
  }

  function drive(car: Car) {
    car.startEngine();
    car.moveCar();
  }

  const myToyota = new Toyota();

  drive(myToyota);
  myToyota.stopCar();
}
