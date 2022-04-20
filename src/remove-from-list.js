const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */


 class ListNode {
  constructor(x) {
    this.value = x||null;
    this.next = null;
  }
}

function addToLinkedList(list, number){
  if(!list){
    return new ListNode(number)
  }

  if(!list.value){
    list.value = number
    return list
  }
  list.next= addToLinkedList(list.next, number)
  return list
}


function removeKFromList(l, k) {
  return removeNode(l,k)

  function removeNode(node, value){
    if(!node){
      return node
    }
    if(node.value !== value){
      node.next = removeNode(node.next, value)
    }
    if(node.value === value){
      if(!node.next){
        return null
      }
      node = removeNode(node.next, value)
      

    }
    return node
  }

}

module.exports = {
  removeKFromList
};
