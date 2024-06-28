function addEventListener() {
    document.getElementById("myButton").addEventListener("click", function() {
        console.log("Button clicked");
    });
}
// Adding the event listener
addEventListener();


function addAndRemoveEventListener() {
    let button = document.getElementById("myButton");
    
    function handleClick() {
        console.log("Button clicked");
    }

    button.addEventListener("click", handleClick);

    // Removing the event listener after some time
    setTimeout(function() {
        button.removeEventListener("click", handleClick);
        console.log("Event listener removed.");
    }, 5000);
}
// Adding and removing the event listener
addAndRemoveEventListener();