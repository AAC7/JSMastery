// 1. Create a function name (showCallFunc)
// 2. pass "fn" as parameter
// 3. inside that function, create variable which holds value of 10
// 4. pass that value to the callback function
// 5. Now create callback function & print that value which you pass as parameter to the callback func.

// -------------------------------
// When we provide function as an (argument) to other function/argument that function is known as callback function.

// callback(function() {...})

function showCallFunc(fn) {
  let x = 10;
  fn(x);
}

function callBackfun(params) {
  console.log(params);
}

showCallFunc(callBackfun);
