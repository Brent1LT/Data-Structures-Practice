function merge(array1, array2) {
  let merged = [];
  while(array1.length || array2.length){
    let ele1 = array1.length ? array1[0] : Infinity;
    let ele2 = array2.length ? array2[0] : Infinity;

    let shifted;
    shifted = ele1 < ele2 ? array1.shift() : array2.shift();
    merged.push(shifted);
  }
  return merged;
}

function mergeSort(array) {
  if(array.length <= 1) return array;

  let middle = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, middle));
  let right = mergeSort(array.slice(middle, array.length));

  return merge(left, right);
}

module.exports = {
    merge,
    mergeSort
};