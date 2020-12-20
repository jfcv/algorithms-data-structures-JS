/*
this is called hashtables, in JS
is known as objects
*/

/*
array1 ==> obj {
a: true,
b: true,
c: true,
x: true
}
array2[index] === obj.

loops through 1st array & creates an
object, where properties === items inspect
in the object

loops through 2nd array & check if
item in 2nd array exists on the
created object

*/

const array1 = ['a','b','c','x']
const array2 = ['z','y','x']

function containsCommonItem2(arr1,arr2){

  let map = {};

  for (let i = 0; i < arr1.length; i++) {
    if (!map[i]) {
      const item = arr1[i];
      map[item] = true;
    }
  }

  console.log(map);

  for (var j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      console.log('there are common items between arr1 & arr2. The element is: '+arr2[j]);
    } else {
      console.log('there are not common elements');
    }

  }

}

/*O(a+b) Time Complexity
a : arr1 length
b : arr2 length
*/
//O(a) Space Complexity : creating the map object filled with array1 contents
containsCommonItem2(array1,array2)
