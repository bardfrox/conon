function updateUI(message) {
    console.log("Updating UI with message: " + message);
    // Here you could update the DOM or other relevant UI elements
}

let delay = 5000; // Delay in milliseconds (5 seconds)
let message = "Welcome to the site!";

setTimeout(function() {
    updateUI(message);
}, delay);
