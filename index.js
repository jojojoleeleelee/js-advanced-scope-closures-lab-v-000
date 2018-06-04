function produceDrivingRange(blocks) {
  return function(start, end){
    let beginning = parseInt(start)
    let ending = parseInt(end)
    let distanceTravelled = Math.abs(beginning - ending)
    let difference = blocks - distanceTravelled

    if (difference > 0) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(fareFee) {
  return function(tip) {
    return tip * fareFee
  }
}

function createDriver(name) {
  let driverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}
