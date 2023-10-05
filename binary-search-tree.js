// Do not change this
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {

    constructor() {
      this.root = null
    }

    insert(val, currentNode=this.root, newNode = new TreeNode(val) ) {
      if(!this.root){
        this.root = newNode
      return;
      } else {
        if(newNode.val < currentNode.val){
          if(!currentNode.left) {
            currentNode.left = newNode
          } else {
            this.insert(val, currentNode.left, newNode)
          }
          } else {
            if(newNode.val > currentNode.val) {
              if(!currentNode.right) {
                currentNode.right = newNode
              } else {
                this.insert(val, currentNode.right, newNode)
              }
            }
          }
        }
      }

    search(val) {
      let currNode = this.root

      while(currNode) {
        if(currNode.val === val) return true;

        if (val < currNode.val) {
          currNode = currNode.left
        } else if(val > currNode.val) {
          currNode = currNode.right
        }
      }
      return false
      }

    preOrderTraversal(currentNode = this.root) {
      if(currentNode) {
        console.log(currentNode.val)
        this.preOrderTraversal(currentNode.left)
        this.preOrderTraversal(currentNode.right)
      }
    }

    inOrderTraversal(currentNode = this.root) {
      if(currentNode) {
        this.inOrderTraversal(currentNode.left)
        console.log(currentNode.val)
        this.inOrderTraversal(currentNode.right)
      }
    }

    postOrderTraversal(currentNode = this.root) {
      if(currentNode) {
        this.postOrderTraversal(currentNode.left)
        this.postOrderTraversal(currentNode.right)
        console.log(currentNode.val)

      }
    }

      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
     let queue = [this.root]

     while(queue.length) {
      let currentNode = queue.shift()
      console.log(currentNode.val)
      if(currentNode.left) {
        queue.push(currentNode.left)
      }
      if(currentNode.right) {
        queue.push(currentNode.right)
      }
     }
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      let stack = [this.root]

      while(stack.length) {
        let currentNode = stack.pop()
        console.log(currentNode.val)

        if(currentNode.left) {
          stack.push(currentNode.left)
        }
        if(currentNode.right) {
          stack.push(currentNode.right)
        }
      }
    }
  }

  module.exports = { BinarySearchTree, TreeNode };
