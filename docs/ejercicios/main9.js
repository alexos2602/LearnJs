function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

let miarray = [];

for (let i = 1; i <= 10; i++) {
    miarray.push(getRandomInt(1, 100));
    
}

console.log(miarray);