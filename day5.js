// 1. Write a function to get the lowest, highest and average value in the array (with and without sort function).
// const arr = [12, 5, 23, 18, 4, 45, 32];

// With sort function
// const smallest = (arr.sort((a,b) => a - b))
// const highest = (arr.sort((a,b) => b - a))

// const smallestNumber = ((smallest[6]))
// const higherNumber = ((highest[0]))
// const averageNumber = arr.reduceRight((acc, cur) => acc + cur, 0) / arr.length

// console.log(smallestNumber)

// Without sort function
// const smallestNumber = (small) => {
//   return Math.min(...arr);
// };

// const highestNumber = (high) => {
//     return Math.max(...arr);
//   };

// const averageNumber = (average) => {
//   let total = 0;
//   let count = 0;

//   arr.forEach((index) => {
//     total += index;
//     count++;
//   });

//   return total / count;
// };

// console.log(averageNumber())

// 2. Write a function that takes an array of words and returns a string by concatenating the words in the array
// const arr = ["apple", "banana", "cherry", "date"];

// const nextString = (string) => {
//   const join = arr.slice(0, -1).join(", ") + ", and " + arr[arr.length - 1];

//   return join;
// };

// console.log(nextString());

// 3. Write a function to split a string and convert it into an array of words
// const string = (split) => {
//   return split.split(" ");
// };

// console.log(string("Hello World"));

// 4. Write a function to calculate each element in the same position from two arrays of integer. Both array are same
// const num1 = [1, 2, 3];
// const num2 = [3, 2, 1];

// const calculateArray = (num1, num2) => {
//   const result = [];
//   const maxLength = Math.max(num1.length, num2.length);

//   for (let i = 0; i < maxLength; i++) {
//     const sum = (num1[i] || 0) + (num2[i] || 0);
//     result.push(sum);
//   }
//   return result;
// };

// console.log(calculateArray(num1, num2));

// 5. Write a function that adds an element to the end of an array
// const num = [1, 2, 3, 4];
// const number = (push) => {
//   let n = push;

//   for (let i = 0; i < num.length; i++) {
//     if (n != num[n - 1]) {
//       num.push(n);
//     } else if (n == num[n]) {
//       continue;
//     }
//     return num;
//   }
// };

// console.log(number(4));

// Or
// const number = (array, newElement) => {
//   for (let i = 0; i < num.length; i++) {
//     if (!array.includes(newElement)) {
//       array.push(newElement);
//       return array;
//     } else {
//       return array;
//     }
//   }
// };

// console.log(number(num, 4));

// 6. Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// const numbers = [1, 2, 3, 4, 5, 6];
// const result = numbers.filter((even) => {
//   if (even % 2 == 0) {
//     return even;
//   }
// });

// console.log(result);

// 7. Write a function to insert multiple given integer (not an array) to an array and have a maximum size input
// const integer = 510243678;
// const maxSize = 5;

// const result = (max) => {
//   const arrayOfDigits = Array.from(String(integer), Number);
//   let fNum = arrayOfDigits.splice(1, 2, 10);
//   let fNum2 = arrayOfDigits.splice(2, 2, 24);

//   const maxString = arrayOfDigits.slice(0, maxSize);

//   return maxString;
// };

// console.log(result());

// Or
// const maxSize = (numbers, max) => {
//     const result = [];

//     numbers.forEach((item) => {
//       if (result.length === max) {
//         return;
//       }
//       result.push(item)
//     })
//     return result
// }

// const max = 5;
// const numbers =  [5, 10, 24, 3, 6, 7, 8]
// console.log(maxSize(numbers, max))

