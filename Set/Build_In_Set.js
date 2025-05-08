const mySet = new Set();

console.log(mySet.add('a'));
mySet.add(2);
mySet.add({name:"yasan"});
mySet.add(2);
mySet.add(["a","b","c"]);
mySet.add('b');

console.log("Set after add(): ", mySet);

console.log("Has a?", mySet.has('a'));
console.log("Has c?", mySet.has('c'));

console.log("Size of msSet:", mySet.size);

mySet.delete({name:"yasan"});

mySet.forEach(value => console.log(value));

for (let val of mySet.values()) {
    console.log(val);
}

console.log(mySet.values());

for (let [key, value] of mySet.entries()) {
    console.log(key, value); 
}
  
mySet.clear();
console.log("Set after clear():", mySet);
