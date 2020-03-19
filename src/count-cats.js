module.exports = function countCats(backyard) {
  var oneDimensionalArray = [];
  for(var i = 0; i < backyard.length; i++)
  {
    oneDimensionalArray = oneDimensionalArray.concat(backyard[i]);
  }
  return oneDimensionalArray.filter(item => item == '^^').length;
}