// 8. Write a function that will combine 2 given array into one array
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const result = (plus) => {
//   return arr1.concat(arr2);
// };

// console.log(result());

// 9. Write a function to find duplicate values in an array
// const arr = [1, 2, 2, 2, 3, 3, 4, 5, 5];
// let result = (num) => {
//   let arr1 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.indexOf(i) != arr.lastIndexOf(i)) {
//       arr1.push(i);
//     }
//   }
//   return arr1;
// };

// console.log(result(arr));

// 10. Write a function to find the difference in 2 given array
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [3, 4, 5, 6, 7];

// const result = (dif) => {
//   let nArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.indexOf(arr1[i]) === -1) {
//       nArr.push(arr1[i]);
//     }
//     for (let j = 4; j < arr2.length; j++) {
//       if (arr1.indexOf(arr2[i]) === -1) {
//         nArr.push(arr2[i]);
//       }
//     }
//   }
//   return nArr;
// };

// Or
// const findDif = (arr1, arr2) => {
//     const diff1 = arr1.filter(element => !arr2.includes(element))
//     const diff2 = arr2.filter(element => !arr1.includes(element))

//     return diff1.concat(diff2)
// }

// console.log(findDif(arr1, arr2));

// 11. Based on the array below write a function that will return primitive data types only
// const arr = [1, [], undefined, {}, "string", {}, []];

// const result = (print) => {
//   let r = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== "object") {
//       r.push(arr[i]);
//     }
//   }
//   return r;
// };

// console.log(result());

// 12. Write a function from a given array of numbers and return the second smallest number
// const numbers = [5, 3, 1, 7, 2, 6];

// const result = (second) => {
//   let secondNum = Infinity;
//   let firstNUm = Infinity;
//   let thirdNum = Infinity;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < firstNUm) {
//       secondNum = firstNUm;
//       firstNUm = numbers[i];
//     } else if (numbers[i] < secondNum) {
//       secondNum = numbers[i];
//     }
//   }
//   return secondNum;
// };

// console.log(result());

// 13. Write a function from a given array of mixed data types and return the sum of all the number
// const mixedArray = ["3", 1, "string", null, false, undefined, 2];

// const result = (sum) => {
//   let total = [];
//   for (let i = 0; i < mixedArray.length; i++) {
//     if (typeof mixedArray[i] === "number") {
//       total.push(mixedArray[i]);
//       total.reduce((a, b) => a + b);
//     }
//   }
//   return total.reduce((a, b) => a + b);
// };

// console.log(result());

// 14. Write a function from the below array of number that will return sum of duplicate values.
// const arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];

// const result = (sum) => {
//   let total = [];
//   for (let i of arr) {
//     if (arr.indexOf(i) != arr.lastIndexOf(i)) {
//       total.push(i);
//     }
//   }
//   return total.reduce((a, b) => a + b);
// };

// Or
// const sumDuplicate = (arr) => {
//   const duplicateValues = arr.filter((value, index, array) => {
//     return array.indexOf(value) !== index;
//   });
//   let result = 0;
//   for (let i of arr) {
//     if (duplicateValues.includes(i)) {
//       result += i;
//     }
//   }
//   return result;
// };

// console.log(sumDuplicate(arr));

// 15. Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
// between rock, paper, or scissor.
// let choices = ["rock", "paper", "scissor"];
// let map = [];

// choices.forEach((player, computer) => {
//   map[player] = [];
//   map[player][player] = "DRAW";
//   map[player][choices[(computer + 1) % 3]] = "LOSE";
//   map[player][choices[(computer + 2) % 3]] = "WIN";
// });

// const game = (player, computer) => {
//   return map[player][computer];
// };

// console.log(game("rock", "scissor"));

// Or
// const gameSuit = (playerChoice) => {
//   const choices = ["rock", "paper", "scissor"];

//   const compChoice = choices[Math.floor(Math.random() * 2.9)];
//   console.log(compChoice);

//   if (playerChoice === compChoice) {
//     return "DRAW";
//   }
//   if (
//     (playerChoice === "rock" && compChoice === "scissor") ||
//     (playerChoice === "scissor" && compChoice === "paper") ||
//     (playerChoice === "paper" && compChoice === "rock")
//   ) {
//     return "WIN";
//   }
//   return "LOSE";
// };

// console.log(gameSuit("rock"));
