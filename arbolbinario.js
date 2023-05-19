function BinarySearchTree (valor) {
    this.valor = valor
    this.right = null
    this.left = null
}

BinarySearchTree.prototype.size = function (){
    if (this.right===null && this.left===null) return 1
    else if(this.right===null) return 1 + this.left.size()
    else if(this.left===null) return 1 + this.right.size()
    return 1 + this.left.size() + this.right.size()
}

BinarySearchTree.prototype.insert = function(value){
  var novo = new BinarySearchTree(value)
  if(value>this.valor) {
    if(!this.right) {
        this.right = novo;
    } else {
        this.right.insert(value);
    }
  } else {
    if(!this.left) {
        this.left = novo;
    } else {
        this.left.insert(value);
    }
  }
}

BinarySearchTree.prototype.contains = function(x) {
    if(this.valor===x){
        return true;
    }
    if(x>this.valor){
        if(!this.right){
            return false;
        } else {
            return this.right.contains(x)
        }
    } else if (x<this.valor) {
        if(!this.left) {
            return false;
        } else {
            return this.left.contains(x)
        }
    }
}

BinarySearchTree.prototype.depthFirstForEach = function (callback, orden) {
    if (orden==="in-order" || !orden){
        if(this.left) {
            this.left.depthFirstForEach(callback,orden);
        }
        callback(this.valor);
        if(this.right) {
            this.right.depthFirstForEach(callback,orden)
        }
    }
    else if (orden==="pre-order") {
        callback(this.valor);
        if(this.left) {
            this.left.depthFirstForEach(callback,orden);
        }
        if(this.right) {
            this.right.depthFirstForEach(callback,orden)
        }
        
    }
    else if (orden === "post-order") {
        if(this.left) {
            this.left.depthFirstForEach(callback,orden);
        }
        if(this.right) {
            this.right.depthFirstForEach(callback,orden)
        }
        callback(this.valor);
    } else {
        "Orden no válido"
    }
}

BinarySearchTree.prototype.breadthFirstForEach = function(callback,arreglo){
    if (arreglo==null) { 
        var arreglo = [];
    }

    if(this.left){
        arreglo.push(this.left);
    }

    if(this.right){
        arreglo.push(this.right);
    }

    callback(this.valor);

    if(arreglo.length>0) {
        arreglo.shift().breadthFirstForEach(callback,arreglo);
    };
}


var arbolito = new  BinarySearchTree(5);
arbolito.insert(25)
arbolito.insert(15)
arbolito.insert(25)
arbolito.insert(17)
arbolito.insert(21)
arbolito.insert(28)
arbolito.insert(0)
arbolito.insert(14)
arbolito.insert(50)
arbolito.insert(1)
arbolito.insert(45)
arbolito.insert(13)
arbolito.insert(12)
arbolito.insert(11)
console.log(arbolito.size());
console.log(arbolito.contains())
console.log(arbolito)

console.log(arbolito.depthFirstForEach(function(f){
    console.log(f)
},))

arbolito.depthFirstForEach(function(f){
    console.log(f)
},"post-order")
arbolito.breadthFirstForEach(function(f){
    console.log(f)
})