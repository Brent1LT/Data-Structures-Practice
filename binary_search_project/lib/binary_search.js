function binarySearch(array, target) {
  if(!array.length) return false;

  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle + 1);

  if(target < array[middle]){
    return binarySearch(left, target);
  }else if (target > array[middle]){
    return binarySearch(right, target);
  }else return true;
}

function binarySearchIndex(array, target) {
  if (!array.length) return -1;

  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle + 1);

  if (target < array[middle]){
    return binarySearchIndex(left, target);
  } else if (target > array[middle]){
    let rightResult = binarySearchIndex(right, target);
    if(rightResult === -1) return -1;
    return 1 + middle + rightResult;
  }else return middle;
}


module.exports = {
    binarySearch,
    binarySearchIndex
};