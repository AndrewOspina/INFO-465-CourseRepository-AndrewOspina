// This defines the reading line area to allow user input and output
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout 
}); 

// This reads input (comma-separated integers), along with quitting the script when a user enters "q"
readline.question("Enter integers separated by commas, or enter q to quit/finish: ): ", input => {
if (input.toLowerCase() === "q") {
    console.log("Quit Confirmed");
    readline.close(); 
    return;
  } 
// This is the error handling section that only allows integers
if (!/^[0-9, q]+$/.test(input)) {
  console.log("Error: Only numbers allowed, please re-enter integers.");
  readline.close();
  return;
  }
 
// Here is where the user's integers are echoed back in the output
console.log("Here are your integers: ", input);

// Array is defined here for the entered integers
const arr = input.split(",").map(Number);

// Theses statements help determine if the product of any two of the entered integers is equal to a third integer
// It also provides a different output result if a corresponding product is found vs. if it is not found, and displays which pairs combine to equal a third integer
let found = false;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    for (let k = 0; k < arr.length; k++) {
      if (arr[i] * arr[j] === arr[k]) {
        console.log(`${arr[i]} * ${arr[j]} = ${arr[k]}`);
        found = true;
      }
    }
  }
}
if (found) console.log("Condition is met: ", found)
if (!found) console.log("Condition was not met.")

  readline.close();
});