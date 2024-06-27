function RegularFunction() {
    if (new.target) {
        console.log('Called with new');
    } else {
        console.log('Called without new');
    }
}
new RegularFunction(); // Logs: 'Called with new'
RegularFunction(); // Logs: 'Called without new'


const ArrowFunction = () => {
    if (new.target) {
        console.log('Called with new');
    } else {
        console.log('Called without new');
    }
};
ArrowFunction(); // Logs: 'Called without new'
// new ArrowFunction(); // Error: ArrowFunction is not a constructor