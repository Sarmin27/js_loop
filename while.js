const num=7;
if(num<5){
    console.log('choto ekta number');

}
console.log('something new');
//-------------------------------while-loop-------------------
/*structure:
while(condition){
    body part
}
condition jotokhon porjontw sottto hobe loop totokhon i cholbe ...condition mitttha hoye gele loop thame jabe.

----------------------------------------Infinite loop-------------------------------
var num=0;
while(num<5){
    console.log('Hello');

}---------ekhetre number  0 thakche barche na tai loop infinite vabe cholbe.
*/
let number=3; //loop variable
while(number<5){  //loop condition
    console.log('loop',number);//loop statement
    // number=number+1;
    // number+=1;
    number++;//loop variable change
}




// -----------------------------------------problem solving -------------------------------------

//   let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }


//decremental while loop[20-11 porjontw show korbe]
let i=20;
while(i>=10){
    console.log(i);
    i--;
}