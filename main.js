//Day 1
//Taask 1
//function sumOFTwoNumbers(num1,num2) {
    //return num1 + num2}
//console.log(sumOFTwoNumbers(2,3));

//Task2
//let num = 10;
   // if (num > 0) {
       // console.log("Positive");
    //} else if (num < 0) {
      //  console.log("Negative");
    //} else {
      //  console.log("Zero");}

//Task 3
//let a = 5
//for (let i=1; i<=10; i++) {
//console.log("5*"+i+"="+a*i);}

//Task 4
//let a = 129;
//if (a % 10 == 9) {
//console.log("Yes");
//} else {
//console.log("No");}

//Task 5
//let a = 1601
//if((a/10%10)<=0 && (a%10)<=0){
  //      console.log(Math.floor(a/100));
//}
//else{
  //  console.log(Math.floor(a/100)+1);
//}
  //Day 2

  //Task 1
  //function longestDuration(h, m, s) {
    //const hoursInSeconds = h * 3600;
    //const minutesInSeconds = m * 60;
    //const maxSeconds = Math.max(hoursInSeconds, minutesInSeconds, s);
    //if (maxSeconds === hoursInSeconds) {
      //  return h;
    //} else if (maxSeconds === minutesInSeconds) {
      //  return m;
    //} else {
      //  return s;
    //}
//}
//console.log(longestDuration(2, 150, 500)); 
//Task2
// function same(num) {
//   let endNum = num%10
//   let middleNum =  Math.floor(num/10)%10;
//   let firstNum = Math.floor(num/100)%10;
//   return firstNum==middleNum and middleNum==endNum and firstNum==endNum;
// }
// console.log(212);
// console.log(879);


//Task 4
//function sumUpTo(n) {
  //  return (n * (n + 1)) / 2;
//}
//console.log(sumUpTo(4)); 
//console.log(sumUpTo(5)); 

//Task 5
// function findUniqueIndex(a, b, c) {
//     if (a === b) {
//         return c = 3
//     } else if (a === c) {
//         return b = 2
//     } else {
//         return a = 1
//     } 
// }
// console.log(findUniqueIndex(1, 1, 2));
// console.log(findUniqueIndex(5, 6, 5));

//Task 9 
//function sumUpTo(n) {
  //  return (n * (n + 1)) / 2;
//}
//console.log(sumUpTo(4)); 
//console.log(sumUpTo(5)); 




//Task13
// function isPrime(num) {
    
//   if (num <= 1) return false;
  
//   if (num <= 3) return true;
  
//   if (num % 2 === 0 || num % 3 === 0) return false;
  
//   for (let i = 5; i * i <= num; i += 6) {
//       if (num % i === 0 || num % (i + 2) === 0) {
//           return false;
//       }
//   }
  
//   return true;
// }
// console.log(isPrime(6));    
// console.log(isPrime(7)); 


//task 14
// function factorialMultiply(n) {
    
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//       result *= i;
//   }
//   return result;
// }
// console.log(factorialMultiply(5));  
// console.log(factorialMultiply(0)); 

//Day3
// Task 10
// function factorialMultiply(n) {
    
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//       result *= i;
//   }
//   return result;
// }
// console.log(factorialMultiply(5));  
// console.log(factorialMultiply(0));

//Task 6
// function maxNum(num) {
//   let max = -9999999999999;
//   for (let i = num; i > 0; i = Math.floor(i / 10)) {
//     if (i % 10 > max) max = i % 10;
//   }
//   return max;
// }
// console.log(maxNum(78271));
// console.log(maxNum(72719943478));
// console.log(maxNum(328));

//Task 3
// function allDigits(num){
//   let cnt = 0 ;
//   while(num>=10){
//       for(let i=num; i>0; i=Math.floor(i/10)){
//         cnt+=i%10;
//       }
//       num=cnt;
//       cnt=0;
//   }   
//   return num;
// }
// console.log(allDigits(38));
// console.log(allDigits(0));


//Task 5
// function isSymmetrical(num) {
//   let str = "";
//   for (let i = num; i > 0; i = Math.floor(i / 10)) {
//     str += i % 10;
//   }
//   return num == str;
// }
// console.log(isSymmetrical(7227));
// console.log(isSymmetrical(9939));
// console.log(isSymmetrical(4444444));

//Task 2





