/*
the problem with the hash tables are the
hash collitions that happen when inserting
new information
*/

let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function() {
    console.log('ahhhhhhh!');
  }
}

console.log(user);

//lookup
console.log(user.age); //O(1)

//insert
user.spell = 'abra kadabra';
console.log(user);

//lookup
user.scream(); //O(1)
