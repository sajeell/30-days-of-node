const weekdays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

// Array Pop Method <- Removes the last element
weekdays.pop();

// Array Push Method <- Adds an element in the last
weekdays.push('Saturday');

// Array Unshift Method <- Adds an element in beginning
weekdays.unshift('Sunday');

// Array Shift Method <- Removes an element from the beginnning
weekdays.shift('Sunday');

// Array Reverse Method <- Reverses the array
weekdays.reverse();

// Array Sort Method <- Sorts the array
weekdays.sort();

// Splice Method <- Adds element in the array
weekdays.splice(2, 2, 'Wednesday', 'Thursday');

// Splice Method <- Removes element in the array
weekdays.splice(2, 2);

// Concat Method <- Joins the array. Second array after the first array
weekdays.concat(['Wednesday', 'Thursday']);

// IndexOf Method <- Returns the index of the existing element, otherwise -1 if no matching element found
weekdays.indexOf('Monday'); // Returns the index of Monday
weekdays.indexOf('January'); // Returns -1, as there is no January element

// LastIndexOf Method <- Returns the last index of the element
const duplicatedElementsArray = [1, 2, 3, 4, 5, 5, 1, 5];
duplicatedElementsArray.lastIndexOf(5); // Returns 7 as the index of the last 5 is 7

// Join Method <- Joins the elements into a string, and returns a single string
console.log(weekdays.join()); // Default seperator is ,
console.log(weekdays.join(':')); // Now : is the seperator

// Slice Method <- Extracts a section of the array, and returns a new array
console.log(weekdays.slice(0, 1)); // Returns first element
console.log(weekdays.slice(-2, -1)); // Starts from the last

// Every Method <- Checks whether a provided condition is fulfilled by all the elements or not
function checkType(value) {
  return typeof value === 'string';
}

console.log(weekdays.every(checkType));

// Reduce method

function multiply(value, total) {
  return value * total;
}
console.log(duplicatedElementsArray.reduce(multiply));

