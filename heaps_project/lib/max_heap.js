class MaxHeap {
  constructor(){
    this.array = [null];
  }

  insert(val){
    this.array.push(val);

    this.siftUp(this.array.length - 1);
  }

  getParent(idx){
    return Math.floor(idx / 2);
  }

  getLeftChild(idx){
    return idx * 2;
  }

  getRightChild(idx){
    return idx * 2 + 1;
  }

  siftUp(idx){
    if(idx === 1) return;
    let parentIdx = this.getParent(idx);
    let currentVal = this.array[idx];
    let parentVal = this.array[parentIdx];

    if(currentVal > parentVal){
      [this.array[parentIdx], this.array[idx]] = [currentVal, parentVal];
    }
    this.siftUp(parentIdx);
  }

  siftDown(idx){
    let leftChild = this.getLeftChild(idx);
    let rightChild = this.getRightChild(idx);
    let leftVal = this.array[leftChild];
    let rightVal = this.array[rightChild];
    let currentVal = this.array[idx];

    if(!leftVal) leftVal = -Infinity;
    if(!rightVal) rightVal = -Infinity;
    if(currentVal > leftVal && currentVal > rightVal) return;

    let swapIdx;
    if(leftVal > rightVal){
      swapIdx = leftChild;
    }else {
      swapIdx = rightChild;
    }
    [this.array[swapIdx], this.array[idx]] = [this.array[idx], this.array[swapIdx]];
    this.siftDown(swapIdx);
  }

  deleteMax(){
    if (this.array.length === 1) return null;
    if (this.array.length === 2) return this.array.pop();
    let removed = this.array[1];

    this.array[1] = this.array.pop();
    this.siftDown(1);
    return removed;
  }
}

module.exports = {
  MaxHeap
};