// reduce function
// reduce(callbackFn, initialValue)
// myReduce(array, callback, initialVal)
function myReduce(array, callback, initialVal) {
  let result = initialVal;
  let startingIdx = 0;
  if (initialVal == undefined) {
    startingIdx = 1;
    result = array[0];
  }
  for (let i = startingIdx; i < array.length; i++) {
    result = callback(result, array[i]);
  }
  return result;
}

const arrayOne = [1, 2, 3];

const callbackOne = (accumulator, currentVal) => {
  return accumulator + currentVal;
};

console.log(myReduce(arrayOne, callbackOne, 15));

const arrayTwo = ["h", "e", "l", "l", "o"];

const callbackTwo = (acc, cur) => {
  return acc + cur;
};

console.log(myReduce(arrayTwo, callbackTwo, 'world'));