//task 4
// function Cubes(num) {
//   cnt = 0
//   for (let i = 0; i <= num; i++) {
//     cnt+=i**3
    
//   }
//   return cnt
// }
// console.log(Cubes(7));


//Task1
// function calculateCircleArea(num) {
//   return Math.round(num*num*3.14)
// }
// console.log(calculateCircleArea(6));

//Task2
// function sum3Digit(num) {
//   return Math.floor(num%10 + num/10%10 + num/100)
// }
// console.log(sum3Digit(465));

//Task3
// function sumOfDigits(num) {
//   if (num % 2 == 0) {
//     return num + 1
//   }
//   else{
//     return num - 2
//   }
  
// }
// console.log(sumOfDigits(22));
// console.log(sumOfDigits(4));
// console.log(sumOfDigits(3));

//Task4

//Task 5
// function lessThan100(num1,num2) {
//   if (num1 + num2 >= 100) {
//     return false
//   }
//   else{
//     return true
//   }
// }
// console.log(lessThan100(22,100));

//Task6
// function perimetr(num) {
//   return num * 4
// }
// console.log(perimetr(8));

//Task7
// function area(num) {
//   return num * num
// }
// console.log(area(9));

//Task8
// function averageNum(num1,num2) {
//   return (num1+num2)/2
// }
// console.log(averageNum(8,10));

//Task 9 
// function evenOrOdd(num) {
//   if (num % 2 ==0) {
//     return 3
//   }
//   else{
//     return 4
//   }
// }
// console.log(evenOrOdd(7));
// console.log(evenOrOdd(8));

//Task 10
// function calculation(num) {
//   return 17*(num*num) - 6*num + 13
// }
// console.log(calculation(0));
// console.log(calculation(2));



//Day 4

//Task9
// function gcd(num1,num2) {
//   if (num1>num2) {
//     return Mathfloor(num1/num2)
//   }
//   else{
//     return Mathfloor(num2/num1)

//   }

// }
// console.log(gcd(3,5));

//Task 11
//function factorial(num) {
  //let result = 1;
//   for (let i = 1; i <= n; i++) {
//       result *= i;
//   }
//   return result;
// }
//}
//console.log(factorial(4));

//Task 1
// function makesTen(num1,num2) {
//   if (num1+num2==10) {
//     return true
//   }
//   else if(num1%10==0){
//     return true
//   }
//   else if(num2%10==0){
//     return true
//   }
//   else{
//     return false
//   }
// }
// console.log(makesTen(9,8));

//Task 2
// function sumOfPrime(num1,num2) {
//   let sum = num1+num2
//   if (sum%2==0 || sum%3==0 || sum>10 && sum%5==0) {
//     return false
//   }
//   else{
//     return true
//   }
// }
// console.log(sumOfPrime(5,7));

//Task 15
// function calculateFuel(num) {
//   return num*10
// }
// console.log(calculateFuel(7));

//Task 5
// function largestSwap(num) {
//   let numEnd = num % 10;
//   let firstNum = Math.floor(num / 10);
//   return num > numEnd + "" + firstNum;
// }
// console.log(largestSwap(53));



//Day 5
//Task 1
// function flip(num) {
//   if (num == 1) {
//     return 0
//   }
//   else if (num == 0) {
//     return 1
//   }
// }
// console.log(flip(1));
// console.log(flip(0));

//Task5
// function largestSwap(num) {
//   let numEnd = num % 10;
//   let firstNum = Math.floor(num / 10);
//   return num > numEnd + "" + firstNum;
// }
// console.log(largestSwap(53));

//Task3
// function points(num1,num2) {
//   return (num1*2)+(num2*3)
// }
// console.log(points(7,5));

//Task 4
// function isPow(num) {
//   if (num%4==0) {
//     return true
//   }
//   else{
//     return false
//   }
// }
// console.log(isPow(156));

//Task2
// function equation(num,num1) {
//   let x=0;
//   if(num1<0)
//     {
//       x="-"+num1/num;
//       return x;
//     }
//     else{
//       return num1/num*(-1);
//     }
// }
// console.log(equation(2,3));


//Day 5 part 2
//Task 2
// function triangle(num,num1,num2) {
//   if (num<num1 || num1<num2 || num2>num){
//     let a = num*num
//     let b = num1*num1
//     let c = num2*num2
//     return a+" "+b+" "+c
    
