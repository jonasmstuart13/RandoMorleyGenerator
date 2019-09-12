randomFunctions = {
  this.numbers = [],
  this.min = 0,
  this.max = 0,
  generateNumber(min, max){
    var range = max-min
    var number = Math.round(Math.random()*range)+min
    return number
  },
  loopThroughGenerateNumber(n){
    for (var i = 0; i < n; i++){
      var numToAdd = this.generateNumber(min,max)
      this.numbers.push(numToAdd)
    }
  return this.numbers
  } 
},
