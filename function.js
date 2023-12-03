// try catch method below ***
// pushing a value to an array that does not exist and it throws intended exception

// Example: this will not print goodbye.
// list.push('hello');
// console.log(err);



//  place this in a try catch method below, 
//  there is a try catch and finally method as well. 
//  instead of crashing and erroring on the console
//  
try {
    list.push('hello');
    
    } catch (err) {
        console.log(err);
    }
    console.log('goodbye');