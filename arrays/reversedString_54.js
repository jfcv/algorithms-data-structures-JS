/*
Create a function that reverses a string:
"Hi My name is Andrei" : "ierdnA si eman yM iH"
*/

function reverse(str){

  if (!str || str.length < 2 || typeof str !== 'string' ) {
    return  'hmm that is not good';
  } else {
    //backwards array for reversing the str
    const backwards = []; //O(1)

    //str length
    const totalItems = str.length - 1; //O(1)

    //fill the backwards array with the str in reverse order
    for (let i = totalItems; i >= 0; i--){ //O(n)
      backwards.push(str[i]);
    }

    //log the reversed string
    console.log(backwards.join('')); //O(1)

    //joining the backwarded str
    return backwards.join('');

  }

}

//executing the function
reverse('Hi My name is Andrei')


//cleanear, readable way
function reverse2(str){
  console.log(str.split('').reverse().join(''));
}

reverse2('Hi My name is Andrei')


//cleanest way possible
const reverse3 = (str) => { console.log(str.split('').reverse().join('')) };

reverse3('Hi My name is Andrei')
