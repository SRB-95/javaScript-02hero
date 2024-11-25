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

// Sorting[Numbers]
function sortNumbers(arr) {
    const ascending = arr.sort((a,b)=>a-b); // original array is modified
    const descending = arr.sort((a,b)=>b-a);
    return { ascending, descending };
}
// console.log(sortNumbers([5, 2, 8, 1, 22]));

// Sort by [strings]
function sortStrings(arr) {
    return arr.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
}
const strings = ["Banana", "apple", "Cherry", "banana"];
const sortedStrings = strings.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
// console.log(sortStrings(strings)); // Output: ["apple", "Banana", "banana", "Cherry"]
// console.log(sortedStrings);
  
// Custom Sorting Based on Object Properties
function sortByProperty(arr, property) {
    return arr.sort((a, b) => {
        if (a[property] < b[property]) return -1;
        if (a[property] > b[property]) return 1;
        return 0;
    });
}

const products = [
    { id: 1, name: "Laptop", price: 800 },
    { id: 3, name: "Tablet", price: 300 },
    { id: 2, name: "Mobile", price: 500 },
];

// console.log(sortByProperty(products, 'price')); // Sort by price ascending
// console.log(sortByProperty(products, 'name'));  // Sort by name alphabetically

// Quick Sort
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1]; // Choose the last element as the pivot
    const left = []; // Elements smaller than the pivot
    const right = []; // Elements larger or equal to the pivot

    for (let i = 0; i < arr.length - 1; i++) { // Partition the array
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively sort the sub-arrays and combine with the pivot
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
const numbers = [8, 3, 1, 7, 0, 10, 2];
// console.log(quickSort(numbers)); // Output: [0, 1, 2, 3, 7, 8, 10]

// Find Duplicates from a string:
function findDuplicatesWithCount(str) {
    const frequencyMap = {};
    const duplicatesWithCount = {};

    // Count the frequency of each character
    for (const char of str) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }

    // Collect duplicates along with their counts
    for (const char in frequencyMap) {
        if (frequencyMap[char] > 1) {
            duplicatesWithCount[char] = frequencyMap[char];
        }
    }

    return duplicatesWithCount;
}

// Example usage
const input = "programming";
// console.log(findDuplicatesWithCount(input));// Output: { r: 2, g: 2, m: 2 }

// Find Secode Heighest nuber from array(Sort)
function findSecondHighest(arr) {
    if (arr.length < 2) {
        return null; // Not enough elements
    }

    const uniqueSortedArray = [...new Set(arr)].sort((a, b) => b - a);
    return uniqueSortedArray.length >= 2 ? uniqueSortedArray[1] : null;
}

// Example usage
const num = [10, 20, 40, 20, 30, 40];
// console.log(findSecondHighest(num)); // Output: 30

// Find Secode Heighest nuber from array(w/o Sorting)
function findSecondHighest(arr) {
    let first = -Infinity; // Highest number
    let second = -Infinity; // Second highest number

    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num !== first) {
            second = num;
        }
    }

    // If second is still -Infinity, there is no second highest number
    if (second === -Infinity) {
        return null; // Or you can return -1 or any other indicator
    }

    return second;
}

// Example usage
const arr = [5, 3, 9, 2, 9, 4];
// console.log(findSecondHighest(arr));  // Output: 5

// Palindrome(using recursive()):
function isPalindrome(str) {
    // Base case: If the string has length 0 or 1, it's a palindrome
    if (str.length <= 1) {
        return true;
    }

    // Check if the first and last characters are the same
    if (str[0] !== str[str.length - 1]) {
        return false; // If they are not the same, it's not a palindrome
    }

    // Recursively check the substring without the first and last characters
    return isPalindrome(str.slice(1, str.length - 1));
}

// console.log(isPalindrome("madam"));  // Output: true



