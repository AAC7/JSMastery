// Function Declaration

function greet() {
  console.log("Hello world");
}

// greet();

// Function Expressions

const greetings = function (user) {
  console.log(`Hellow ${user}`);
};

greetings("Dan");

// diffrence is function declaraion calling can be done before function scope too but not expression

console.log(x);
let x = 1; // Error
