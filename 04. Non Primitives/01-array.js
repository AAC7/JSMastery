// 1. Create array name (favSingers) Store 3 favorite singers.
// 2. log the first singer in that array.
// 3. Create array name (favNumbers) & store 4 fav Numbers.
// 4. Create array name (mixedArr) store ["string", ["otherarray"], 123, true]
// 5. Now Access each item in that array by using [] notation.

let favSingers = ["Allen", "Walker", "Emma"];
console.log(favSingers[0]);

let favNumbers = Array(2, 5, 3, 17);
console.log(favNumbers);

let mixedArr = ["string", [2, 4], 123, true];
console.log(mixedArr);

console.log(mixedArr[0]); // output: string
console.log(mixedArr[0][2]); // outputs r form the word string if used other than string of multi-dim array output undefined
console.log(mixedArr[1]); // output: [2,4]
console.log(mixedArr[1][0]); // output 2
console.log(mixedArr[2]); //
console.log(mixedArr[3]);
