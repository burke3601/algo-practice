// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//iterative
// function fib(n) {
//     const results = [0,1];

//     for (let i = 2; i <= n; i ++){
//         const a = results[i -1];
//         const b = results[i-2];
        
//         results.push(a+b);
//     }
//     return results[n];
// }

// console.log(fib(4))

// module.exports = fib;

//recursion

//  

//memoization ccan imprive the run time of a recursive statement
//store the arguemnts of each function along wth the result. 
// if the function is called again with the same arguments, return the precomputed result, 
//rather than running the function again


function memoize(fn){
    const cache = {};
    return function(...args){
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    };
}

function slowFib(n) {
    if (n < 2) {
        return n;
    }
    return (fib(n-1) + fib(n-2));
    
}
//make sure to call the memoized version of the function
const fib = memoize(slowFib) 



module.exports = fib;



