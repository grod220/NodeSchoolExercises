// Baby Steps
function nodeAdder (array) {
  var total = 0;
  for (var i = 2; i < array.length; i++) {
    total += +array[i];
  }
  return total;
}
console.log(nodeAdder(process.argv));
