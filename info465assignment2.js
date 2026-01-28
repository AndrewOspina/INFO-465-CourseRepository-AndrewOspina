// This defines the reading line area to allow user input and output
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout 
}); 

// This reads input (comma-separated integers)
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
  
  console.log("Here are your integers: ", input);

let found = false;

const arr = input.split(",").map(Number);

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