function radixSort(arr) {
  if(!Array.isArray(arr)) return null;
  let k = getMaxDigits(arr);
  let newBucket = arr.slice();
  for(let i = 0; i < k; i++){
    let buckets = new Array(10).fill().map(() => new Array());
    for(let num = 0; num < newBucket.length; num++){
      let digit = getDigitFrom(newBucket[num], i);
      buckets[digit].push(newBucket[num]);
    }
    newBucket = [].concat(...buckets);
  }
  return newBucket;
}

const getDigitFrom = (num, place) =>{
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

const getIntLength = num => {
  return num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
};

const getMaxDigits = nums => {
  let maxDigits = 0;
  for(let i = 0; i < nums.length; i++){
    maxDigits = Math.max(maxDigits, getIntLength(nums[i]));
  }
  return maxDigits;
};

module.exports = {
    radixSort
};