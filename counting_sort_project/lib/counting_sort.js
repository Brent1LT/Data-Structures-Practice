function countingSort(arr, max) {
  let numbers = new Array(max + 1).fill(0);
  let result = [];
  for(let i = 0; i < arr.length; i++){
    numbers[arr[i]] += 1;
  }

  for(let j = 0; j <= numbers.length; j++){
    if(numbers[j]) {
      for(let times = 0; times < numbers[j]; times++){
        result.push(j);
      }
    } 
  }
  return result;
}


module.exports = {
    countingSort
};