var genNumber = document.getElementById("genNumBtn");
var genNumberResult = document.getElementById("genNumberResult");
var genNumberList = document.getElementById("genNumberListBtn");
var numberListResult = document.getElementById("numberListResult");
var refreshList = document.getElementById("refreshListBtn");

refreshList.addEventListener("click", clear);
function clear() {
  randomFunctions.refreshList();
}

genNumberList.addEventListener("click", runList);
function runList() {
  var minimum = parseFloat(document.getElementById("min").value);
  var maximum = parseFloat(document.getElementById("max").value);
  var iterationInput = parseFloat(
    document.getElementById("iterationInput").value
  );
  console.log(iterationInput);
  randomFunctions.loopThroughGenerateNumber(iterationInput, minimum, maximum);
}

genNumber.addEventListener("click", run);
function run() {
  var minimum = parseFloat(document.getElementById("min").value);
  var maximum = parseFloat(document.getElementById("max").value);
  randomFunctions.generateNumber(minimum, maximum);
}

var randomFunctions = {
  numbers: [],
  generateNumber(n, x) {
    var range = x - n;
    var number = Math.round(Math.random() * range) + n;
    genNumberResult.innerHTML = number;
    return number;
  },
  loopThroughGenerateNumber(i, n, x) {
    for (var j = 0; j < i; j++) {
      var numToAdd = this.generateNumber(n, x);
      this.numbers.push(numToAdd);
    }
    numberListResult.innerHTML = this.numbers;
    return this.numbers;
  },
  refreshList() {
    numberListResult.innerHTML = "";
    this.numbers = [];
  }
};
