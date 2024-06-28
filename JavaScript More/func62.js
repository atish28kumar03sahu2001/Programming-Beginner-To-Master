//Thunk In JavaScript
const add = (a,b) => () => a + b;

const addT = add(5, 10);
console.log(addT());

function createThunk(value) {
    return function() {
        return value;
    }
}
const thunk = createThunk(42);
console.log(thunk());