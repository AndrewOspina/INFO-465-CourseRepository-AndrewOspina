/* jshint esversion: 6 */

// 1. This is the function to Clean the Data
function cleanData(inputWord) {
    // Converts the string to lowercase so 'Level' matches 'level'
    let lowerCased = inputWord.toLowerCase();

    // Removes specific characters using replace and a Regular Expression (Regex).
    // /[ .,]/g means: look for space, period, or comma globally (everywhere in the string)
    // and replace them with an empty string "" (effectively deleting them).
    let cleaned = lowerCased.replace(/[ .,]/g, "");

    return cleaned;
}

// 2. This function to Test if the Cleaned String is a Palindrome
function testPalindrome(cleanedWord) {
    // To reverse a string in JS, I used:
    // 1. split('') -> turns string into an array of characters
    // 2. reverse() -> reverses the array order
    // 3. join('')  -> joins the array back into a string
    let reversedWord = cleanedWord.split('').reverse().join('');

    // Returns true if they match, or false if they don't
    return cleanedWord === reversedWord;
}

// 3. Main validator function is here
function validatePalindrome(inputWord) {
    // Step 1: Clean the input
    let cleaned = cleanData(inputWord);

    // Step 2: Test the cleaned input
    let isPalindrome = testPalindrome(cleaned);

    // Step 3: Return the result (true or false)
    return isPalindrome;
}

// 4. Main execution function is here
// I added the example input array here for reference
const inputList = [
    //***Removed for Jest testing*** "racecar", 
    //"hello", 
    //"Level", 
    //"I", 
    //"world", 
    //"mad am", 
    //"12321", 
    //"not a palindrome",
    //"Kayak",
    //"02/02/20/20",
    //"Andrew Ospina", 
    //"12/13/14/15",
    //"rotator" 
];

// This loops through every word in the list
// I used a 'for...of' loop 
for (let word of inputList) {
    // Check if the word is a palindrome using our main function
    if (validatePalindrome(word) === true) {
        // If true, it logs the ORIGINAL word (not the cleaned one) to the console
        // ***Removed for Jest testing*** console.log(word);
    }
}

module.exports = validatePalindrome;