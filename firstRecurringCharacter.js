/*
Google // QUESTION:

Given an array = [2,5,1,2,3,5,1,2,4] : should return 2

Given an array = [2,1,1,2,3,5,1,2,4] : should return 1

Given an array = [2,3,4,5] : should return undefined

*/

//O(n^2)
function firstRecurringCharacter(input){
  for (let i = 0; i < input.length; i++) {
    for (var j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        console.log(input[i]);
        return input[i];
      }
    }
  }
  return undefined;
}

//O(n)
function firstRecurringCharacter2(input){
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]]) {
      console.log(map);
      console.log(input[i]);
      return input[i];
    } else {
      map[input[i]] = true;
    }
  }
  console.log(undefined);
  return undefined;
}

firstRecurringCharacter([1,2,2,1]);

firstRecurringCharacter2([1,2,2,1]);
