const strings = ['a','b','c','d'];
//4*4 = 16 bytes of storage, 4 bytes for each letter

//accessing to the array
strings[2]; //O(1)

//push
strings.push('e'); //O(1)

//pop
strings.pop(); //O(1)

//unshift
strings.unshift('x'); //O(n)

//splice
strings.splice(2,0,'alien'); //O(n)

/*
arrays are slow when adding an element at the beginning
or when adding one in the middle
*/

//log to the console
console.log(strings);
