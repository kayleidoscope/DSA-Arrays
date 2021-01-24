const Array = require('./array')
const Memory = require('./memory')

function main() {
    Array.SIZE_RATIO = 3;

    //Create an instance of the Array class
    let arr = new Array()

    //Add an item to the array

    arr.push("tauhida");

    console.log(arr.get(0))
}

main()

/*

QUESTION 2

What is the length, capacity and memory address of your array?

length: 1
_capacity: 3
memory address: 0

What is the length, capacity and memory address of your new array?

length: 6
_capacity: 12
memory address: 3

The length continued to change each time something new was pushed to the
end of the array. The capacity only changed once, when it needed more room,
from 3 to 12. Based on the code, I think the memory addresses (aka ptr) only
changed once, when _resize was called and the capacity changed.

*/

/*

QUESTION 3

What is the length, capacity and memory address of your new array?
Explain the result of your program after adding the new lines of code.

length: 8
_capacity: 12
memory address: 3

Three items were taken off the end of the array, dropping the length by 3
but leaving capacity and the memory address unchanged.


*/

/*

QUESTION 4

1. I'm getting undefined.

2. Still getting undefined. Maybe these arrays don't store values in the same
way in-built JS arrays do?

3. The _resize() function makes the array larger.

*/