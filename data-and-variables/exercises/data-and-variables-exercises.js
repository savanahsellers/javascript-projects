// Declare and assign the variables below
let name = "Determination";
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400;
const milesPerkm = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
// console.log(typeof(name));
// console.log(typeof(shuttleSpeedMph));
// console.log(typeof(distanceToMarsKm));
// console.log(typeof(distanceToMoonKm));
// console.log(typeof(milesPerkm));

// Calculate a space mission below
let milesToMarsKm = distanceToMarsKm * milesPerkm;
let hoursToMars = milesToMarsKm / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below
console.log(name + " will take " + daysToMars + " days to reach Mars.");

// Calculate a trip to the moon below
let milesToMoonKm = distanceToMoonKm * milesPerkm;
let hoursToMoon = milesToMoonKm / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;

// Print the results of the trip to the moon below
console.log(name + " will take " + daysToMoon + " days to reach the moon.");