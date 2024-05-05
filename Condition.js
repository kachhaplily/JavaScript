// if else 

var x = 10;
if (x > 10) {
    console.log("x is greater than 10");
} else if (x < 10) {
    console.log("x is less than 10");
} else {
    console.log("x is equal to 10");
}

// switch case 

switch (x) {
    case 10:
        console.log("x is equal to 10");
        break;
    case 20:
        console.log("x is equal to 20");
        break;
    default:
        console.log("x is neither 10 nor 20");
}

//ternary 
var result = (x > 10 && x < 20) ? "x is between 10 and 20" : "x is not between 10 and 20";
console.log(result);

//
if (x > 5 && x < 15) {
    console.log("x is between 5 and 15");
} else if (x > 15 || x < 5) {
    console.log("x is not between 5 and 15");
} else {
    console.log("x is exactly 5 or 15");
}