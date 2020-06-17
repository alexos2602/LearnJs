function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let miarray = [];

for (let i = 1; i <= 10; i++) {
    miarray.push(getRandomInt(1, 100));
    
}

    let miarray2 = miarray.slice(); 

    miarray2.push(5);

    console.log("array1");
    console.log(miarray);
    console.log("array2");
    console.log(miarray2);