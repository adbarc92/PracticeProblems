// Given an inorder traversal plus a pre-order traversal (but no tree) return the post-order traversal.

class Node {
  // Properties:
  // value
  // right (default: null)
  // left (default: null)
  // Methods:
  // insert:
  // Call
  // delete
  // find
}

// The root can be found from the preorder traversal
// Everything preceeding the root value in an inorder traversal is in the left tree
// Then repeatedly cut the subtree array in half to find the subtree root value

// 1. Use the preorder traversal to find the root (remove from array)
// 2. Everything left of the root is part of that subtree
// 3. Then look for the next root in the preorder traversal
// 4. Repeat
// 5. Recursively call on left subtree
// 6. Recursively call on right subtree

const postOrder = (preorder, inorder) => {
  if (!inorder.length) {
    return;
  }

  const ret = [];

  const rootVal = preorder.shift();
  const left = postOrder(
    inorder.slice(0, inorder.indexOf(rootVal)),
    preorder
  );
  const right = postOrder(
    inorder.slice(inorder.indexOf(rootVal) + 1),
    preorder
  );

  if (left) {
    ret.concat(left);
  }

  if (right) {
    ret.concat(right);
  }

  ret.push(rootVal);

  return ret;
};

const postOrderTraversal = (rootNode) => {
  const ret = [];

  const postOrderRecurse = (currentNode) => {
    if (currentNode.left) postOrderRecurse(currentNode.left);
    if (currentNode.right) postOrderRecurse(currentNode.right);
    ret.push(currentNode);
  };

  postOrderTraversal(rootNode);

  return ret;
};
