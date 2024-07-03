//Part Three section one

let language = 'JavaScript';
let firstLetter = language[0];
let secondLetter = language[4];

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'

//2. Without using slice(), use method chaining to accomplish the same thing.
console.log(firstLetter + secondLetter);
//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for ${language} is ${firstLetter}${secondLetter}`);
//4. Just for fun, try chaining 3 or more methods together, and then print the result.

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
console.log(`${notTitleCase.replace("t","T").replace("c", "C")}`);
