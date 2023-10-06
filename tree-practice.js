const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');

function findMinBST (rootNode) {

  // if(!rootNode.left) {
  //   return rootNode.val
  // } else {
  //   return findMinBST(rootNode.left)
  // }

  if(!rootNode) return;
  while(rootNode.left) {
    rootNode = rootNode.left
  }
  return rootNode.val
}

function findMaxBST (rootNode) {
  // if(!rootNode.right) {
  //   return rootNode.val
  // } else {
  //   return findMaxBST(rootNode.right)
  // }

  if(!rootNode) return;
  while(rootNode.right) {
    rootNode = rootNode.right
  }
  return rootNode.val
}

function findMinBT (rootNode) {
  if(!rootNode) return null

  let minNodeVal = rootNode.val
  let leftMin = findMinBT(rootNode.left)
  let rightMin = findMinBT(rootNode.right)

  if(leftMin && leftMin < minNodeVal) {
    minNodeVal = leftMin
  }

  if(rightMin && rightMin < minNodeVal) {
  minNodeVal = rightMin
  }

  return minNodeVal
}

function findMaxBT (rootNode) {
  if(!rootNode) return;

  let maxNodeVal = rootNode.val
  let leftMax = findMaxBT(rootNode.left)
  let rightMax = findMaxBT(rootNode.right)

  if(leftMax && leftMax > maxNodeVal) {
    maxNodeVal = leftMax
  }

  if(rightMax && rightMax > maxNodeVal) {
    maxNodeVal = rightMax
  }
  return maxNodeVal
}

function getHeight (rootNode) {
  if(!rootNode) return -1
  if(!rootNode.left && !rootNode.right) return 0

  let leftHeight = getHeight(rootNode.left)
  let rightHeight = getHeight(rootNode.right)
  // console.log(leftHeight)
  // console.log(rightHeight)

  return Math.max(leftHeight, rightHeight) + 1
}

function balancedTree (rootNode) {
  if(!rootNode) return true
  if(!rootNode.left && !rootNode.right) return true

  let leftHeight = getHeight(rootNode.left)
  let rightHeight = getHeight(rootNode.right)
  let difference = leftHeight - rightHeight

  console.log(difference)

  if(difference > 1) return false
  if(difference < -1) return false

    let leftBalance =  balancedTree(rootNode.left)
    let rightBalance = balancedTree(rootNode.right);

  return rightBalance && leftBalance
}

function countNodes (rootNode) {
  // Your code here
}

function getParentNode (rootNode, target) {
  // Your code here
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
