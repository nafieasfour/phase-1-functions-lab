// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    if (someValue > 42) {
        return someValue - 42;
    }
    else if (someValue < 42) {
        return 42 - someValue;
    }
    else {
        return 1
    }
  }

  function distanceFromHqInFeet(someValue) {
    let block = distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    return block * 264
  }


  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if (start == destination) {
        return 264;
    }
    else if (start > destination) {
        return (start - destination) * 264;
    }
    else if (start < destination) {
        return (destination - start) * 264;
    }
    else {
        return 264;
    }
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let dis = start > destination ? start - destination: destination - start;
    let Feet_dis = dis * 264;
    if (Feet_dis <= 400) {
        return 0;
    }
    else if (Feet_dis < 2000 && Feet_dis > 400) {
        let d = Feet_dis - 400;
        let fare = (d * 2) / 100;
        return fare;
    }
    else if (Feet_dis < 2500 && Feet_dis > 2000) {
        return 25;
    }
    else {
        return `cannot travel that far`;
    }
  }
