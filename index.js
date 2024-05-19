let newDate = new Date();

let hours = newDate.getHours();
let minutes = newDate.getMinutes();
let seconds = newDate.getSeconds();

// Format the time with leading zeros if necessary
let formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

// console.log(formattedTime);


// let obj1 = {
//     name: 'John',
//     age: 30,
// }

// let obj2 = {
//     nam: 'Johny',
//     ag: 33,
// }

// let allobj = Object.keys({...obj1, ...obj2})

// let num1 = 2;
// let num2 = 3;
// function mysocre() {
//     return num1 + num2
// }

// let result = mysocre()

// let obj = {
//     name : "akshit",
//     age: 22,

//     myobj: function() {
//         console.log(`${this.name} object masa aaya hai`);
//     },
// }
// obj.myobj();

// (function chai(){
//     console.log("hello world");
// })()

((name) => {
    console.log(`hello ${name.ag1} arrow function`);
})({na1: "akshit", ag1:22})