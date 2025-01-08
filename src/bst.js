
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    static buildTree(array, start = 0, end = array.length - 1) {
        if (start > end) return null;

        let middle = Math.round((start + end) / 2);

        let root = new Node(array[middle]);
        root.left = this.buildTree(array, start, middle - 1);
        root.right = this.buildTree(array, middle + 1, end);
        
        return root;
    }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

let arrayTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
prettyPrint(Tree.buildTree(arrayTest));

export { Node, Tree }