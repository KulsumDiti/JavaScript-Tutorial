
    
//Ternary operator: (shortcut of if else)

/* let myAge = 24;

if(myAge>=18){
  
    console.log('You can vote');
}
else{
    console.log('You are not eligible for submitting vote');
}
    */
            // Ternary Operator likher niyom......!!

//condition;
// ? ;
// :

//condition ? true value (if) : false value(else);

let myAge = 24;

myAge>=18 ? console.log('You can vote') : console.log('You are not eligible for submitting vote');


/*Value set:
variable name = condition cheek with === true or false ? true value : variable value + new value.*/

let productPrice = 500;
//let discountPrice = true;
let discountPrice = false;

productPrice = discountPrice=== true ? 0: 500 + 500;
console.log(productPrice);

//............odd OR Even Number Check.......

let number = 20;
let result = number%2==0? 'Even' : 'Odd';
console.log(result);

