var arr = [];

function fizzBuzz(i) {
  
  if (i % 3 === 0 && i % 5 === 0) {
    arr.push("FizzBuzz");
  }
  else if (i % 5 === 0) {
    arr.push("Buzz");
  }
  else if (i % 3 === 0){
    arr.push("Fizz");
  }
  else {
    arr.push(i);
  }
}

for (var i = 0; i < 100; ++i) {
  fizzBuzz(i);
}

console.log(arr);
