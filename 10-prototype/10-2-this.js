console.log(this);

function simpleFunc() {
  console.log(this);
}

class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  };
}

const counter = new Counter();
counter.increase();

const caller = counter.increase;
caller();

class Bob {}

const bob = new Bob();
bob.run = counter.increase;
bob.run();
