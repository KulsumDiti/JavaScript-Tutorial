
//......Normal for loop Method 
/* const rev=[]                                                        // [9.....,6,5,43,2,1]
let nuM = [1,2,3,4,5,6,7,8,9];
for(let i=0; i<nuM.length; i++){
const newRev= nuM[i] ;
rev.unshift(newRev)
}
console.log(rev); */

      //OR

/* let newRev=[]
let num = [1,2,3,4,5,6,7,8,9];
      
for(let i=num.length ; i>=0; i--){
  // console.log(i)
  newRev.push(i);
}
      
console.log(newRev); */

let  num = 90;
switch(true){
    case num>=90 && num<=100:
        console.log('A')
        break;

        case num>=80 && num<90:
            console.log('B')
            break;
        case num>=70 && num<80:
            console.log('C')
            break;
            default:
                console.log('fail')
            
}
      
