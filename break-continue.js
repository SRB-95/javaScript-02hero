function breakStatement() {
    for (let i = 0; i < 5; i++) {
        if (i === 3) {
            console.log("Breaking out of the loop at i = 3");
            break; // Exits the loop when i reaches 5
        }
        console.log(i);
    }
}
// breakStatement();

function continueStatement() {
    for (let i = 0; i < 5; i++) {
        if (i === 3) {
            console.log("Skipping iteration where i = 3");
            continue; // Skips the current iteration when i equals 5
        }
        console.log(i);
    }
}
// continueStatement();