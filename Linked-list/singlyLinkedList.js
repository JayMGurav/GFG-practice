class Node{
  constructor(elem){
    this.value = elem;
    this.next = null;
  }
  getValue(cb){
    return cb ? cb(this.value) : this.value;
  }
}


class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.size = 0;
  }

  // add a node to the end
  add(elem){
    const newNode = new Node(elem);
    if(!this.head){
      this.head = newNode;
    }else{
      let curr = this.head;
      while(curr.next){
        curr =  curr.next;
      }
      curr.next = newNode;
    }
    this.size+=1;
  }

  // insert node at given location (treated as index)
  insertAt(elem, location){
    if(location < 0 || location > this.size-1){
      throw new RangeError(`Given location ${location} is invalid`)
    }
    const newNode = new Node(elem);
    if(location==0){
      // insert at head
      newNode.next = this.head;
      this.head = newNode;
    }else{
      let curr = this.head, prev = null, index = 0;
      while (index < location) {
        prev = curr;
        curr = curr.next;
        index++;
      }
      newNode.next = curr; 
      prev.next = newNode;
    }
    this.size+=1;
  }


  // remove a node from end
  remove(){
    let curr = this.head;
    while(curr.next.next){
      curr = curr.next;
    }
    curr.next = null;
    this.size-=1;
    // return removed elem
    return curr;
  }

  // remove node from given location
  removeFrom(location){
    if(location < 0 || location > this.size-1){
      throw new RangeError(`Given location ${location} is invalid`);
    }
    let curr = this.head
    if(location == 0){
      // delete head
      this.head = this.head.next;
      curr.next = null;
    }else{
      let prev = null, index = 0;
      while(index < location){
        index++;
        prev = curr;
        curr = curr.next;
      }
      prev.next = curr.next;
      curr.next = null;
    }
    this.size-=1;

    // return removed elem
    return curr;
  }

  // removes the first matching elem
  removeElement(elem){
    let curr = this.head, prev = null;
    while(curr.next){
      if(curr.value == elem){
        prev.next = curr.next;
        curr.next = null;
        this.size-=1;
        return curr;
      }
      prev = curr;
      curr = curr.next;
    }
    throw new Error(`couldn't find ${elem} in list`);
  }


  // Helper funcitons
  isEmpty(){
    return this.size == 0;
  }

  length(){
    return this.size;
  }
    
  
  print() {
    let currNode = this.head,
      i = 0,
      outPutStr = 'Head';

    while (currNode) {
      outPutStr += ` -> {i:${i}, v:${currNode.getValue()}}`;
      i++;
      currNode = currNode.next;
    }

    console.log(outPutStr);
  }
    
}




(function main() {
  const singlyLinkedList = new SinglyLinkedList();
  singlyLinkedList.add(0);
  singlyLinkedList.add(1);
  singlyLinkedList.add(2);
  singlyLinkedList.add(3);
  singlyLinkedList.add(4);
  console.log(singlyLinkedList.length());

  singlyLinkedList.insertAt(2,2);
  singlyLinkedList.print();
  console.log(singlyLinkedList.length());

  // singlyLinkedList.remove()
  // singlyLinkedList.print();
  // console.log(singlyLinkedList.length());

  // singlyLinkedList.removeElement(3);
  // singlyLinkedList.print();
  // console.log(singlyLinkedList.length());
  
  // singlyLinkedList.removeFrom(0);
  // singlyLinkedList.print();
  // console.log(singlyLinkedList.length());
  
  // console.log(singlyLinkedList.isEmpty());

})()