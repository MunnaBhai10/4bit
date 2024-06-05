// var arr =[1,2,3,4,5,];

// function testarr(array,num){
//     array.push(num);
//     return array.shift();
// }

// console.log(testarr(arr,6));
// console.log(arr);


// function searchfriend(name){
// var result="";
// var myFriends ={

//     "frind1" : "ayush",
//     "friend2" : "aryan",
//     "friend3": "biplop"


// } ;
// return result = myFriends[name]
// // var handsome1= myFriends.frind1; 
// // var handsome2 = myFriends.frind2; 
// // var handsome3 = myFriends.frind3; 
// }
// console.log(searchfriend("friend2"));

// var myFriends ={
    
//     "frind1" : "ayush",
//     "friend2" : "aryan",
//     "friend3": "biplop",
// };

// function searchfriend(name){
//     if(myFriends.hasOwnProperty(name)){
//         return myFriends[name]
//     }else{
// return "not Found"
//     }
    

    
    // }
    // console.log(searchfriend("friend4"));



// var bikes= [
// {
// "Company": "yamaha",
// "list":["mt-15","FZ","RX"]

// } ,
// {
//     "Company" : "bajaj",
//     "list":  ["pulsar","dominar","avenger"]
// }
// ]
// console.log(bikes[0].list[0]);













// var Numbers=[[1,2,3],[8,9],[4,6]];
// function multiply(Array){

// var  product = 1;


// for(i=0;i<Array.length;i++){
//     for(j=0;j<Array[i].length;j++){
//         product *= Array[i][j];
//     }
// }
// return product;
// }
// console.log(multiply(Numbers));




// to check if the number is prime or not 


// function checkPrime(num){
//     let count=0;
//     if(num==1){
//         return "number is not prime"
//     }
//     for(let i=2;i<num;i++){
//         if(num%i==0){
//             count++;
//         }
//     }
//     if(count==0){
//         return "number is prime"
//     }else{
//         return "number is not prime"
//     }


// }
// console.log(checkPrime(8));





//to find first N prime numbers 

// function findPrime(num){
   
//     if(num == 0){
//         return "their is no prime number"
//     }
//     let i=2;
//     while(num>0){

//         //  check prime number using recursion
//         if(prime(i)){
//             console.log(i);
//             num--;
//         }
//         i++;
//     }


// }

// function prime(n){
//     if(n==2 || n==3){
//         return true;
//     }
//     let count=0;
//     for(let i=2;i<n;i++){
//         if(n%i==0){
//             count++;
//         }
//     }
//     if(count==0){
//         return true;
//     }else{
//         return false;
//     }
// }



// findPrime(11);

let newarry=[];
let row=[];
function matrix(a,b){
    for(let i=0;i<a;i++){

        for(let j=i;j<b;j++){
            row.push(0);
        }
        newarry.push(row)
    }
}
matrix(3,2)
console.log(newarry)



