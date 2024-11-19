// Exception Handeling
function exceptionHandeling() {
    try {
        let x = Math.random();
        if (x < 0.5) {
            throw new Error("Random value too low");
        }
        console.log("Operation succeeded with value:", x);
    } catch (error) {
        console.error("Caught an error:", error.message);
    } finally {
        console.log("Operation completed, cleaning up resources.");
    }
}

// exceptionHandeling();

// try: Defines the block of code where exceptions might be thrown.
// catch: Handles the exception thrown in the try block.
// finally: Executes after the try/catch blocks, regardless of whether an error was thrown.
// throw: Used to manually throw an error.

