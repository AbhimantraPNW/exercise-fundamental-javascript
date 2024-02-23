// Online Shop Transaction
// class Product {
//   constructor(name, weight, price, stock) {
//     this.name = name;
//     this.weight = weight;
//     this.price = price;
//     this.stock = stock;
//   }
// }

// class Book extends Product {
//   constructor(name, weight, price, stock, author) {
//     super(name, weight, price, stock);
//     this.author = author;
//   }
// }

// class Shirt extends Product {
//   constructor(name, weight, price, stock, size) {
//     super(name, weight, price, stock);
//     this.size = size;
//   }
// }

// class OnlineShop {
//   #products;
//   #cart;
//   constructor() {
//     this.#products = [];
//     this.#cart = [];
//   }

//   checkProduct(name) {
//     if (this.#products.find((item) => item.name === name)) {
//       return "Product is in catalogue";
//     } else {
//       return "Product not avalaible";
//     }
//   }

//   addProduct(produk) {
//     if (this.#products.find((p) => p.name === produk.name && p.size === produk.size)) {
//       return `Product ${produk.name} already exist on shop`;
//     } else {
//       this.#products.push(produk);
//       return `Product ${produk.name} sucessfully added`;
//     }
//   }

//   addToCart(produk, quantity) {
//     if (this.#cart.find((item) => item.produk.name === produk.name)) {
//       return `Product ${produk.name} is on the cart`;
//     }

//     const product = this.#products.find((p) => p.name === produk.name);
//     if (product.stock < quantity) {
//       return "Stock not enough";
//     }
//     this.#cart.push({ produk, quantity });
//     return `Product ${produk.name} sucess adding in cart`;
//   }

//   transaction(moneyUser, distance) {
//     const totalAmount = this.#cart.reduce(
//       (total, item) => total + item.produk.price * item.quantity,
//       0
//     );
//     const shipmentPrice = distance * 2000;
//     const totalAll = totalAmount + shipmentPrice;

//     if (moneyUser < totalAll) {
//       return `Your money not enough, total payment : Rp. ${totalAll.toLocaleString("id-ID")}`
//     }

//     this.#cart.forEach((item) => {
//       const productIndex = this.#products.findIndex(product => product.name === item.produk.name);
//       if (productIndex !== -1) {
//         this.#products[productIndex].stock -= item.quantity;
//       }
//     })
    
//     const cashBack = moneyUser - totalAll;
//     this.#cart = []; // clear cart after 
    
//     return `Total Payment : Rp. ${totalAll.toLocaleString("id-ID")},
//                 Shipment Price : Rp. ${shipmentPrice.toLocaleString("id-ID")},
//                 Cash Back : Rp. ${cashBack.toLocaleString("id-ID")}`;
//   }

//   showCatalog() {
//     if (this.#products.length === 0) {
//       return "Catalogue Empty";
//     }
//     let catalog = "Catalogue: ";
//     this.#products.forEach((p) => {
//       catalog += `${p.name} - Stock: ${p.stock}, `;
//     });
//     return catalog;
//   }

//   showCart() {
//     if (this.#cart.length === 0) {
//       return "Cart Empty";
//     }

//     let cart_info = "Cart";
//     this.#cart.forEach((item) => {
//       cart_info += `: ${item.produk.name} - Stock: ${item.quantity}, `;
//     });
//     return cart_info;
//   }
// }

// const book1 = new Book("Javascript Fundamental", 0.5, 100000, 5, "Robert Hawking");
// const clothing1 = new Shirt("Batman", 0.5, 55000, 10, "L");
// const clothing2 = new Shirt("Batman", 0.5, 55000, 10, "L");

// const onlineshop = new OnlineShop();
// console.log(onlineshop.addProduct(book1));
// console.log(onlineshop.addProduct(clothing1));
// console.log(onlineshop.addProduct(clothing2));
// console.log(onlineshop.showCatalog())

// console.log(onlineshop.addToCart(book1, 5));
// console.log(onlineshop.addToCart(book1));
// console.log(onlineshop.addToCart(clothing1, 9));
// console.log(onlineshop.showCart());

// console.log(onlineshop.checkProduct("Javascript Fundamental"));
// console.log(onlineshop.checkProduct("Javascript Advance"));

// console.log(onlineshop.transaction(1100000, 2));
// console.log(onlineshop.showCart());

// console.log(onlineshop.showCatalog())

