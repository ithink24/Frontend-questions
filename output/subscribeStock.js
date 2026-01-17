// Stock class (Subject)
class Stock {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.subscribers = [];
  }

  subscribe(person) {
    this.subscribers.push(person);
    console.log(`${person.name} subscribed to ${this.name}`);
  }

  unsubscribe(person) {
    this.subscribers = this.subscribers.filter((p) => p !== person);
    console.log(`${person.name} unsubscribed from ${this.name}`);
  }

  notify() {
    this.subscribers.forEach((person) => person.update(this.name, this.price));
  }

  updatePrice(newPrice, updatedBy = null) {
    this.price = newPrice;
    console.log(
      `${updatedBy ? updatedBy.name : "Someone"} updated ${
        this.name
      } to $${newPrice}`
    );
    this.notify();
  }
}

// Person class (Observer)
class Person {
  constructor(name) {
    this.name = name;
  }

  update(stockName, price) {
    console.log(`${this.name} notified: ${stockName} is now $${price}`);
  }

  subscribeTo(stock) {
    stock.subscribe(this);
  }

  changePrice(stock, newPrice) {
    stock.updatePrice(newPrice, this);
  }
}

// Usage
const stockA = new Stock("AAPL", 150);
const stockB = new Stock("GOOGL", 2800);

const alice = new Person("Alice");
const bob = new Person("Bob");

alice.subscribeTo(stockA);
bob.subscribeTo(stockA);
bob.subscribeTo(stockB);

// Bob updates AAPL
bob.changePrice(stockA, 160);

// Alice updates GOOGL
alice.changePrice(stockB, 2900);
