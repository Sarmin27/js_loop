//------------------------------------while loop---------------------------------------
/***
Subtask-1:
Now tell Ersa to display sum of all the odd numbers from 1 to 100.

 */
let number =1;
let sum=0;
while(number<=100){
  
    if(number%2===1){
        console.log(number);
        sum=sum+number;

    }
    number++;

}
console.log(' sum of all the odd numbers from 1 to 100:',sum);

//---------------Display sum of all the odd numbers from 81 to 131.
let num =81;
let total=0;
while(num<=131){
  
    if(num%2===1){
        console.log(num);
        total=total+num;
    }
    num++;

}
console.log(' sum of all the odd numbers from 81 to 131:',total);


/**
Subtask-2:
Now tell Ersa to display sum of all the even numbers from 1 to 100.
Display sum of all the even numbers from 206 to 311.
*/



