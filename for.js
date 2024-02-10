//----------------------------while-loop-------------------------
// let number=3; //loop variable
// while(number<5){  //loop condition
//     console.log('loop',number);//loop statement  //infinite loop run control korar jonno ctrl then c chapte hobe.
//     // number=number+1;
//     // number+=1;
//     number++;//loop variable change
// }


/*
---------------------------------for loop-----------------------------------
for( ;  ; )
 
for(first part; srcond part ; third part){
    loop statement

}
for(loop variable declaration; loop condition;loop variablr change)
*/

// simple for loop ar while loop er moddhe technically kono different nai ,2 ta dekhte same sudu while e vange vange likha ar for loop e ek sathe likha.
for(let number=3; number<5;number++ ){

    console.log('loop',number);
}

for( 
    let i = 5; i <= 100; i++){
        console.log(i);
    }

    const array = [1, 2, 3, 4, 5, 6, 7];
    for (let i = 1; i < array.length; i++) {
        if (i == 5) {
         continue;
        }
        console.log(array[i]);
       }




    // for (let i = 0; i < 5; i+=3) {
    //    console.log(i);
    //  }



    // give me the list numbers between 1 to 30 divisible by 5
    let sum =0;
    for(let i=1;i<=30;i++){
        if(i%5 === 0 || i%3===0){
            console.log('5 or 3 dara bivajjo', i);
            sum=sum+i;

        }
        

    }
    console.log('total',sum);


      