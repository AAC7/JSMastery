// 1. Create object name (car)
// 2. add (type, model, color) as properties
// 3. check the type of object
// 4. Update the type property to "Toyota"
// 5. Add new property wheels
// 6. log car to the console.

const car = {
  type: "fiat",
  model: "500",
  color: "rose",
};

console.log("typeof car is ", typeof car);
console.log("🚀 ~ car:", car);

// Update property
console.log(car.type);
console.log((car.type = "Toyota"));

// Add new property
console.log((car.wheels = 4));
// or
console.log(car["model"]);

console.log("🚀 ~ car:", car);

// to find the length of object
console.log(Object.values(car).length);
