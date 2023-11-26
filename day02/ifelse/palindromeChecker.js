let inputString = prompt("Enter a string:");

// Remove non-alphanumeric characters and convert to lowercase
let cleanString = inputString.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

// Check if the cleaned string is a palindrome
if (cleanString === cleanString.split('').reverse().join('')) {
    console.log("It's a palindrome!");
} else {
    console.log("It's not a palindrome.");
}
