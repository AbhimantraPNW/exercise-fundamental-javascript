// 1.
// class Train {
//     constructor () {
//         this.passenger = ["masinis"];
//         this.maxSize = 11;
//     }

//     isFull () {
//         return this.passenger.length >= this.maxSize;
//     }

//     isEmpty () {
//         return this.passenger.length === 1; // only to massinis seat
//     }

//     showPassenger () {
//         return {
//             passengers: this.passenger.slice(1),
//             availSeats: this.maxSize - this.passenger.length,
//         }
//     }

//     passengerIn(name) {
//         if (this.isFull()) {
//         return "train full"
//         }

//         if (this.passenger.includes(name)) {
//         return "passenger already exist"
//         }

//         else {
//         this.passenger.push(name)
//         return "add passenger sucess"
//       }
//     }

//     passengerOut(name) {
//         if (this.isEmpty()) {
//             return "train empty";
//            }

//         if (name === 'masinis') {
//             return "cant remove massinis";
//            }

//         const index = this.passenger.indexOf(name);
//         if (index === - 1) {
//             return "passenger not found";
//             }

//         this.passenger.splice(index, 1)
//         return "remove passenger sucess";
//      }
//    }

// const train = new Train ();

// console.log(train.passengerIn('Zulhan'));
// console.log(train.passengerIn('Zamrun'));
// console.log(train.passengerIn('Nita'));
// console.log(train.passengerIn('Rama'));
// console.log(train.passengerIn('Ridok'));
// console.log(train.passengerIn('Landy'));
// console.log(train.passengerIn('Ical'));
// console.log(train.passengerIn('Harun'));
// console.log(train.passengerIn('Hindi'));
// console.log(train.passengerIn('Hilal'));
// console.log(train.passengerIn(''));

// console.log(train.showPassenger());

// console.log(train.passengerOut("masinis"))

// console.log(train.passengerOut('Zulhan'))
// console.log(train.passengerOut('Zamrun'))

// console.log(train.passengerOut())


// 2.
// function formatNumber(phoneNumber) {
//   const input = "62" + phoneNumber.slice(1)

//   if (typeof phoneNumber !== "string" || phoneNumber.length !== 12) {
//     return "Invalid Phone Number";
//   }
//   const formattedNumber = `(${input.slice(0, 4)})-${phoneNumber.slice(4, 8)}-${phoneNumber.slice(8)}`;
//   return formattedNumber;
// }

// console.log(formatNumber("081234489671"));
