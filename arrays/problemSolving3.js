/*
making the code more readable
*/

const array1 = ['a','b','c','x']
const array2 = ['z','y','i']

function containsCommonItem3(arr1,arr2) {
  var result = arr1.some(item => arr2.includes(item)) !== true ? false : true;
  console.log(result);
}

containsCommonItem3(array1,array2)
//O(a+b) Time complexity
//Space Complexity ?
