/*
merge & sort 2 arrays
input : [0,3,4,31] - [4,6,30]
output : [0,3,4,4,6,30,31]
*/

function mergeSortedArrays(arr1, arr2){

  const mergedArray = [];

  //array 1 var
  let arr1Item = arr1[0];

  //array 2 var
  let arr2Item = arr2[0];

  //initial indexes
  let i = 0;
  let j = 0;

  //check array 1 existence
  if (arr1.length === 0) {
    console.log(arr2);
  }

  //check array 2 existence
  if (arr2.length === 0) {
    console.log(arr1);
  }

  //check the minor item between the 2 arrays
  while (arr1Item || arr2Item) {

    console.log(arr1Item, arr2Item);

    if (!arr2Item || arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      i++;
      arr1Item = arr1[i];      
    } else {
      mergedArray.push(arr2Item);
      j++;
      arr2Item = arr2[j];
    }
  }

  console.log(mergedArray);
}

mergeSortedArrays([0,3,4,31], [4,6,30]);
