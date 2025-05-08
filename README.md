# DSA_Concepts
This is a branch for learning concepts of DSA.


1)What is a Stack?

A stack is a linear data structure that allows operations to be performed at one end, called the top. The two primary operations are:

Push: Adds an element to the top of the stack.
Pop: Removes and returns the top element from the stack.

Stacks are widely used in various applications, such as function call management, undo mechanisms, and parsing expressions.

Operations Performed on a Stack
Push: Adds an element to the top of the stack.
Pop: Removes and returns the top element from the stack.
Peek (or Top): Returns the top element without removing it.
isEmpty: Checks if the stack is empty.
Size: Returns the number of elements in the stack.

JavaScript doesn't provide a dedicated "Stack" class or data type. However, you can easily use the built-in Array object to implement stack functionality since it offers methods like push and pop that naturally behave like a stack (Last In, First Out).
But peek & isEmpty methods are not in array methods.

2)What is Sets?

A Set in JavaScript is used to store a unique collection of items, meaning no duplicates are allowed.

Sets internally use a hash table which makes search, insert and delete operations faster than arrays. Please note that a hash table data structure allows these operations to be performed on average in constant time.
Set maintains the insertion of items. When we access items, we get them in the same order as inserted.
Only Unique Keys are allowed, if we insert the same key with a different value, it overwrites the previous one.
A set can be created either empty or by providing an iterable like array or string(Sets don’t support indexing; you must iterate to access elements).

Use Cases for Sets:

Removing duplicates from arrays.
Checking for unique values quickly.
Tracking items that should only appear once (e.g., visited pages, clicked items).

These are the actual methods available on JavaScript's built-in Set:

Method	                What it does

.add(value)	            Adds a new value (if not already present)
.delete(value)	        Removes a value from the set
.has(value)	            Checks if a value exists
.clear()	            Removes all values
.forEach(fn)	        Iterates over each value
.values() / .keys()	    Iterates over values (same thing)
.entries()	I           terates over [value, value] pairs
.size (property)	    Returns number of elements

These functions are not supported by build-in Set:

union(otherSet)

intersection(otherSet)

difference(otherSet)

isSubsetOf(otherSet)

isSupersetOf(otherSet)

Always keep a reference to the exact object/array/function if you plan to delete it later from a Set or Map.
In a JavaScript Set, when you add a value, it becomes both the key and the value internally. This is different from a Map, where you explicitly define key => value pairs.

