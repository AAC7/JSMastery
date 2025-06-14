// concat()	joins two or more arrays and returns a result
// includes() checks if an array contains a specified element
// push() adds a new element to the end of an array and returns the new length of an array
// unshift() adds a new element to the beginning of an array and returns the new length of an array
// pop() removes the last element of an array and returns the removed element
// shift() removes the first element of an array and returns the removed element
// sort() sorts the elements alphabetically in strings and in ascending order
// slice() selects the part of an array and returns the new array
// splice() removes or replaces existing elements and/or adds new elements

let fruits = ["banana", "apple", "orange"];
let cakes = ["strawberry", "chocoloate", "vanilla"];

// concat
let joinedArr = fruits.concat(cakes);
let joinedArrSpread = [...fruits, ...cakes];
console.log(joinedArr);
console.log(joinedArrSpread);

console.log(fruits.includes("banana"));

// spice selects part of array without changing original array
console.log("🚀 ~ fruits:", fruits);
let spiceArr = fruits.slice(0, 2);
console.log("🚀 ~ spiceArr:", spiceArr);

// splice removes the elements from orignial arr optionally can add elements in their place
console.log("🚀 ~ fruits:", fruits);
let splicedArr = fruits.splice(0, 2);
console.log("🚀 ~ splicedArr:", splicedArr);
console.log("🚀 ~ fruits:", fruits);
