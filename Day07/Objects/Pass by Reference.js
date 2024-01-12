const country = { name:'Tanzania', age: 60, capital: 'Nairobi'};
console.log(country);            // To see our original output before the pass by reference

actualCountry = country;
actualCountry.name = 'Kenya';    // Change the country name from Tanzania to Kenya using pass by reference

console.log(country);            // Should print { Kenya , 60, Nairobi}
console.log(country.name);      // Should print Kenya