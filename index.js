let newDate = new Date();

let hours = newDate.getHours();
let minutes = newDate.getMinutes();
let seconds = newDate.getSeconds();

// Format the time with leading zeros if necessary
let formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

// console.log(formattedTime);


let obj1 = {
    name: 'John',
    age: 30,
}

let obj2 = {
    nam: 'Johny',
    ag: 33,
}

let allobj = Object.keys({...obj1, ...obj2})
