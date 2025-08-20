/*
An array is a data structure that can hold multiple values at once. 
These values can be of any type, including numbers, strings, objects, or even other arrays.
Arrays in JavaScript are zero-indexed, meaning the first element is at index 0.
*/

// Using square brackets
const fruits = ["Apple", "Banana", "Cherry", "Orange", "Grapes"];
console.log(fruits); // Example
let colors = ["red", "green", "blue", "grey", "yellow"];
// Practice: Create an array of 5 colors and print it.

// Accessing Array Elements:
console.log(fruits[0]); // First element
console.log(fruits[fruits.length - 1]); // Last element

// Practice: Print the second and fourth color from your array.

// Change Value in Array
fruits[1] = "Mango";
console.log(fruits); // "Banana" changed to "Mango"

// Practice: Change the third color in your array to "Purple" and print the array.

/*
Using for loop to print array with hard-coded condition 
it will create issue if condition is like i < 5
*/
for (let i = 0; i < 5; i++) {
  console.log(fruits[i]);
}

// Practice: Use a for loop to print all colors (assume length is 5).

/* 
To avoid hard-coded condition switch to array methods
*/
// We can use array length
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Practice: Use a for loop with array.length to print all colors.

/* More Array Methods */

console.log(`----------------Add element to array`);
fruits.push("Pineapple");
console.log(fruits);

// Practice: Add "Blue" to your colors array using push() and print the array.

// Remove element from array
fruits.pop();
console.log(fruits);

// Practice: Remove the last color from your array using pop() and print the array.

// Adds one or more elements to the beginning of an array
fruits.unshift("Strawberry");
console.log(fruits);

// Practice: Add "Black" to the beginning of your colors array using unshift().

// Removes the first element from an array
fruits.shift();
console.log(fruits);

// Practice: Remove the first color from your array using shift().

/* Anonymous Functions */
fruits.forEach(function(fruit) {
  console.log(fruit.toUpperCase());
});

// Practice: Use forEach to print each color in uppercase.
colors.forEach(function(color){console.log(color.toUpperCase())}) ;
/* Combining Arrays */
const vegetables = ["Carrot", "Broccoli"];
const food = fruits.concat(vegetables);
console.log(food);

// Practice: Combine your colors array with another array of 2 shapes.
colors.pop();
colors.shift();
colors=colors.concat(vegetables);
console.log(`pop shift---------------------------------`);
console.log(colors);
/* Finding an Element Index */
console.log(fruits.indexOf("Mango")); // Returns index or -1

// Practice: Find the index of "Purple" in your colors array.

/* Array with mixed data types */
const mixed = [42, "Hello", true];
console.log(mixed);

// Practice: Create an array with a number, a string, and a boolean. Print each element.

/* Array of Employee Objects */
const employees = [
  { name: "Alice", age: 28 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 32 }
];
employees.forEach(emp => console.log(emp.name));
console.log('Aray of object-------------------------------------------------');

// Practice: Create an array of 3 student objects (with name and grade). Print each student's name.
const student =[
    {name:'james', grade:34},
    {name: "jade", grade:31},
    {name:"cat", grade:12}
];
student.forEach(std=>console.log(std.name));
/* Filters */

// Practice: Use filter to get students with grade above 80.
const elderstd = student.filter(std => std.grade >= 30);
console.log(elderstd);
/* Map */

console.log('std   --Aray of object-------------------------------------------------');

// Practice: Use map to create an array of student grades.
const stdobj = student.map(std => std.name)
console.log(stdobj);
// ...existing code...