// Map method will map a change across the array
let numbers = [3, 6, 9, 12];

numbers = numbers.map(number => {
  return number / 3;
});

console.log(numbers);  // Will divide each of the numbers by 3
