function createClosure() {
    let bigData = new Array(1000000).fill('Some large data');   
    return function() {
        console.log(bigData[0]);
    };
}
let leakyFunction = createClosure();

function createOptimizedClosure() {
    let bigData = new Array(1000000).fill('Some large data');
    
    return function(someValue) {
        console.log(someValue); // Use parameters or local variables instead of capturing large data
    };
}

let optimizedFunction = createOptimizedClosure();
optimizedFunction("Use smaller data here");