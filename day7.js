// 1. Create a function to check if two objects are equal
// function equal(obj1, obj2) {
//   if (obj1.a === obj2.a) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const obj1 = equal({ a: 1 }, { a: 2 });
// console.log(obj1);

// 2. Create a function to get the intersection of two objects
// const obj1 = { a: 1, b: 2 };
// const obj2 = { a: 1, c: 3 };

// function inters(o1, o2) {
//   const intersection = {};
//   for (const key in obj1) {
//     if (obj2.hasOwnProperty(key)) {
//       intersection[key] = obj1[key];
//     }
//   }
//   return intersection;
// }

// const commonProperties = inters(obj1, obj2);
// console.log(commonProperties);

// 3. Create a function to merge two array of student data and remove duplicate data
// const array1 = [
//   { name: "Student 1", email: "student1@mail.com" },
//   { name: "Student 2", email: "student2@mail.com" },
// ];

// const array2 = [
//   { name: "Student 1", email: "student1@mail.com" },
//   { name: "Student 3", email: "student3@mail.com" },
// ];

// function mergeArr(arr1, arr2) {
//   let mergeArr = array1.concat(array2);

//   let uniqueArr = mergeArr.filter((item, index) => {
//     return mergeArr.findIndex((obj) => obj.name === item.name) === index;
//   });
//   return uniqueArr;
// }

// console.log(mergeArr(array1, array2));

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

// 5. Create a function to find a factorial number using recursion
// function factorial(num) {
//   if (num === 0) {
//     return 1;
//   } else {
//     return num * factorial(num - 1);
//   }
// }

// const n = 5;
// console.log(factorial(n));
