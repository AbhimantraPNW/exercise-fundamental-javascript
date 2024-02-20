// 1. Create a function to check if two objects are equal
// function equal(obj1, obj2) {
//   if (obj1.a === obj2.a) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const result = equal({ a: 1 }, { a: 2 });
// console.log(result);

//Or
// function areObjectEquals(obj1, obj2) {
//   const key1 = Object.keys(obj1);
//   const key2 = Object.keys(obj2);

//   if (key1.length !== key2.length) {
//     return false;
//   }
//   for (const key of key1) {
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// const arg1 = { a: 2 };
// const arg2 = { a: 1 };
// console.log(areObjectEquals(arg1, arg2));

// 2. Create a function to get the intersection of two objects
// const obj1 = { a: 1, b: 2 };
// const obj2 = { a: 1, c: 3 };

// function inters(object) {
//   const intersection = {};
//   for (const key in obj1) {
//     if (obj2.hasOwnProperty(key)) {
//       intersection[key] = obj1[key];
//     }
//   }
//   return intersection;
// }

// const commonProperties = inters();
// console.log(commonProperties);

//Or
// const intersection = (obj1, obj2) => {
//   const duplicate = {};

//   for (let key in obj1) {
//     if (obj1[key] === obj2[key]) {
//       duplicate[key] = obj1[key];
//     }
//   }
//   return duplicate;
// };

// const arg1 = { a: 1, b: 2 };
// const arg2 = { a: 1, c: 3 };
// console.log(intersection(arg1, arg2));

// 3. Create a function to merge two array of student data and remove duplicate data
// const arr1 =  [
//     { name: 'Student 1', email : 'student1@mail.com' },
//     { name: 'Student 2', email : 'student2@mail.com' }
//     ]
// const arr2 =  [
//     { name: 'Student 1', email : 'student1@mail.com' },
//     { name: 'Student 3', email : 'student3@mail.com' }
//     ]
// function mergeArr(arr1, arr2) {
//   let mergeArr = array1.concat(array2);

//   let uniqueArr = mergeArr.filter((item, index) => {
//     return mergeArr.findIndex((obj) => obj.name === item.name) === index;
//   });
//   return uniqueArr;
// }

// console.log(mergeArr(array1, array2));

//Or
// const removeDuplicate = (arr1, arr2) => {
//   const combineArray = [...arr1, ...arr2];

//   const temp = [];

//   for (let i = 0; i < combineArray.length; i++) {
//     const duplicateValues = temp.filter((val) => {
//       return val.email === combineArray[i].email;
//     });
//     if (!duplicateValues.length) {
//       temp.push(combineArray[i]);
//     }
//   }
//   return temp;
// };

// const arr1 = [
//   { name: "Student 1", email: "student1@mail.com" },
//   { name: "Student 2", email: "student2@mail.com" },
// ];
// const arr2 = [
//   { name: "Student 1", email: "student1@mail.com" },
//   { name: "Student 3", email: "student3@mail.com" },
// ];

// console.log(removeDuplicate(arr1, arr2));

// Or (case in same name, diff email)
// const removeDuplicate = (arr1, arr2) => {
//     const uniqueEmails = new Set();
//     const result = [];
  
//     // Iterate over arr1 and arr2
//     [arr1, arr2].forEach(arr => {
//       arr.forEach(item => {
//         // Check if the email is already in the set
//         if (!uniqueEmails.has(item.email)) {
//           // If not, add it to the set and push the item to the result array
//           uniqueEmails.add(item.email);
//           result.push(item);
//         }
//       });
//     });
  
//     return result;
//   };
  
//   const arr1 = [
//     { name: "Student 1", email: "student1@mail.com" },
//     { name: "Student 2", email: "student2@mail.com" },
//   ];
//   const arr2 = [
//     { name: "Student 1", email: "student1@mail.com" },
//     { name: "Student 3", email: "student3@mail.com" },
//   ];
  
//   console.log(removeDuplicate(arr1, arr2));

// 4. Create a function that can accept input as an array of objects and switch all values into property and
// property into value

// function switchProperty(arr) {
//   return arr.map((object) => {
//     const switchObject = {};
//     for (const key in object) {
//       if (object.hasOwnProperty(key)) {
//         switchObject[object[key]] = key;
//       }
//     }
//     return switchObject;
//   });
// }

// console.log(switchProperty([{ name: "David", age: 20 }]));

// Or
// const switchValueToKey = (arr) => {
//   const result = [];

//   arr.forEach((item) => {
//     let temp = {};

//     for (let key in item) {
//       temp[item[key]] = key;
//     }
//     result.push(temp);
//   });
//   return result;
// };

// console.log(switchValueToKey([{ name: "David", age: 20}]));

// 5. Create a function to find a factorial number using recursion
// function factorial(num) {
//   if (num === 0) {
//     return 1;
//   } else {
//     return num * factorial(num - 1);
//   }
// }

// console.log(factorial(5));

// Or
// const factorial = (n) => {
//   if (n === 1) {
//     return {
//       steps: ["1"],
//       total: 1,
//     };
//   } else {
//     const next = factorial(n - 1);

//     return {
//       steps: [n, ...next.steps],
//       total: n * next.total,
//     };
//   }
// };

// const number = 5;
// const { steps, total } = factorial(number);

// console.log(steps.join(" x ") + " = " + total);