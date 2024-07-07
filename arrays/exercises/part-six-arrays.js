//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
element1 = ['hydrogen', 'H', 1.008]
element6 = ['carbon', 'C', 12.011]
element7 = ['nitrogen', 'N', 14.007]

element5 = ['boron', 'B', 10.811]
element14 = ['Silicon', 'Si', 28.086]
element32 = ['germanium', 'Ge', 72.640]

//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
reactiveNonmetals = []
reactiveNonmetals.push(element1, element6, element7);
console.log(reactiveNonmetals);

//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).
console.log(reactiveNonmetals[1]);
console.log(reactiveNonmetals[1][1]);

//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.
console.log(reactiveNonmetals[0][2], reactiveNonmetals[1][0], reactiveNonmetals[2][1]);

//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.
metalloids = []
metalloids.push(element5, element14, element32);

table = []
table.push(reactiveNonmetals, metalloids);
console.log(table[1][2][0]);