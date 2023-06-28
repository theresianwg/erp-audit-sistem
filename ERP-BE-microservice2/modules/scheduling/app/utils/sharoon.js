var date = new Date(); // Current date and time
var numericRepresentation = date.getTime();

console.log(numericRepresentation);
console.log(new Date(numericRepresentation));
var hours = 10; // Hours
var minutes = 0; // Minutes
var seconds = 0; // Seconds

// Convert hours, minutes, and seconds to seconds
var h = 50;
var totalSeconds = hours * 3600 + minutes * 60 + seconds + h * 3600;

// Calculate the hours, minutes, and seconds
// var hours = Math.floor(totalSeconds / 3600);
// var minutes = Math.floor((totalSeconds % 3600) / 60);
// var seconds = totalSeconds % 60;

// console.log(hours + 'h ' + minutes + 'm ' + seconds + 's');

// Calculate the days, hours, minutes, and seconds
var days = Math.floor(totalSeconds / 86400);
var hours = Math.floor((totalSeconds % 86400) / 3600);
var minutes = Math.floor((totalSeconds % 3600) / 60);
var seconds = totalSeconds % 60;

console.log(days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's');
var date = new Date();
console.log(date);
// Set the date components
date.setFullYear(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + days - 1,
);

// Set the time components
date.setHours(hours, minutes, seconds);

console.log(date);
var days = 7; // Days
var hours = 10; // Hours
var minutes = 30; // Minutes
var seconds = 15; // Seconds

// Create a new Date object
var date = new Date();

// Set the date components
date.setFullYear(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + days - 1,
);

// Set the time components
date.setHours(hours, minutes, seconds);

console.log(date);
