/*eslint-disable*/

/*
 *
 * Linked List Intersection
 *
 * Write a function linkedListIntersection that returns the node
 * at which the intersection of two linked lists begins,
 * or null if there is no such intersection.
 *
 * Example:
 *
 * Given the following two linked lists list1 and list2,
 * linkedListIntersection(list1,list2) should return D
 * as the node of intersection.
 *
 *    A → B → C
 *             ↘
 *               D → E → F
 *             ↗
 *        X → Y
 *
 * Given the following two linked lists list1 and list2,
 * linkedListIntersection(list1,list2) should return NULL
 * as there is no point of intersection.
 *
 *    A → B → C → D
 *    X → Y → Z
 *
 */

// Helper function (do not edit)
function Node(val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}

const LinkedList = function () {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addNodeToList = function (val) {
  const newNode = Node(val);

  if (!this.head) {
    this.head = this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

function linkedListIntersection(list1, list2) {
  let list1Node = list1;
  let list2Node = list2;

  if (!list1Node || !list2Node) {
    return null;
  }

  const intersection = [];

  while (list1Node) {
    while (list2Node) {
      if (list1Node.value === list2Node.value) {
        intersection.push(list1Node.value);
      }
      list2Node = list2Node.next;
    }
    list1Node = list1Node.next;
    list2Node = list2;
  }
  return intersection.length ? intersection.join('') : null;
}

var list1 = Node('A');
var nodeB = (list1.next = Node('B'));
var nodeC = (nodeB.next = Node('C'));
var nodeD = (nodeC.next = Node('D'));
var nodeE = (nodeD.next = Node('E'));
var nodeF = (nodeE.next = Node('F'));
var list2 = Node('X');
var nodeY = (list2.next = Node('Y'));
var nodeZ = (nodeY.next = Node('Z'));
nodeZ.next = nodeD;
var expected = 'DEF';
const result = linkedListIntersection(list1, list2);

try {
  module.exports = { Node, LinkedList, linkedListIntersection };
} catch (err) {
  console.error(err);
}
