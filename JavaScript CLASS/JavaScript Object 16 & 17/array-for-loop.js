              //......For Loop With Array.....//

/*for(i=0; i<=10; i++){

    console.log(i);
}*/

let flowers = ["Rose", "Water Lily", "Sunflower", "Orchid", "Jasmine", "Marigold"];

/* for(let i=0; i<flowers.length; i++){

    console.log(flowers[i]);

};*/
              //..........For Of Loop Array.....//

for (const Diti of flowers) {

     console.log(Diti);
     
};

           //....Array Reverse various Method: 
//....Normal for loop Method 
const rev=[]
let num = [1,2,3,4,5,6,7,8,9];
for(let i=0; i<num.length; i++){
        const newRev= num[i] ;
        rev.unshift(newRev)
}
console.log(rev);

       // forof loop**
let numbers =[1,2,3,4,5,6,7,8,9];
 const revnambers =[];
 for (const newNumbers of numbers) {
    const getdata= newNumbers;
    revnambers.unshift(getdata);
 }
console.log(revnambers);

//   **short hand*

/*let Numbers =[1,2,3,4,5,6,7,8,9];
const reversenumbers = Numbers.reverse();
console.log(reversenumbers);*/

// ****loop ulta kore  //Reverse Looping 

/*let numbers =[1,2,3,4,5,6,7,8,9];
 const revnambers =[];
for(let i=numbers.length-1; i>=0; i-- ){
    const getdata= numbers[i];
    revnambers.push(getdata);

}
console.log(revnambers);*/

// ***
/*let numbers = [10,11,12,13,14,15,16,17,18,19,20];
const reversenumbers =[];
for (let i=0; i<numbers.length; i++){
    console.log(numbers[i]);
    const Newnumbers = numbers[i];
    console.log(Newnumbers);
    reversenumbers.unshift(Newnumbers);
    
}
console.log(reversenumbers);*/



 /*let Name = ['mony','koly','poly','moly','tonny'];
 const revstudent = [];
//  for(let i=0; i<Name.length; i++){
// // console.log(Name[i]);
// const newname= Name[i];
// // console.log(newname);
// revstudent.unshift(newname);

//  }
//     console.log(revstudent);

//   forof loop***

for (const newname of Name) {
    const nam = newname;
    revstudent.unshift(newname);
}
console.log(revstudent);*/
           
