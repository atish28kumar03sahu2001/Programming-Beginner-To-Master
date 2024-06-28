function startTimer() {
    setInterval(function() {
        console.log("Timer running...");
    }, 1000);
}
startTimer();


function startAndStopTimer() {
    let intervalId = setInterval(function() {
        console.log("Timer running...");
    }, 1000);

    // Clear the interval after some time
    setTimeout(function() {
        clearInterval(intervalId);
        console.log("Timer stopped.");
    }, 5000);
}
startAndStopTimer();