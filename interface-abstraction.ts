{
  // Abstraction using interface
  interface Car {
    startEngine(): void;
    moveCar(): void;
  }

  class Toyota implements Car {
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

  myToyota.moveCar();

  //
}
