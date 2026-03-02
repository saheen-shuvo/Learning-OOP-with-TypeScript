{
  //Static
  class Counter {
    static count: number = 0;
    increment() {
      return (Counter.count = Counter.count + 1);
    }
    decrement() {
      return (Counter.count = Counter.count - 1); //to call static property, we have to use Class name instead of this
    }
  }

  const instance1 = new Counter();
  console.log(instance1.increment()); //1

  const instance2 = new Counter();
  console.log(instance2.decrement()); //2 instead of 1, because we used static. now both instance pointing same memory
}
