// Functions //

// Q.01

// function displayDateTime() {
//     const now = new Date();
//     const datetime = now.toLocaleString();
//     return datetime
//   }
//   console.log(displayDateTime())

// Q.02

// function myName(a,b){
//     console.log(a,b)
// }
// myName("Amir","Khan")

// Q.03

// var userInput = +prompt("Enter Any number")
// var userInput2 = +prompt("Enter Any number")


// function addition(a,b){
//     console.log(a + b)
// }
// addition(userInput,userInput2)

// Q.04

// function calculator(a,b){
//     console.log(a / b)
// }
// calculator(2,4)

// Q.05

// var person1 = prompt()
// function square(a){
//     console.log(person1*person1)
// }
// square(person1)

// Q.06

// function factorial(a){
//     console.log(4*3*2*1)
// }
// factorial(4)

// Q.07

// var startNum = prompt("start number")
// var endNum = prompt("end number")
// function counting(a,b){
//     for(let i = a; i <= b; i++){
//         console.log(i)
//     }
// }
// counting(startNum,endNum)

// Q.08

// var base = prompt("Enter base")
// var perpendicular = prompt("Enter perpendicular")

// function hypotaneous(a,b){
//     console.log((a*a) + (b*b))
// }
// hypotaneous(base,perpendicular)

// Q.09

// function variableLenght(a,v){
//     console.log(variableLenght.length)
// }
// variableLenght()

// Q.10

// var firstNum = prompt("any number")
// var secondNum = prompt("any number")
// function largeNum(a,b){
//     if(a > b){
//         console.log(a)
//     }else{
//         console.log(b)

//     }
// }
// largeNum(firstNum,secondNum)

// Q.11

// var widht = prompt("put any width")
// var height = prompt("put any height")

// function area(a,b){
//     console.log(a*b)
// }
// area(widht,height)

// Q.12

// var fruits = ["strawberry","orange","banana","mango","apple"]
// console.log(fruits)
// function sort(a){
//     console.log(a)
// }
// sort(fruits.sort())

// Q.13

// var arryOfNum = [2,3,4,5,6]
// console.log(arryOfNum)
// function sumOfNum(a){
//     return 2+3+4+5+6
// }
// sumOfNum(arryOfNum)

// console.log(sumOfNum())

// Q.14

// var param = function inner() { 
//     return typeof inner; 
// }
// alert(param()); 

// Q.15

// var powerOfNumber = prompt("")
// function powerNumber(a){
//     console.log(a*a*a)
// }
// powerNumber(powerOfNumber)

// Q.16

// var randomNum = prompt()
// console.log(randomNum)
// function randomNumber(a){
//    let arr = randomNum.toString().split("");
//    let reversed = arr.reverse().join("")
//    return reversed
// }
// randomNumber(randomNum)

// Q.17

// console.log(randomNumber())

// var sentence = "the quick brown fox";
// console.log(sentence)
// function uppercase(a){
//     console.log(a)
// }
// uppercase(sentence.to)

// Q.18

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// console.log(find_longest_word('Web  Tutorial'));

// Q.19

// function vowel_count(str1)
// {
//   var vowel_list = 'aeiouAEIOU';
//   var vcount = 0;
  
//   for(var x = 0; x < str1.length ; x++)
//   {
//     if (vowel_list.indexOf(str1[x]) !== -1)
//     {
//       vcount += 1;
//     }
  
//   }
//   return vcount;
// }
// console.log(vowel_count("The quick brown"));

