// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];
const surprise = "surprise";

function writeCards(names) {
    let newArray = []
  for (let i = 0; i < names.length; i++) {
     newArray.push (`Thank you, ${names[i]}, for the wonderful ${surprise} gift!`);
  }

  return newArray;
}

function countDown() {
    let numbers = 10;
    while (numbers >= 0) {
    console.log(numbers--);
}
}