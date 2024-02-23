//Food Ordering Queue
class FoodOrderQueue {
  constructor() {
    this.order = [];
  }

  showOrder() {
    console.log("queue", this.order);
  }

  randomSec() {
    return Math.floor(Math.random() * 10) + 1;
  }

  addOrder(order) {
    this.order.push(order);
    console.log(`${order} added to queue`);
  }

  promise(dataOrder, sec) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`${dataOrder} done in ${sec} seconds`);
      }, sec * 1000);
    });
  }

  async processOrder() {
    let i = 0;
    while (this.order.length > 0) {
      const result = await this.promise(this.order[i], this.randomSec());
      this.order.shift();
      console.log(result);
    }

    this.showOrder();
  }
}

const queue = new FoodOrderQueue();

queue.addOrder("Food 1");
queue.addOrder("Food 2");
queue.addOrder("Food 3");
queue.addOrder("Food 4");
queue.processOrder();
queue.showOrder();

