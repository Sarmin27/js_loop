//const: value will not change.
//let: value can change.
//var: we should not use it.
//-------------------------------------------loop(for of)--------------------------------------------
//loop:eki kaj bar bar kora
//for:javascript special keyword. 
/*basic structure:
  for(){

  }
*/
//  array deacler 
const numbers=[10, 20, 30, 40, 50, 60];
console.log(numbers);
for(const num of numbers){   //num name ekta const variable declare then of then j variable tar opore kaj korbo oi variable name.
    console.log(num);
}

const fruits=['Apple', 'Orange', 'Banana', 'Mango'];
console.log(fruits);
for(const fruit of fruits){
    console.log(fruit);
    console.log('I want to eat.');
}