

//........Array.. includes......**

/*let array =['tamanna','salma','simu','santa','juma'];

console.log(array.includes('salma'));

let string = 'taslima';
console.log(string.includes('i'));*/


//.......Array... concat..........//

/*const firstName ='kulsum';
const lastName = 'Diti';

             //...process: 1 ...//

const fullName = firstName + ' ' + lastName;

           //...process: 2.....//

const fullName = firstName .concat('    ') .concat(lastName);

             //......process: 3....//

const fullName = `${firstName}  ${lastName}`

console.log(fullName); */

        //Array Concatenation :....... Between 2 array//

/*let num = [1,2,3,4,5];
let num1 = [6,7,8,9,10];

process 1:     

const newArray =num.concat(num1);
console.log(newarray);

process 2:       

let newarray = [...num,...num1];
console.log(newarray);*/

                         //......অ্যারে থেকে স্ট্রিং বানানো (join method)............:

//যদি একটি অ্যারে থাকে, সেটিকে join() method ব্যবহার করে একটি স্ট্রিং বানানো যায়।

/*let array =['tamanna','salma','simu','santa','juma'];
let newstr = array.join(' -');
console.log(newstr);*/

                        //..........স্ট্রিং থেকে অ্যারে বানানো (split method):...........//

//.....যদি একটি স্ট্রিং থাকে, সেটিকে split() ব্যবহার করে অ্যারেতে ভাঙা যায়।....//

let str = 'amar sonar bangla ami tomai valobasi'
 let Newarray = str.split('');
// let Newarray = str.split('b');

console.log(Newarray);

                   //..... optional : String Reverse Method...://

// let meName = 'Ummay Kulsum Diti';
// let reversestring = meName.split('') . reverse() . join('    ');
// console.log(reversestring);