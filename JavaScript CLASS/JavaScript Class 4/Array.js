
              //  .........Array......

let developers = ['Maria', 'Muksina', 'Diti', 'Jeri', 'Kakoly', 'Mithe'];

        //    ...Array length..ber kora...mane koita data/ ashe! 
        //       Array length [arrayName. length ]

console.log(developers.length);

              // Includes ( finding specific data , case sensitive for string type data) 

              // [arrayname . includes(‘what data you want’)]

console.log(developers.includes('Kakoly'));

console.log(developers.includes('maria'));


            // indexOf [array-Name. indexOf(‘what data you want’)]

console.log(developers.indexOf('Mithe'));

                // Array index [ array-name[ index Number ] 

   console.log(developers[2]);

                 //    ...Get element by index...
  var five = developers[5];
  console.log(five); 

 

               //   Check Variable is array... 

let number = 10;
let num = ['1020', '2020', '3030', '4040'];
let numBer = '[10, 20, 30, 40]'

console.log(Array.isArray(developers));

console.log(Array.isArray(number));

console.log(Array.isArray(num));

console.log(Array.isArray(numBer));

                // Concat (array.concat(another array name) jora dauya

console.log(developers.concat(num));

                               // Join....

 console.log(developers.join(" "))
 console.log(num.join(' + '));
 console.log(num.join(' | '));

                       //  Slice ( array.slice ( from index, up to index)

console.log(developers.slice(0, 3));

         // Splice ( last elements index as much as needed)

console.log(developers.splice(2, 4));