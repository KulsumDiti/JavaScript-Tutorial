
/* function foodItems(){

    console.log('Fried Rice');
    console.log('Chiken Fry');
    console.log('Pizza');
    console.log('......................');

}

foodItems(); */
      
//Parametre : Funtion J Man Receive Kore..(result) !!

function multiply(result){

    /*let finalResult = result * result;
    console.log(finalResult);*/

    console.log(result);
}
multiply(5);
multiply(15);
multiply(25);
       //Argument: Amra j ManGhula Dibo..(5),(15), (25) ....!!

//1:..........   // Various types of parameter for a function //

function calculation(num1, num2){

    const sum = num1 + num2;
    console.log(sum);

}
calculation(4, 3);
calculation(45678, 98765);

//2:........."Number Type"

function math(num1, num2, num3){

    const multiply = num1 * num2* num3;
    console.log(multiply);

}
math(4, 5, 6);
math(15, 20, 25);


//3:............."Variable Type"

let name1 = "Diti";
let name2 = "Somapty"
function passVariable(girl1, girl2){

    console.log(girl1, girl2);

}
passVariable(name1, name2);

//4:............"String Type"

function strings(nam){

    console.log(nam);
}
strings('Kulsum');


function strings(nam){

    const leng = nam.length;
    console.log(nam, leng);
}
strings('Kishoregonj');
strings('Narayangonj');

/* function strings(nam){

    if(nam.length % 2 === 0){
       console.log('Even');
       }
     else{
         console.log('Odd');
     }
 
 }
 strings('Kulsum'); */
 

//5:............Boolean Type


function doSomething(number, calculate){

    if(calculate === true){
        const add = number + 20;
        console.log(add);
    }
    else{
        const sub = number - 20;
        console.log(sub);
     }

}
doSomething(50, true);
doSomething(150, false);


function strings(nam){

   if(nam.length % 2 === 0){
      console.log('Even');
      }
    else{
        console.log('Odd');
    }

}
strings('Kulsum');
