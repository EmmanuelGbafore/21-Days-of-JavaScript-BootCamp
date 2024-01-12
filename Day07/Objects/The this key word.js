// Using the this keyword in an object method
let Africa = {
    largestMountain: 'Mount Kilimanjaro',
    longestRiver: 'Nile River',
    largestLake: 'Lake Victoria',
    displayInfo: function() {
      console.log(`Largest Mountain: ${this.largestMountain}, Longest River:  ${this.longestRiver}, largestLake:  ${this.largestLake}`);
    }
  };
  
  Africa.displayInfo();