/**
 * Heap memory : Non Primitive data type 
 * stack memory : Primitive data type
 */


/**
 * In stack memory it create the copy and change in copy
 */
let userOne = "lily kachhap";

let userTwo = userOne;
userTwo="javascript";

console.log(userOne);
console.log(userTwo);

/**
 * In Heap memory it given an refrances
 */

let ObjOne = {
    'email':"test@gmail.com"
}

let ObjTwo = ObjOne;
ObjTwo.email="lily@gmail.com"

console.log(ObjOne);
console.log(ObjTwo);
