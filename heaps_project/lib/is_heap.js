// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
  if(idx >= array.length - 1) return true;
  let leftIdx = idx * 2;
  let rightIdx = idx * 2 + 1;
  let right = array[rightIdx];
  let left = array[leftIdx];
  if(!right) right = -Infinity;

  if(left > array[idx] || right > array[idx]) return false;
  return isMaxHeap(array, idx + 1);
}


module.exports = {
    isMaxHeap
};