//   }
//   else if(num<0 || num1<0 || num2<0){
//     let a = num*(-1)
//     let b = num1*(-1)
//     let c = num2*(-1)
//     return a+" "+b+" "+c
//   }
// }
// console.log(triangle(3,4,5));
// console.log(triangle(1,-2,-3));

//Task3
// function nextEvenandPrev(num) {
//   let a = num+1 
//   let b = num-1
//   return "next:"+a +" "+ "prev:"+b
// }
// console.log(nextEvenandPrev(4));

//Task 4
// function subtractNum(num) {
//   if (num>0) {
//     return num - 2
//   }
//   else if (num<0) {
//     return num + 1
//   }
//   else{
//     return 10
//   }
// }
// console.log(subtractNum(4));
// console.log(subtractNum(-3));
// console.log(subtractNum(0));

//Task9


//Task10
// function factorialMultiply(n) {
    
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//       result *= i;
//   }
//   return result;
// }
// console.log(factorialMultiply(5));  
// console.log(factorialMultiply(0));


//HW
//Task 1
// function strDiapozone(num) {
//   cnt=""
//   for(let i = 1; i<=num; i++){
//     cnt+=i+",";
//   }
//   return cnt
// }
// console.log(strDiapozone(6));
// console.log(strDiapozone(5));

//Task 5
// function strDiapozone(num,num1) {
//   cnt=""
//   for(let i = num; i<=num1; i++){
//     cnt+=i+",";
//   }
//   return cnt
// }
// console.log(strDiapozone(6,12));
// console.log(strDiapozone(5,10));

//Task 8
// function grades(num) {
//   if (num == 5) {
//     return "Great"
//   }
//   else if (num == 4) {
//     return "Good"
//   }
//   else{
//     return "Will do"
//   }
// }
// console.log(grades(5));
// console.log(grades(4));
// console.log(grades(3));

//Task 6
// function calculator(num,sym,num1) {
//   if (sym == "*") {
//     return num*num1
//   }
//   else if (sym == "+") {
//     return num+num1
//   }
//   else if (sym == "-") {
//     return num-num1
//   }
//   else if (sym == "/") {
//     return num/num1
//   }
// }
// console.log(calculator(1,"*",3));

//Task 10
// function isNum(num) {
//   for (let i = 0; i <=num; i++) {
//     if(num===""+i){
//       return false
//     }
//   }
//   return true
// }
// console.log(isNum(1));




//ClassWork
//TAsk 5
// function strDiapozone(num,num1) {
//   cnt=""
//   for(let i = num; i<=num1; i++){
//     cnt+=i+"cm"+",";
//   }
//   return cnt
// }
// console.log(strDiapozone(6,12));
// console.log(strDiapozone(5,10));

//Task 6
// function endDayFev(num) {
//   if (num%4==0) {
//     return 29
//   }
//   else{
//     return 28
//   }
// }
// console.log(endDayFev(2024));
// console.log(endDayFev(2021));

//Task 7
// function converter(num,val,val1,num1) {
//   return num/num1
// }
// console.log(converter(1000000,"uzb","som",1000));
// console.log(converter(1000,"som","usd",10));
// console.log(converter(1000,"som","uany",2));

//Task 8
// function comision(num,num1) {
//   return num*0.1*num1/10
// }
// console.log(comision(1000,10));
// console.log(comision(1000,1));
// console.log(comision(500,10));

//Task 3
// function funcNN(num1,num2) {
//   let cnt = 0
//   for(let i = num1; i>=1; i=Math.floor(i/10)){
//     if(i%10==num2)cnt++

//   }
//   return cnt
// }
// console.log(funcNN(1111,1));
// console.log(funcNN(323,3));


//Task 9
// function funcNN(num1,num2) {
//   let cnt = ""
//   for(let i = num1; i>=1; i=Math.floor(i/10)){
//     if(i%10==num2)cnt+=i%10
//   }
//   return cnt
// }
// console.log(funcNN(1111,1));
// console.log(funcNN(323,3));

//Task 2
// function testPolindrom(num) {
//   for(let i =2; i<num; i++){
//     if (num%i==0) 
//       return true
    
//   }
//   return false
// }
// console.log(testPolindrom(10));
// console.log(testPolindrom(11));
// console.log(testPolindrom(121));

//HW1
function firstLast(n,m) {
  let text = "ganesh"
}
console.log(text.indexOf(0,-1));