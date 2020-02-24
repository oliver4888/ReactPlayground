import { decorate, observable, action } from "mobx";

class counterStore {
  constructor() {
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  count = 0;

  incrementCounter() {
    this.count++;
  }
}

decorate(counterStore, {
  count: observable,
  incrementCounter: action
});

const CounterStore = new counterStore();
export default CounterStore;
