// Define a seeded random number generator function
const seededRandom = function (seed) {
  // Define constants for the random number generator
  var m = 2 ** 35 - 31; // A large prime number
  var a = 185852; // Multiplier constant
  var s = seed % m; // Initialize the seed value within the range
  return function () {
    // Generate a pseudo-random number and update the seed
    return (s = (s * a) % m) / m;
  };
};

// Function to fetch available booking times for a given date
export function fetchAPI(date) {
  let result = []; // Initialize an array to store available times
  let dt = new Date(date); // Convert the input date to a JavaScript Date object
  let seed = dt.getDate(); // Extract the day of the month from the date as a seed value

  let random = seededRandom(seed); // Initialize a seeded random number generator

  // Iterate through the hours from 17 (5:00 PM) to 23 (11:00 PM)
  for (let i = 17; i <= 23; i++) {
    // Check if a randomly generated number is less than 0.5
    if (random() < 0.5) {
      // If true, add the hour followed by ":00" to the result array
      result.push(i + ":00");
    }

    // Check if another randomly generated number is less than 0.5
    if (random() < 0.5) {
      // If true, add the hour followed by ":30" to the result array
      result.push(i + ":30");
    }
  }

  return result; // Return the array of available booking times
}

// Function to submit booking data (simplified for demonstration)
export function submitAPI(formData) {
  return true; // In this simplified example, always return true to indicate a successful submission
}
