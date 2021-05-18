// interviewer: what will the following code output?
const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}


// const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
  // using the ES6 let syntax, it creates a new binding
  // every single time the function is called
  // read more here: http://exploringjs.com/es6/ch_variables.html#sec_let-const-loop-heads
  setTimeout(function() {
    console.log('The index of this number is: ' + i + ' and element is: ' + arr[i]);
  }, 3000);
}

for (var i = 0; i < arr.length; i++) {
    setTimeout(function() {
      console.log('The index of this number is: ' + i);
    }, 3000);
  }