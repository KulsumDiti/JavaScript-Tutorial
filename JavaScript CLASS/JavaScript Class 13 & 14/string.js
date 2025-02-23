
//

const myName = 'Kulsum';
const myName1 = '      Kulsum ';

/*console.log(typeof myName);
console.log(typeof myName1);*/


/*if(myName .toLowerCase() === myName1 .toLowerCase()){
    console.log('Yes Its Me');
}
else {
    console.log('No I am Not');
}*/

console.log(myName.length);
console.log(myName1.length);


if(myName .toLowerCase() .trim() === myName1 .toLowerCase() .trim()){
    console.log('Yes Its Me');
}
else {
    console.log('No I am Not');
}


        //Array.........And........String......Different...//                      

/* let flowers = ['lily', 'Sunflower', 'Rose', 'Marigold', 'water Lily'];

let mName = 'Kulsum Diti';

console.log(flowers[3]);
console.log(mName[4]);

flowers[4] = 'Jasmine';
console.log(flowers);

mName[9] = 'e';
console.log(mName); */


//String slice..... and....String splice//


let flowers = ['lily', 'Sunflower', 'Rose', 'Marigold', 'water Lily'];

let mName = 'Kulsum Diti';

//....slice......//

console.log(flowers.slice(1, 4));
console.log(mName.slice(3, 6));
console.log(flowers);

//Orginal Array Change Hoina.........//

    //..........splice...........// string e kaj kore na....//

        //Orginal Array Change Hoi.....//

//...Remove..Index.........//

/*console.log(flowers.splice(1, 4));
console.log(flowers);*/

flowers.splice(4, 1, 'diti');
console.log(flowers);

//...Add.Index..//

/* console.log(flowers.splice(2, 0, 'Red Rose'));
console.log(flowers);

console.log(flowers.splice(2, 0, 'Red Rose', 'White'));
console.log(flowers);*/

