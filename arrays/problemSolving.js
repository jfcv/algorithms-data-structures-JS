/*
given 2 arrays, create a function that
let's the user know (true/false) whether
these two arrays contain any common items

For Example:

const array1 = ['a','b','c','x']
const array2 = ['z','y','i']
should return false.

const array1 = ['a','b','c','x']
const array2 = ['z','y','x']
should return true.
*/

/*
inputs = 2 parameters - arrays - no size limits
ouputs = return true or false
*/

/*
nested loop for ccomparing the 2 arrays
O(n^2) -> quadratic exponencial complexity
not recommended for super big arrays
*/

const array1 = ['a','b','c','x']
const array2 = ['z','y','i']

/*
this is not the best solution because
its time complexity
O(n^2) -> Horrible : array sizes are the same
O(a*b) -> array sizes different

O(1) Space Complexity : creates the i variable

*/

function containsCommonItem(arr1,arr2) {
  for (let i=0;i < arr1.length;i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]){
        console.log('element found');
      } else {
        console.log('not elements in common');
      }
    }
  }
}

//uncomment this for try the 1st solution
//containsCommonItem(array1,array2)
