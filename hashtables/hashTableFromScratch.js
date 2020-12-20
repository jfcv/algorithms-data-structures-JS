class HashTable {


  constructor(size){
    this.data = new Array(size);
  }


  //generating the hash
  _hash(key){
    let hash = 0;
    //even using a for[O(n)], hashing is very fast considered normally O(1)
    for (let i = 0; i < key.length; i++){
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash; //OUPUT value of the function
    //log the last hash
    //console.log(hash);
  }


  //pushing objects - O(1)
  set(key, value){
    let address = this._hash(key);
    if (!this.data[address]) {
     this.data[address] = new Array();
    }
    this.data[address].push([key, value]);
    console.log(this.data);
  }


  //lookup for objects
  get(key){
    let address = this._hash(key);
    const currentBucket = this.data[address];
    //log the whole bucket
    console.log(currentBucket);
    if (currentBucket) { //this is also considered O(1)
      for (let i = 0; i < currentBucket.length; i++){
        if (currentBucket[i][0] === key) {
          console.log(currentBucket[i][1]);
        }
      }
    }
  }


  //retrieving the keys - O(n)
  keys(){
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++){
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    console.log(keysArray);
  }


}

const myHashTable = new HashTable(500);

//myHashTable._hash('grapes');

//creating objects
myHashTable.set('a', 1);
myHashTable.set('b', 2);
myHashTable.set('grapes', 4);

console.log('...');

//lookup for objects values
//myHashTable.get('grapes');

//lookup for objects keys
myHashTable.keys()
