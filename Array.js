// Array 

/**
 * 1. JavaScript arrays are resizable and can contain a mix of different data types.
 * 2.JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, 
 * but must be accessed using nonnegative integers (or their respective string form) as indexes.
 * 3.JavaScript array-copy operations create shallow copies. 
 * (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
 */

/**
 * 
 * Shallow Copy:

In a shallow copy, only the top-level structure of the original object is duplicated.
If the original object contains references to other objects (nested objects or arrays), only the references to those objects are copied, not the objects themselves.
As a result, changes made to the nested objects in the shallow copy will affect the original object, and vice versa.
Shallow copying is generally faster and less memory-intensive compared to deep copying because it does not create copies of nested objects.
Deep Copy:

In a deep copy, both the top-level structure and all nested structures of the original object are duplicated recursively.
Each nested object is duplicated, including all of its properties and nested objects, and so on, until the entire object tree is copied.
Changes made to the nested objects in the deep copy do not affect the original object, and vice versa, as they are completely independent.
Deep copying is more memory-intensive and may take longer to perform compared to shallow copying, especially for complex and deeply nested objects.
 */

let numberArr = [2,4,5,7,7,6,3,2];
let stringArr= ["apple","banana"];
let mixArry = ["apple",4.6,6,4,7];
var arr = [1, 2, 3];

/**
 * push(): Adds one or more elements to the end of an array and returns the new length of the array.
 */

arr.push(4, 5);
console.log(arr); // Output: [1, 2, 3, 4, 5]

//pop(): Removes the last element from an array and returns that element.
var lastElement = arr.pop();
console.log(lastElement); // Output: 3
console.log(arr); // Output: [1, 2]

//shift(): Removes the first element from an array and returns that element.
var firstElement = arr.shift();
console.log(firstElement); // Output: 1
console.log(arr); // Output: [2, 3]

//unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
arr.unshift(0, 1);
console.log(arr); 

/**
 * Methods push/pop run fast, while shift/unshift are slow.

It’s not enough to take and remove the element with the index 0. Other elements need to be renumbered as well.

The shift operation must do 3 things:
Remove the element with the index 0.
Move all elements to the left, renumber them from the index 1 to 0, from 2 to 1 and so on.
Update the length property.
 */


// Array other Method 
//includes(): Checks if an array includes a certain element, returning true if it does, and false otherwise.
console.log(arr.includes(2)); // Output: true
console.log(arr.includes(10));

//some(): Checks if at least one element in the array satisfies a condition specified by a callback function. Returns true if any element satisfies the condition, and false otherwise.

console.log(arr.some(element => element > 2)); // Output: true (at least one element is greater than 2)
console.log(arr.some(element => element > 13)); // Output: false (no element is greater than 3)

//every(): Checks if all elements in the array satisfy a condition specified by a callback function. Returns true if all elements satisfy the condition, and false otherwise.

console.log(arr.every(element=>element>0));

/**
 * Purpose:slice and splice
slice(): Creates a shallow copy of a portion of an array into a new array object.
splice(): Modifies the contents of an array by removing existing elements and/or adding new elements in place.
Return Value:
slice(): Returns a new array containing the selected elements. The original array remains unchanged.
splice(): Returns an array containing the removed elements, or an empty array if no elements were removed. The original array is modified.
 * 
 *   
*/

console.log("a",numberArr);//2, 4, 5, 7,7, 6, 3, 2
console.log(numberArr.splice(1,4));//4, 5, 7, 7 return sub pices of array

console.log("b",numberArr);//2, 4, 5, 7,7, 6, 3, 2
console.log(numberArr.splice(1,4));//6,3,2
console.log("c",numberArr);



