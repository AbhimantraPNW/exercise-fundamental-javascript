// 1.
// class ShootingGame {
//   constructor(player1, player2) {
//     this.player1 = player1;
//     this.player2 = player2;
//   }
//   getRandomItem() {
//     return {
//       health: Math.random() < 0.5 ? 0 : 10,
//       power: Math.random() < 0.5 ? 0 : 10,
//     };
//   }

//   start() {
//     console.log("Game Starts!");
//     while (this.player1.health > 0 && this.player2.health > 0) {

//       console.log("Players A turn:");
//       this.player1.showStatus();
//       const item1 = this.getRandomItem();
//       this.player1.useItem(item1);
//       console.log(
//         `Players A gets item : Health +${item1.health}, Power +${item1.power} `
//       );
//       this.player1.showStatus();
//       this.player2.hit(this.player1.power);


//       console.log("Players B turn");
//       this.player2.showStatus();
//       const item2 = this.getRandomItem();
//       this.player2.useItem(item2);
//       console.log(
//         `Players B gets item : Health +${item2.health}, Power +${item2.power} `
//       );
//       this.player2.showStatus();
//       this.player1.hit(this.player2.power);

//     }

//     if (this.player1.health <= 0) {
//       return `${this.player2.name} Win!`;
//     } else {
//       return `${this.player1.name} Win!`;
//     }
//   }
// }

// class Player {
//   constructor(name, health = 100, power = 10) {
//     this.name = name;
//     this.health = health;
//     this.power = power;
//   }
//   hit(power) {
//     this.health -= power;
//   }
//   useItem(item) {
//     this.health += item.health;
//     this.power += item.power;
//   }
//   showStatus() {
//     console.log(
//       `Player ${this.name} (Health : ${this.health}, Power : ${this.power})`
//     );
//   }
// }

// const player1 = new Player("A");
// const player2 = new Player("B");
// const game = new ShootingGame(player1, player2);
// console.log(game.start())

// 2.
// class Employee {
//   constructor(hourlyRate) {
//     this.hourlyRate = hourlyRate;
//     this.workingHoursPerDay = 0;
//   }
//   addWorkingHours(hours) {
//     this.workingHoursPerDay += hours;
//   }
//   calculateSalary() {
//     return this.workingHoursPerDay * this.hourlyRate;
//   }
// }

// class FulltimeEmployee extends Employee {
//   constructor() {
//     super(10000);
//   }

//   calculateSalary() {
//     if (this.workingHoursPerDay > 6) {
//       return 6 * 100000 + (this.workingHoursPerDay - 6) * 75000;
//     } else {
//       return super.calculateSalary();
//     }
//   }
// }

// class ParttimeEmployee extends Employee {
//   constructor() {
//     super(50000);
//   }

//   calculateSalary() {
//     if (this.workingHoursPerDay > 6) {
//       return 6 * 50000 + (this.workingHoursPerDay - 6) * 30000;
//     } else {
//       return super.calculateSalary();
//     }
//   }
// }

// const fullTimeEmployee = new FulltimeEmployee();
// fullTimeEmployee.addWorkingHours(7);
// console.log("Full-Time Employee Salary :", fullTimeEmployee.calculateSalary());

// const partTimeEmployee = new ParttimeEmployee();
// partTimeEmployee.addWorkingHours(5);
// console.log("Part-Time Employee Salary :", partTimeEmployee.calculateSalary());


// OR
// class Employee {
//   constructor(name) {
//     this.name = name;
//     this.workingHoursPerDay = 0;

//   }
// }

// class FullTimeEmployee extends Employee {
//    constructor (name) {
//     super(name);
//    }
//    addWorkingHours(hours) {
//     this.workingHoursPerDay += hours;
//    }
//    calculateSalary () {
//     const normalRate = 100000;
//     const overTimeRate = 75000;

//     if (this.workingHoursPerDay <= 6) {
//         return {
//             FullTime: this.name,
//             total:  'Rp. ' + (this.workingHoursPerDay * normalRate).toLocaleString('id-ID')
//         }
//        } else {
//         const normalHour = 6;
//         const overTimeHour = this.workingHoursPerDay - normalHour;
    
//         return {
//             FullTime: this.name,
//             total: 'Rp. ' + (overTimeHour * overTimeRate + normalHour * normalRate).toLocaleString('id-ID')
//         }
//       }
//    }
// }

// class PartTimeEmployee extends Employee {
//     constructor (name) {
//      super(name);
//     }
//     addWorkingHours(hours) {
//      this.workingHoursPerDay += hours;
//     }
//     calculateSalary () {
//      const normalRate = 50000;
//      const overTimeRate = 30000;
 
//      if (this.workingHoursPerDay <= 6) {
//          return {
//              PartTime: this.name,
//              total: 'Rp. ' + (this.workingHoursPerDay * normalRate).toLocaleString('id-ID')
//          }
//         } else {
//          const normalHour = 6;
//          const overTimeHour = this.workingHoursPerDay - normalHour;
     
//          return {
//              PartTime: this.name,
//              total: 'Rp. ' + (overTimeHour * overTimeRate + normalHour * normalRate).toLocaleString('id-ID')
//          }
//        }
//     }
//  }

// const fullTimeEmployee1 = new FullTimeEmployee ('A');
// fullTimeEmployee1.addWorkingHours(7);
// console.log(fullTimeEmployee1.calculateSalary())

// const partTimeEmployee = new PartTimeEmployee ('B');
// partTimeEmployee.addWorkingHours(7);
// console.log(partTimeEmployee.calculateSalary())