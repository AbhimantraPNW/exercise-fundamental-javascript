// 1. Create a function to calculate array of student data
// function calculateDataStudent(students) {
//   let totalStudents = students.length;
//   let totalScores = 0;
//   let totalAge = 0;
//   let highestAge = -Infinity;
//   let lowestAge =   Infinity;
//   let highestScore = Infinity;
//   let lowestScore =  Infinity;

//   students.forEach((student) => {
//     let score = student.score.reduce((a, b) => a + b, 0);
//     totalScores += score;
//     if (score > highestScore) {
//       highestScore = score;
//     }
//     if (score < lowestScore) {
//       lowestScore = score;
//     }

//     let age = student.age.reduce((a, b) => a + b, 0);
//     totalAge += age;
//     if (age > highestAge) {
//       highestAge = age;
//     }
//     if (age < lowestAge) {
//       lowestAge = age;
//     }
//   });

//   let averageScore = Math.floor(totalScores / totalStudents);
//   let averageAge = Math.floor(totalAge / totalStudents);

//   return {
//     highestScore,
//     lowestScore,
//     averageScore,
//     highestAge,
//     lowestAge,
//     averageAge,
//   };
// }

// let students = [
//   {
//     name: "Lukman Hanafi",
//     email: "lukman@gmail.com",
//     age: [25],
//     score: [86],
//   },
//   {
//     name: "Naufal Salahudin",
//     email: "naufal@gmail.com",
//     age: [24],
//     score: [84],
//   },
//   {
//     name: "Ratna Kartikasari",
//     email: "ratna@yahoo.com",
//     age: [27],
//     score: [90],
//   },
// ];

// let calucaleData = calculateDataStudent(students);
// console.log(calucaleData);

// -- Built in Method
// class StudentDataCalculator {
//   constructor (students) {
//     this.students = students
//   }
// }

// calculate () {
//   if (this.students.length === 0) {
//     return {
//       Score: {},
//       Age: {},
//     }
//   }

//   let maxScore, minScore, avgScore, maxAge, minAge, avgAge;

//   const sortScore = this.students.sort ((a, b) => a.score - b.score);
//   const sumScore = this.students.reduce((a, b) => a + b.score, 0);
//   maxScore = sortScore[sortScore.length - 1].score;
//   minScore = sortScore[0].score;
//   avgScore = sumScore / this.students.length;

//   return {
//     Score: {
//       Highest: maxScore,
//       Lowest: minScore,
//       Average: avgScore,
//     }

  // }

// }



// 2. Create a program to create transaction
// class Product {
//   constructor(productName, price) {
//     this.productName = productName;
//     this.price = price;
//   }
// }

// class Transaction extends Product {
//   constructor(productName, price, total, product) {
//     super(productName, price, total, product);
//     this.total = total;
//     this.cart = [];
//     this.transactions = [];
//   }

//   addToCart(productName, price, quantity = 1) {
//     this.cart.push({ productName, price, quantity });
//   }

//   removeFromCart(productName) {
//     this.cart = this.cart.filter(
//       (cartItem) => cartItem.productName !== productName
//     );
//   }

//   calculateTotal() {
//     let total = 0;
//     for (const cartItem of this.cart) {
//       total += cartItem.price * cartItem.quantity;
//     }
//     return total;
//   }

//   displayCart() {
//     console.log("Shopping Cart");
//     for (const cartItem of this.cart) {
//       console.log(`${cartItem.productName} : ${cartItem.quantity}`);
//     }
//     console.log(`Total : ${this.calculateTotal()}.000`);
//   }

//   transaction(sender, total) {
//     const totalAmount = this.calculateTotal();
//     const transactionDetails = {
//       sender,
//       totalAmount,
//       items: this.cart.map((cartItem) => ({
//         item: cartItem.productName,
//         price: cartItem.price,
//         quantity: cartItem.quantity,
//       })),
//     };
//     console.log(`Transaction Details :`);
//     console.log(`Sender : ${sender}`);
//     console.log(`Total : ${totalAmount}.000`);
//     console.log(`Items Purchased`);
//     for (const cartItem of this.cart) {
//       console.log(`${cartItem.quantity} ${cartItem.productName}`);
//     }
//     this.transactions.push(transactionDetails);
//     this.cart = []; // Clear the cart after transactions.
//     console.log(`Transaction Completed`);
//   }

//   checkout() {
//     console.log("Transaction History");
//     for (const transaction of this.transactions) {
//       console.log(`Sender: ${transaction.sender}`);
//       console.log(`Total Amount : ${transaction.totalAmount}.000`);
//       console.log(`Items Purchased`);
//       for (const item of transaction.items) {
//         console.log(`${item.quantity} ${item.item} -- ${item.price}.000`);
//       }
//       console.log(`------------`);
//     }
//   }
// }

// const transaction = new Transaction();

// transaction.addToCart("Product A", 30, 2);
// transaction.addToCart("Product B", 20, 1);
// transaction.addToCart("Product C", 45, 3);

// transaction.removeFromCart("Product B");
// transaction.displayCart();

// transaction.transaction("Joko");
// transaction.checkout();


// -- 
// class Product {
//   constructor (name, price) {
//     this.name = name;
//     this.price = price;
//   }
// }

// class Transaction {
//   constructor () {
//     this.cart = [];
//     this.total = 0;
//   }

//  addToCart (product, qty) {

// }

// }




