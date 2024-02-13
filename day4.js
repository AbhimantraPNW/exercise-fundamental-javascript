// 1 . Create a function that can create a triangle pattern according to the height
// let count = 1;
// let result = "";

// const triangle = (height) => {
//   for (let i = 0; i <= height; i++) {
//     for (let j = 0; j < i; j++) {
//       // result += count.toString().padStart(2, "0") + " ";
//       // count++;

//       // atau
//       result += (count < 10 ? "0" : "") + count + " ";
//       count++;
//     }
//     result += "\n";
//   }
//   return result;
// };

// console.log(triangle(4));

// 2. Create a function that can loop the number of times according to the input we provide, and will
// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
// "FizzBuzz"

// const fizzBuzz = (n) => {
//   let result = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       result.push("FizzBuzz");
//     } else if (i % 3 == 0) {
//       result.push("Fizz");
//     } else if (i % 5 == 0) {
//       result.push("Buzz");
//     } else {
//       result.push(i.toString());
//     }
//   }
//   return result;
// };

// console.log(fizzBuzz(6).join(", "));

// 3. Create a function to calculate Body Mass Index (BMI)
// Formula : : BMI = weight (kg) / (height (meter))²

// const bmi = (weight, height) => {
//   let result = parseFloat(weight) / (parseFloat(height) / 100) ** 2;

//   if (result < 18.5) {
//     result = "less weight";
//   } else if (result >= 18.5 && result <= 24.9) {
//     result = "ideal";
//   } else if (result >= 25.0 && result <= 29.9) {
//     result = "overweight";
//   } else if (result >= 30.0 && result <= 39.9) {
//     result = "very overweight";
//   } else {
//     result = "obesity";
//   }
//   return result;
// };

// console.log(bmi(69, 168));

// 4. Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// Built in Method
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = numbers.filter((even) => {
//   if (even % 2 === 0) {
//     return even;
//   }
// });

// console.log(result);

// Not built in method
// function removeOddNumber(arr) {
//   const evenNumber = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       evenNumber.push(arr[i]);
//     }
//   }
//   return evenNumber;
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(removeOddNumber(numbers));

// 5. Write a function to split a string and convert it into an array of words
// Not built in method --
const splitString = (split) => {
  let arr = [];
  let temp = "";

  for (let i = 0; i < split.length; i++) {
    if (split[i] == " ") {
      arr.push(temp);
      temp = "";
      continue;
    }
    temp += split[i];
  }

  arr.push(temp);
  
  return arr;
};

console.log(splitString("Hello World"));

// built in method
// const string = (split) => {
//   return split.split(" ");
// };

// console.log(string("Hello World"));
