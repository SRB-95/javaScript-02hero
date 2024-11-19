// Get rid of duplicate elements from an array[Using Set]
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [...new Set(array)];
// console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

// Separate the odd & even numbers from an array
const even = uniqueArray.filter((num)=>num%2 ==0);
const odd = uniqueArray.filter((num)=> num%2 !=0);
// console.log(`Even: ${even}, Odd: ${odd}`);

// Palindrome
function isPalindrome(str) {
    return str.split("").reverse().join("") === str
}
// console.log(isPalindrome("MOM"));

// Factorial Number
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
// console.log(factorial(5));

// Fibonaci Series
function generateFibonacci(n) {
    if (n <= 0) {
        return []; // Return an empty array if n is not valid
    }

    const sequence = [0]; // Initialize with the first Fibonacci number
    if (n === 1) {
        return sequence; // If only 1 term is needed, return [0]
    }

    sequence.push(1); // Add the second Fibonacci number
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]); // Add the sum of the last two terms
    }

    return sequence;
}

// Example usage:
const terms = 10; // Number of Fibonacci terms to generate
// console.log(`Fibonacci sequence up to ${terms} terms:`, generateFibonacci(terms));

// String to Title case
function toTitleCase(str) {
    return str
        .toLowerCase() // Ensure the string is in lowercase
        .split(" ") // Split the string into words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
        .join(" "); // Join the words back into a string
}

// Example usage:
// console.log(toTitleCase("hello javascript"));

