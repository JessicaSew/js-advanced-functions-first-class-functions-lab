// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const returnFirstTwoDrivers = function(drivers) {
    let array2 = [...drivers]
    return array2.splice(0,2);

}

const returnLastTwoDrivers = function(drivers) {
    let arr = [...drivers]
    return arr.slice(arr.length-2);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(fare) {
    return function mutliple (letter) {
        return fare * letter
}

};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers (drivers,firstTwo) {
    return firstTwo(drivers)
}
