class MaxHeap {
	constructor(array=[null]){
    this.array = array;
	}

	getParent(idx) {
		return Math.floor(idx / 2);
	}

  getLeftChild(idx){
    return idx * 2;
  }

  getRightChild(idx){
    return (idx * 2) + 1;
  }

  siftUp(idx){
		if (idx === 1) return;
    let check = this.array[idx];
		let parent = this.array[Math.floor(idx / 2)];
		if (check > parent) {
			[this.array[idx], this.array[Math.floor(idx / 2)]] = [parent, check];
			this.siftUp(Math.floor(idx / 2));
		}
  }

  insert(val){
    this.array.push(val);
    this.siftUp(this.array.length -1);
  }

  swap(firstIdx, secondIdx){
    [this.array[firstIdx], this.array[secondIdx]] =
    [this.array[secondIdx], this.array[firstIdx]];
  }

  siftDown(idx){
    if(this.array[Math.floor(idx * 2)] === undefined) return;
    let parent = this.array[idx];
    let leftChild = this.array[Math.floor(idx * 2)];
    let rightChild = this.array[Math.floor((idx * 2) + 1)];
    if(leftChild > parent && rightChild > parent){
      if(rightChild > leftChild){
        this.swap(Math.floor((idx*2) + 1), idx);
        this.siftDown(Math.floor((idx*2)+1));
      }else{
        this.swap(Math.floor(idx * 2), idx);
        this.siftDown(Math.floor(idx * 2));
      }
    }else if(rightChild > parent){
      this.swap(Math.floor((idx * 2) + 1), idx);
      this.siftDown(Math.floor((idx * 2) + 1));
    }else if(leftChild > parent){
      this.swap(Math.floor(idx * 2), idx);
      this.siftDown(Math.floor(idx * 2));
    }
  }
  
  deleteMax(){
    if(this.array.length === 2){
      return this.array.pop(); 
    }else if(this.array.length === 1){
      return null;
    }

    let temp = this.array[1];
    this.array.splice(0,2);
    this.array = [null, this.array.pop()].concat(this.array);
    this.siftDown(1);
    return temp;
  }
}

module.exports = {
    MaxHeap
};