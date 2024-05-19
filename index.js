let newDate = new Date();

let hours = newDate.getHours();
let minutes = newDate.getMinutes();
let seconds = newDate.getSeconds();

// Format the time with leading zeros if necessary
let formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

console.log(formattedTime);
