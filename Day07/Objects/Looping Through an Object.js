const continents = {
first: 'Asia',
second: 'Africa',
third: 'North America',
fourth: 'South America',
fifth: 'Europe',
sixth: 'Australia',
seventh: 'Antartica'
};
  for (let key in continents) {
    console.log(`${continents[key]}` + ' is one of the seven continents on Earth');
  }
  