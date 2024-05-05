let todayDate = new Date();

console.log(todayDate); //2024-05-05T15:29:03.372Z
console.log(todayDate.toString()); //Sun May 05 2024 20:59:03 GMT+0530 (India Standard Time)
console.log(todayDate.toISOString()); //2024-05-05T15:29:47.341Z
console.log(todayDate.toJSON()); //2024-05-05T15:30:25.359Z
console.log(todayDate.toLocaleDateString()); //5/5/2024
console.log(todayDate.toLocaleString()); //5/5/2024, 9:01:28 pm
console.log(todayDate.toTimeString()); //21:08:27 GMT+0530 (India Standard Time)
console.log(todayDate.toUTCString()); //Sun, 05 May 2024 15:38:59 GMT
console.log(todayDate.getTimezoneOffset()); //-330
/**
 * This method returns the time-zone offset from UTC in minutes for the current locale. 
 * The offset is positive if the local timezone is behind UTC and negative if it is ahead
 */
console.log(todayDate.getDate());//5
console.log(todayDate.getDay());//0
console.log(todayDate.getFullYear());
console.log(todayDate.getMilliseconds());
console.log(todayDate.getTime());
let newDate = new Date(todayDate.getTime()); //conver milisecond to currentd date
console.log(newDate);
console.log(Date.now());//milisecond