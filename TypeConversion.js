//string conversion

let isFlag =true;

console.log(typeof +'10'); //type of :number
console.log(typeof '20'+'')//type of :string
console.log(10 + '20');//1020
console.log( typeof ('20'-10));//10 but type number
console.log(+'hello');//NaN
console.log(parseInt('hello'));//NaN
console.log(parseInt('10ghjj'));//10
console.log(parseInt('10.5'))//10
console.log(parseFloat('10.5'))//10.5
console.log(Number('0x10'));//15 
console.log(Number('0b10'));//2
console.log(Number('0o10'));//8
console.log(Boolean('false'));//true
console.log(Boolean('true'));//true
console.log(Boolean('1'));//true add any number its show true
console.log(Boolean(''));
console.log(Boolean([]));//true
console.log(Boolean({'false':false}))//true
console.log(Boolean(null));
console.log(Boolean(undefined));