
               //.......... Problem-1:..........

/*for(i=1; i<=200; i++){

    if(i==100){
        break;
    }

    console.log(i);
}*/

                   //...... Problem-2:..............

/*let sum = 0;

for(i=0; i<=10; i++){

    sum = sum + i;
    console.log(sum);
}*/


// let sum1 = 0;

// for(i=1; i<=20; i++){
   
//     sum1 = sum1 + i;
//     console.log(sum1);
// }



/*let sum2 = 0;

for(i=20; i<=30; i++){

    sum2 = sum2+i;
    if(sum2==100){
        break;
    }
    console.log(sum2);
}*/

               // ....Problem-3:........
            
            //    for even Number scrip/baad

// for(i=1; i<=40; i++){

//     if(i%2==0){
//         continue;
//     }

//     console.log(i);
// }



// for odd Number scrip / baad:

/*for(i=1; i<=40; i++){

    if(i%2!=0){
        continue;
    }

    console.log(i);
}
*/

           //.... Problem-5...


 /* for(i=55; i<=85; i++){

    if(i%2==0 || i%5==0){
         continue;
       }
        
    console.log(i);
}*/

         //... Problem-6:....

// Using a for loop to display the message 60 times
// for (let i = 1; i <= 60; i++) {
//     console.log("I will invest at least 6 hrs every single day for the next 60 days!");





// Problem-11: Generate a multiplication table for number 9

/*let number = 9;
let nmta = 0;
for(let i= 1; i<=10; i++){
    
    // nmta = `${number} x ${i} = ${number* i}`
    nmta = `${9} x ${i} = ${9*i}`
    console.log(nmta);
}

Multiplication table for the number 9
for (let i = 1; i <= 10; i++) {
    console.log(`9 x ${i} = ${9 * i}`);
}*/


let number = 9;

for (let i=1; i<=10; i++) {
  let result = number * i; 
  
  console.log(`${number} x ${i} = ${result}`); 
}