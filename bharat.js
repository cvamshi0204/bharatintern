// Get the form element by its id
var form = document.getElementById("form");

// Add an event listener to the form when it is submitted
form.addEventListener("submit", function(event) {
    // Get the username and password input values by their ids
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the username or password is empty
    if (username == "" || password == "") {
        // Prevent the form from submitting
        event.preventDefault();
        // Display an alert message
        alert("Please enter your username and password");
    }
});
