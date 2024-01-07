// Q 1 . **************


// let arr = [3,2,2,3]
// let val = 3;
// let res = 0;

// for(let i = 0; i<arr.length; i++){
//     if(arr[i]==val){
//         arr[i]=arr[i+1];
//         res = res + 1;
//     }
//     else{
        
//     }
// }

// console.log(arr);
// console.log(res);    //Ans



// // Q 2

// let x = 121;
// let palidrom= false
// x = x.toString()
// console.log(x);
// if(x.charAt(0)==x.charAt(x.length-1)){
//     palidrom = true;
// }
// else{
//     palidrom = false;
// }
// console.log(x);
// x= Number(x)

// console.log(x);

// console.log(palidrom);

// // Q 3 *****************8

// let arr = [1,2,3,4,5];
// let ans = 0;

// function sum (arr){
//     for(val of arr){
//         ans = ans + val
//     }
//     return ans;
// }

// console.log(sum(arr));

// // Q 4
// let str = 'devesh';
// function palidrom(str){
//     let palidrome = false; 
//     if(str.charAt(0) == str.charAt(str.length-1)){
//         palidrome = true;
//     }
//     else{
//         palidrome
//     }
//     return palidrome;
// }

// console.log(palidrom(str));

// // Q 5 
// let arr = [2, 4, 6, 7];
// let newarr = [ ];

// function reverseArr(arr, newarr){
//     for(let i = 0; i<arr.length; i++){
//         newarr.unshift(arr[i])
//     }
// }

// console.log(arr);
// reverseArr(arr ,newarr);
// console.log(newarr);                    //Ans



// // // Q 6

// let arr = [1, 3 ,5 ,3 ,2 ,1]


// function remvDup(arr){
//     let duplicate = []
//    for(let i =0; i<arr.length; i++){
//     for(let j = i+1; j<arr.length; j++){
//         if(arr[i] == arr[j]){
//             duplicate.push(arr[i]);
//         }
//     }
//    }

//    return duplicate;
// }

// console.log(remvDup(arr));

// Q 7

// let num = 8;

// function fact(num){
//     let factorial = num;
//     for(let i= num-1; i>=1 ; i--){
//         factorial = factorial*i
//     }
//     return factorial;
// }

// console.log(fact(num));

// // // Q 8
// let num = 5;
// function isPrime(num){
//     let isPrime = true;
//     for(let i = 2; i<num-1; i++){
//         if(num%i==0){
//             isPrime=false;
//         }
//         else{
//             isPrime
//         }
//     }

//     return isPrime;
// }

// console.log(isPrime(num));

// // Q 9

// let num = 5;

// function FindFact(num){
//     let factNumber = 1;

//     while (num>=1) {
//         factNumber = factNumber*num;
//         num--
//     };

//     return factNumber;
// }

// console.log(FindFact(num));

// // Q 10

// let arr = [2, 4 , 1, 8, 3]

// function sortedArr(arr){
//     let sorted = arr.sort()
//     return sorted
// }


// console.log(sortedArr(arr));  // Ans

// // Q 12

// let haystack = 'sadbutsad';
// let needle = 'sad'

// let result = haystack.indexOf(needle)
// console.log(result);                        // Ans


// // // Q 15
// let x = 'hello'

// let a = x.split('')
// console.log(a);

// a = [...new  Set(a)]
// a = a.join('')
// console.log(a);


  