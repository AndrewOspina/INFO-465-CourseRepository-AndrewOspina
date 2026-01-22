// This defines the reading line area to allow user input and output
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

// This reads input (comma-separated integers)
readline.question("Enter integers separated by commas / enter q to quit): ", input => {
  if (input.toLowerCase() === "q") {
    console.log("Quit: Confirmed");
    readline.close(); 
    return;
  } 

  // This is the error handling section that only allows integers and "q" to quit
if (!/^[0-9, q]+$/.test(input)) {
  console.log("Error: Only numbers allowed, please re-enter integers.");
  readline.close();
  return;
  }

  // This is the array creation
  const arr = input.split(",").map(Number);

  // Mean is caluclated here
  const mean = arr.reduce((a, b) => a + b, 0) / arr.length;

  // Meadian is sorted and caluclated here 
  arr.sort((a, b) => a - b);
  const mid = Math.floor(arr.length / 2);
  const median = arr.length % 2 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;

  console.log("Here are the results: ")
  console.log("Mean:", mean);
  console.log("Median:", median);

  readline.close();
});

