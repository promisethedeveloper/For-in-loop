

const daughter = {
  firstName: 'Jane',
  secondName: 'Peters',
  age: '3 months',
}

// THE FOR.....IN LOOP WORKS FOR NON-ITERABLES LIKE OBJECT AND ALSO WORK ON ARRAYS, RETURING THE KEYS OF OBJECTS AND INDEX NUMBERS OF ARRAYS
for (const info in daughter) {
  console.log(info);
}

console.log("============");


let colors = ['red', 'teal', 'cyan', 'yellow'];

// Using the for..in loop returns the index numbers of the array
for(const color in colors) {
  console.log(color);
}

console.log("============");

// but you can also get the index numbers of iterables, apart from object literals, using the .entries() method on a for..of loop
for (const differentColorsIndex of colors.entries()) {
  console.log(differentColorsIndex[0]);
}