const input = require('readline-sync');
let str = "LaunchCode";
let question = "How many letters would you like to cut off? ";
let userInput = "";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newWord = str.slice(3) + str.slice(0, 3);
console.log(newWord);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`
    ${str}
    ${newWord}
`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
console.log(userInput);
userInput = input.question(question);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (userInput > str.length) {
    console.log(`Oops...not enough letters in ${str}...`); 
    console.log(`Since you entered an amount longer than the string length, we will default to 3 characters: ${newWord}`)
} else {
    let finalCut = str.slice(userInput) + str.slice(0, userInput); 
    console.log(finalCut);
}
