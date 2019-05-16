function radixSort(arr) {
  
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