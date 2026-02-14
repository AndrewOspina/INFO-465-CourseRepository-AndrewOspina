// This imports the function we want to test from our main file
const { validatePalindrome } = require('./validatePalindrome');

// Test # 1: Non-Palindrome:
// I'll check that a standard word like "hello" returns false.
test('Check that the string "hello" is NOT identified as a palindrome', () => {
    const input = "hello";
    const result = validatePalindrome(input);
    
    // The result is expected to be false
    expect(result).toBe(false);
});

// Test #2: Simple Palindrome
// I'll check that a simple, lowercase palindrome like "racecar" returns true.
test('Check that the string "racecar" IS identified as a palindrome', () => {
    const input = "racecar";
    const result = validatePalindrome(input);
    
    // The result is expected to be true
    expect(result).toBe(true);
});

// Test #3: Complex Palindrome 
// I'll check that the logic correctly ignores spaces and capital letters.
// Ex. "Mad am" should become "madam" and return true.
test('Check that "Mad am" is identified as a palindrome (ignoring case and space)', () => {
    const input = "Mad am";
    const result = validatePalindrome(input);
    
    // The result is expected to be true
    expect(result).toBe(true);
});

// The results should hopefully be all 3 tests passing!