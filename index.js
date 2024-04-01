// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(driversArray) {
    return driversArray.slice(0, 2);
  };
  const returnLastTwoDrivers = function(driversArray) {
    return driversArray.slice(-2);
  };
  
  const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
  ];
  
  function createFareMultiplier(multiplier) {
    return function(value) {
      return value * multiplier;
    };
  }
  function createFareMultiplier(multiplier) {
    return function(value) {
      return value * multiplier;
    };
  }
  
  const fareDoubler = createFareMultiplier(2);


  function createFareMultiplier(multiplier) {
    return function(value) {
      return value * multiplier;
    };
  }
  
  const fareTripler = createFareMultiplier(3);


  function selectDifferentDrivers(arrayOfDrivers, selectFunction) {
    return selectFunction(arrayOfDrivers);
  }
  
  console.log(returnFirstTwoDrivers(drivers)); // Output: ['Antonia', 'Nuru']
  
  console.log(returnLastTwoDrivers(drivers)); // Output: ['Amari', 'Mo']
  