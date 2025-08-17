// Loops
/* 
In programming, loops are used to execute a block of code repeatedly until
a specific condition is met or for a specified number of times.
They provide a way to perform repetitive tasks efficiently without writing
the same code multiple times.
*/

/* 
Types of Loops
1. For Loop
2. While Loop
3. Do While Loop
 */

// For Loop Example
console.log(`The Iteration no is`)
for (let i=0; i<5; i++ ){
  console.log(i)
}
//Looping Backwards
// s

//Nested Loop
// console.log(`The Iteration of Nested Loop no is`)
// for(j=0;j<=5;j++){
//     for (let i=1; i<=5; i++ ){
//     console.log(i)
//     }
// }
// While Loop Example

// Do While Loop Example
i=0;
do{
    console.log(i);
    i++;
} while (i<5)

// ...existing code...

// For Loop Example
for (let i = 0; i < 5; i++) {
  console.log("For Loop:", i);
}

// Looping Backwards
for (let i = 5; i > 0; i--) {
  console.log("Looping Backwards:", i);
}

// Nested Loop
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`Nested Loop: i=${i}, j=${j}`);
  }
}

// While Loop Example
let count = 0;
while (count < 3) {
  console.log("While Loop:", count);
  count++;
}

// Do While Loop Example
let num = 0;
do {
  console.log("Do While Loop:", num);
  num++;
} while (num < 2);

// pyramid simple 1 2 3
 
function numpyramid(row){
  console.log('simple numpyramid');
  let res='';
  for(let i=1;i<=row>;i++)
  {
    for(let j=i;j<=i;j--){
      res+=j+' ';
    }
    console.log(res);
  }
}





let row = 5;
  console.log('simple numpyramid');
  let res='';
  for(let i=0;i<row;i++)
  {
    for(let j=0;j<row-i-1;j++){
      res+=' ';
    }
    
    for (let k = 0; k < 2 * i + 1; k++) {
     res += '*';
      }
    console.log(res);
    res=''
  }

  console.log('simple numpyramid');
   res='';
  for(let i=row;i>=1;i--)
  {
    for(let j=i;j>=1;j--){
      res+=j+' ';
    }
    console.log(res);
    res=''
  } 






// function printPyramid(rows) {
//   for (let i = 0; i < rows; i++) {
//     let rowContent = '';

//     // Add spaces for alignment
//     for (let j = 0; j < rows - i - 1; j++) {
//       rowContent += ' ';
//     }

//     // Add stars for the current row
//     for (let k = 0; k < 2 * i + 1; k++) {
//       rowContent += '*';
//     }



//numpyramid(5);
//printPyramid(5);
// ...existing code...