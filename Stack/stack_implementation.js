const createStack = function() {
    this.stackArr = [];

    this.push = function(element) {
        this.stackArr.push(element);
    }

    this.pop = function() {
        if(this.isEmpty()) {
            return "stack is empty";
        } else {
            return this.stackArr.pop();
        }
    }

    this.isEmpty = function() {
        return this.stackArr.length === 0;
    }

    this.size = function() {
        return this.stackArr.length;
    }

    this.peek = function() {
        if(this.isEmpty()) {
            return "stack is empty";
        } else {
            return this.stackArr[this.stackArr.length-1];
        }
    }

}

const stack = new createStack();

stack.push(11);
stack.push(22);
stack.push(33);
console.log(stack.size());
stack.push(44);
stack.push(55);
stack.push(66);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.size());
console.log(stack.peek());


// to-do try using js class

