 
 var Node= require('./node');

 
 function HelperBinarySearchTree() {
  this.root = null;
}



HelperBinarySearchTree.prototype.add = function(data) {
  var node = new Node(data);
  if(!this.root) {
    this.root = node;
  } else {
    var current = this.root;
    while(current) {
      if(node.data < current.data) {
        if(!current.left) {
          current.left = node;
          break;
        }
        current = current.left;
      } else if (node.data > current.data) {
        if(!current.right) {
          current.right = node;
          break;
        }
        current = current.right;
      } else {
        break;
      }
    }
  }
};

HelperBinarySearchTree.prototype.remove = function(data) {
  var that = this;
  var removeNode = function(node, data) {
    if(!node) {
      return null;
    }
    if(data === node.data) {
      if(!node.left && !node.right) {
        return null;
      }
      if(!node.left) {
        return node.right;
      }
      if(!node.right) {
        return node.left;
      }
      // 2 children
      var temp = that.getMin(node.right);
      node.data = temp;
      node.right = removeNode(node.right, temp);
      return node;
    } else if(data < node.data) {
      node.left = removeNode(node.left, data);
      return node;
    } else {
      node.right = removeNode(node.right, data);
      return node;
    }
  };
  this.root = removeNode(this.root, data);
};
HelperBinarySearchTree.prototype.contains = function(data) {
  var current = this.root;
  while(current) {
    if(data === current.data) {
      return true;
    }
    if(data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  return false;
};
HelperBinarySearchTree.prototype._preOrder = function(node, outputarry) {
  if(node) {
    // if(fn) {
    //   fn(node);
    // }
//console.log("data = "+node.data);
  
    outputarry.push(node.data);
    this._preOrder(node.left, outputarry);
    this._preOrder(node.right, outputarry);
  }
  
     // console.log(outputarry);
      return outputarry;
  
};
HelperBinarySearchTree.prototype._inOrder = function(node, outputarry) {
  if(node) {
    this._inOrder(node.left, fn);
    if(fn) {
      fn(node);
    }
    this._inOrder(node.right, fn);
  }
};
HelperBinarySearchTree.prototype._postOrder = function(node, outputarry) {
  if(node) {
    this._postOrder(node.left, outputarry);
    this._postOrder(node.right, outputarry);
    // if(fn) {
    //   return outputarry.pu
    // }
    outputarry.push(node);
  }
  else return outputarry;
};

HelperBinarySearchTree.prototype.traverseDFS = function(method) {
  var current = this.root;
  var outputarry=[];
  if(method) {
    return this['_' + method](current, outputarry);
  } else {
    
    return this._preOrder(current, outputarry);
  }
};

HelperBinarySearchTree.prototype.traverseBFS = function(outputarry) {
  
   if (!this.root)
      return [];

  this.queue = [];
  this.queue.push(this.root);
  while(this.queue.length) {
    var node = this.queue.shift();
    // if(fn) {
    //   fn(node);
    // }
    outputarry.push(node.data);

    if(node.left) {
      this.queue.push(node.left);
    }
    if(node.right) {
      this.queue.push(node.right);
    }
  }
  return outputarry;
};
HelperBinarySearchTree.prototype.print = function() {
  if(!this.root) {
    return console.log('No root node found');
  }
  var newline = new Node('|');
  var queue = [this.root, newline];
  var string = '';
  while(queue.length) {
    var node = queue.shift();
    string += node.data.toString() + ' ';
    if(node === newline && queue.length) {
      queue.push(newline);
    }
    if(node.left) {
      queue.push(node.left);
    }
    if(node.right) {
      queue.push(node.right);
    }
  }
  console.log(string.slice(0, -2).trim());
};
HelperBinarySearchTree.prototype.printByLevel = function() {
  if(!this.root) {
    return console.log('No root node found');
  }
  var newline = new Node('\n');
  var queue = [this.root, newline];
  var string = '';
  while(queue.length) {
    var node = queue.shift();
    string += node.data.toString() + (node.data !== '\n' ? ' ' : '');
    if(node === newline && queue.length) {
      queue.push(newline);
    }
    if(node.left) {
      queue.push(node.left);
    }
    if(node.right) {
      queue.push(node.right);
    }
  }
  console.log(string.trim());
};
HelperBinarySearchTree.prototype.getMin = function(node) {
  if(!node) {
    node = this.root;
  }
  while(node.left) {
    node = node.left;
  }
  return node.data;
};
HelperBinarySearchTree.prototype.getMax = function(node) {
  if(!node) {
    node = this.root;
  }
  while(node.right) {
    node = node.right;
  }
  return node.data;
};
HelperBinarySearchTree.prototype._getHeight = function(node) {
  if(!node) {
    return -1;
  }
  var left = this._getHeight(node.left);
  var right = this._getHeight(node.right);
  return Math.max(left, right) + 1;
};
HelperBinarySearchTree.prototype.getHeight = function(node) {
  if(!node) {
    node = this.root;
  }
  return this._getHeight(node);
};
HelperBinarySearchTree.prototype._isBalanced = function(node) {
  if(!node) {
    return true;
  }
  var heigthLeft = this._getHeight(node.left);
  var heigthRight = this._getHeight(node.right);
  var diff = Math.abs(heigthLeft - heigthRight);
  if(diff > 1) {
    return false;
  } else {
    return this._isBalanced(node.left) && this._isBalanced(node.right);
  }
};
HelperBinarySearchTree.prototype.isBalanced = function(node) {
  if(!node) {
    node = this.root;
  }
  return this._isBalanced(node);
};
HelperBinarySearchTree.prototype._checkHeight = function(node) {
  if(!node) {
    return 0;
  }
  var left = this._checkHeight(node.left);
  if(left === -1) {
    return -1;
  }
  var right = this._checkHeight(node.right);
  if(right === -1) {
    return -1;
  }
  var diff = Math.abs(left - right);
  if(diff > 1) {
    return -1;
  } else {
    return Math.max(left, right) + 1;
  }
};
HelperBinarySearchTree.prototype.isBalancedOptimized = function(node) {
  if(!node) {
    node = this.root;
  }
  if(!node) {
    return true;
  }
  if(this._checkHeight(node) === -1) {
    return false;
  } else {
    return true;
  }
};


HelperBinarySearchTree.prototype.zigZag = function() {
  if(!this.root) {
    return [];
  }
  var newline = new Node('|');
  var queue = [this.root, newline];
  var string = [];
  var height=0;
  var temp=[];
  while(queue.length) {
      
    var node = queue.shift();
   temp.push(node.data);
   if(node === newline) {
        
           if(height==0 || (height %2 !==0)){
             
               for(let i=0; i<temp.length;i++){
                   if(temp[i]!='|')
                    string.push(temp[i]);
               }
              temp.length=0;
          }
          else{
                for(let i=temp.length-1; i>=0;i--){
                  if(temp[i]!='|')
                  string.push(temp[i]);
                }
               temp.length=0;

         }
   if(queue.length)
      queue.push(newline);
      height++;
    }
    if(node.left) {
      queue.push(node.left);
       
    }
    if(node.right) {
        
      queue.push(node.right);
      
    }
  }
  
  return string;
};



module.exports = HelperBinarySearchTree;
 