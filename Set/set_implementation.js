function mySet() {
    let collection = [];

    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };

    this.values = function() {
        return collection;
    };

    this.add = function(element) {
        if(!this.has(element)) {
            collection.push(element);
            return true;
        }
        return false;
    };

    this.remove = function(element) {
        if(this.has(element)) {
            let index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    };

    this.size = function() {
        return collection.length;
    };

    this.union = function(otherSet) {
        let unionSet = new mySet();
        let firstSet = this.values();
        let secondSet = otherSet.values();

        firstSet.forEach(function(e){
            unionSet.add(e);
        });

        secondSet.forEach(function(e){
            unionSet.add(e);
        });

        return unionSet;
    };

    this.intersection = function(otherSet) {
        let intersectionSet = new mySet();
        let firstSet = this.values();

        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };

    this.difference = function(otherSet) {
        let differenceSet = new mySet();
        let firstSet = this.values();

        firstSet.forEach(function(e){
            if(!otherSet.has(e)) {
                differenceSet.add(e);
            }
        });
        return differenceSet;
    };

    this.subset = function(otherSet) {
        let firstSet = this.values();
        return firstSet.every(function(value){
            return otherSet.has(value);
        });
    };
}

let setA = new mySet();
let setB = new mySet();
setA.add('a');
setB.add('b');
setB.add('c');
setB.add('d');
setB.add('e');
setB.add('f');
setB.add('a');
console.log(setA.subset(setB));
console.log(setA.intersection(setB));
console.log(setA.difference(setB));

let setC = new mySet();
let setD = new mySet();
setC.add('a');
setD.add('b');
setD.add('c');
setD.add('d');
setD.add('e');
setD.add('f');
setD.add('a');
console.log(setD.values());
setD.remove('a');
console.log(setD.has('a'));
