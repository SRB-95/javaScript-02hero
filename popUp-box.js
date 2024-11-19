// Alert Box
function getAlert() {
    alert("This is an alert box!");
}

// Confirm Box
function getConfirm() {
const userResponse = confirm("Do you want to continue?");
    if (userResponse) {
        console.log("User clicked OK");
    } else {
        console.log("User clicked Cancel");
    }
}

// Prompt Box
function getPrompt() {
    const userName = prompt("Please enter your name:");
    if (userName) {
        console.log(`Hello, ${userName}!`);
    } else {
        console.log("User didn't enter their name.");
    }
}

// getAlert()
// getConfirm()
// getPrompt()
