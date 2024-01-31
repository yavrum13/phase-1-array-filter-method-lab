// Code your solution here
let driversArray = [
    { name: 'Bobby', age: 23 },
    { name: 'Steve', age: 58},
    { name: 'Lisa',age: 32,},
    { name: 'Barry', age: 32,}
]

const searchLowerCase = theString.toLowerCase();

findMatching();
function findMatching(drivers, theString) {
    const searchLowerCase = theString.toLowerCase();
    return drivers.filter(driver => {
      return driver.toLowerCase().indexOf(searchLowerCase) !== -1;
    });
}

fuzzyMatch();
function fuzzyMatch(drivers, theString){
    const searchLowerCase = theString.toLowerCase();
    return drivers.filter(driver => {
        const driverLowerCase = driver.toLowerCase();
        return driverLowerCase.toLowerCase().slice(0, 2) === searchLowerCase;
    })
}

matchName();
function matchName(drivers, theString) {
    const searchLowerCase = theString.toLowerCase();
    return drivers.filter(driver => {
      const driverLowerCase = driver.name.toLowerCase();
      return driverLowerCase.toLowerCase().indexOf(searchLowerCase) !== -1;
    });
}