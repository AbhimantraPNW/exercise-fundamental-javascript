// 1 . Write a code to display the multiplication table of a given integer

// const num = 9;
// const limit = 10;

// for (let i = 1; i <= limit; i++) {
//     console.log(`${num} * ${i} = ${num * i}`);
// };

// 2. Write a code to check whether a string is a palindrome or not.

// const string = 'madam';
// let isPalindrome = true;

// if (string.split('') != string.split('').reverse().join()) {
//     isPalindrome = false;
// };

// console.log(isPalindrome)

// 3. Write a code to convert centimeter to kilometer.
// const centimeter = 100000;

// if (centimeter) {
//     const kilometer = centimeter / 100000;
//     console.log(`${kilometer} km`);
// }

// 4. Write a code to format number as currency (IDR)
// const num = 1000;
// const formatRupiah = num.toLocaleString('id-ID', {
//     // style: 'currency',
//     // currency: 'IDR'
// })

// console.log(`Rp. ${formatRupiah},00`)

// 5. Write a code to remove the first occurrence of a given “search string” from a string
// const string = 'Hello world';
// console.log(string.replace('ell', ''));

// 6. Write a code to capitalize the first letter of each word in a string
// const sentence = 'hello world';
// const word = sentence.split(' ');

// for (let i = 0; i < word.length; i++) {
//     word[i] = word[i][0].toUpperCase() + word[i].substring(1);
// }

// console.log(`${word.join(' ')}`)

// 7. Write a code to reverse a string.
// const string = 'hello';
// let newString = string.split('');
// let result = newString.reverse();

// console.log(`${result.join('')}`);

// 8. Write a code to swap the case of each character from string
// const string = "The QuiCk BrOwN Fox";
// let result = '';

// for (let i of string) {
//   if (i == i.toLowerCase()) {
//     result = result + i.toUpperCase();
//   }
//   if (i == i.toUpperCase()) {
//     result = result + i.toLowerCase();
//   }
// }

// console.log(result);

// 9. Write a code to find the largest of two given integers
// const num1 = 42;
// const num2 = 27;
// let largestNumber = "";

// if (num1 > num2) {
//   largestNumber = num1;
// }
// if (num1 < num2) {
//   largestNumber = num2;
// }

// console.log(largestNumber);

// 10. Write a conditional statement to sort three numbers
// const num1 = 42;
// const num2 = 27;
// const num3 = 18;
// let temp = "";

// let numArr = [num1, num2, num3];

// for (let i = 0; i < numArr.length - 1 ; i++) {
//   if (numArr[i] > numArr[i + 1]) {
//     temp = numArr[i];
//     numArr[i] = numArr[i + 1];
//     numArr[i + 1] = temp;
//     i = -1
//   }
// }

// console.log(numArr.join());

// 11. Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type
// const letter = "hello";
// const string = 1;
// const number = 2;
// const others = 3;
// let result = "";

// if (typeof letter == "string") {
//   result = string;
// } else if (typeof letter == "number") {
//   result = number;
// } else {
//   result = others;
// }

// console.log(result);

// 12. Write a code to change every letter a into * from a string of input
// const string = 'An apple a day keeps the doctor away';
// let result = '';

// for (let i of string) {
//   if (i == string) ;{
//     result = result + i.replace(/a/gi,  '*');
//   }
// }

// console.log(result)
