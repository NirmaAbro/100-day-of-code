import { useEffect, useState } from "react";
import axios from "axios";

function practice() {
  // console.log("hello world");

  // task 2
  // function Sum(a,b){
  // console.log("sum of a and b is :", a+b);
  // }
  // Sum(2,3);

  // task 3
  // function Area(length, width) {
  //   if (length < 0 || width < 0) {
  //     console.log("length and width should not be less than 0 or negative");
  //     return 0;
  //   }
  //   const rectangle = length * width;
  //   console.log("area of rectangle is:", rectangle);
  //   return rectangle;
  // }

  // Area(9, 4);

  // task 4
  // function IsEven(number) {
  //   if (number < 0 || number > 100) {
  //     console.log("number should be between 0 and 100");
  //   }else{

  //     if (number % 2 == 0) {
  //         console.log("number is even ", number);
  //       } else {
  //         console.log("number is odd", number);
  //       }
  //   }

  //   return number ;
  // }

  // const rslt = IsEven(4);

  // console.log("iuser input number is  :", rslt);

  // const a = +prompt("enter a number");
  // const b = +prompt("enter a number");
  // const c = +prompt("enter a number");

  // if (a > b && a > c) {
  //   console.log("a is largests number");
  // } else if (b > a && b > c) {
  //   console.log("b is largest number");
  // } else {
  //   console.log("c is largest  number");
  // }

  // const Islargest = (a, b, c) => {
  //   if (a > b && a > c) {
  //     console.log("a is largests number",a);
  //   } else if (b > a && b > c) {
  //     console.log("b is largest number",b);
  //   } else if(a===b && b===c){
  //     console.log("all are equal");
  //   }else{
  //     console.log("c is largest  number",c);
  //   }

  //   return a;
  // };

  // Islargest(3, 3, 3);

  // reverse string

  // function reverseString(str){
  //   if(typeof str !== "string"){
  //     return console.log("please enter string");
  //   }

  //   for (let i=str.length-1 ; i>=0 ; i --){
  //     console.log(str[i]);
  //   }
  // }

  // reverseString("hello");

  // let arr = ["nirma", "abro"];

  // arr.map((item) => {
  //   console.log(item.split("").reverse().join(""));
  //   //  split , array innto Character , comma separated , [a,r,d,d, etc]
  //   // reverse : reverse string
  //   // join : again convert string into array
  // });

  // function Factorial(num) {
  //   let rslt =1 ;
  //   for (let i = 1; i <= num; i++) {
  //     console.log(i);
  //      rslt = rslt * i ;
  //   }
  //   console.log("value :", rslt);
  // }

  // Factorial(4);

  // function isLeapYear(year){
  //   if(year%4 === 0 && year%100 !== 0 || year%400 === 0){
  //     console.log("leap year",year);
  //   }else{
  //     console.log("not leap year",year);
  //   }
  // }

  // isLeapYear(2024);

  // function Calculatesum(inputnum){
  //   let sum =0 ;
  //   for (let i=0 ; i <= inputnum; i++){
  //     if(i%2 == 0){
  //       sum = sum + i ;
  //     }
  //   }
  //   console.log("sum of even number is",sum);
  //   return sum ;
  // }

  // console.log(Calculatesum(6));

  // function Calculatesum(inputnum){
  //   if (inputnum < 0 || inputnum > 100) {
  //     console.log("number should be between 0 and 100");
  //   }

  //   if(typeof inputnum !== "number"){
  //     return console.log("please enter number");
  //   }

  //   let sum =0 ;
  //   for (let i=0 ; i <= inputnum; i++){
  //     if(i%2 !== 0){
  //       console.log("i is:",i);
  //       sum = sum + i ;
  //     }
  //   }
  //   console.log("sum of odd number is",sum);
  //   return sum ;
  // }

  // console.log(Calculatesum());

  // function Table(num,tilnum) {
  //   if(typeof num !== "number"){
  //     return console.log("please enter number");
  //   }
  //   if (num < 0 || num > 100) {
  //     console.log("number should be between 0 and 100");
  //   }

  //   if(num % 2 !== 0){
  //     return console.log("please enter even number");
  //   }

  //   for (let i = 1; i <= tilnum; i++) {
  //     console.log("", num, " * ", i, " = ", num * i);
  //   }
  // }

  // Table(3,20);

  // function Maxelement(arr){
  //   let max = arr[0] ;

  //   for (let i = 0; i < arr.length; i++) {
  //     if(arr[i] > max){
  //       max = arr[i];
  //     }
  //   }
  //   console.log("max element is",max);
  //   return max ;
  // }

  // Maxelement([1,2,3,44,5]);

  // function Palindrom(str){
  //   let revstr= str.split("").reverse().join("").toLowerCase();
  //   // let split = str.split("");
  //   // console.log("split",split);
  //   // let reverse= split.reverse();
  //   // console.log("reverse",reverse);
  //   // let revstr = reverse.join("")
  //   // console.log("revstr",revstr);
  //   // let lower = revstr.toLowerCase();
  //   // console.log("lower",lower);

  //   let rstlt =str.toLowerCase();
  //   console.log(revstr);
  //   console.log(rstlt)
  //   if(revstr === rstlt){
  //     console.log("string is palindrom");
  //   }else{
  //     console.log("string is not palindrom");
  //   }
  // }

  // Palindrom("mama");

  //  function Exponent(num,pow){

  //   let rslt=1;
  //   for (let i=0 ; i<=pow ; i++){
  //     rslt= rslt* i
  //     console.log(rslt);
  //   }
  //  }

  //  Exponent(2,3);

  // function Palindrom(str){
  //   let rev = str.split("").reverse().join("").toLowerCase();
  //   if(rev === str.toLowerCase()){
  //     console.log("string is palindrom");
  //     return true;
  //   }
  //   console.log("string is not palindrom");
  //   return false;

  // }
  // Palindrom("red");

  //  function Exponent(base,expo){
  //   let rslt=1;
  //   for (let i=0 ; i<=expo ; i++){
  //     rslt = rslt * expo;
  //     //i 0 ; 0
  //     console.log(`Step ${i}: ${rslt}`);
  //   }
  //   }
  //   Exponent(2,3);

  // function CountVowel(str) {
  //   let countvowel = 0;
  //   let countConsonate = 0;
  //   let vowels = "aeiou";
  //   for (let i = 0; i <= str.length - 1; i++) {
  //     let char = str[i].toLowerCase();
  //     // if (vowels.includes(char)) {
  //     //   countvowel++;
  //     // } else if (char >= "a" && char <= "z") {
  //     //   countConsonate++;
  //     // }

  //     // vowels.includes(char)
  //     //   ? countvowel++
  //     //   : char >= "a" && char <= "z"
  //     //   ? countConsonate++
  //     //   : null;

  //     vowels.includes(char) ? countvowel++ : countConsonate++;
  //   }
  //   console.log("the vowels are", countvowel);
  //   console.log("the consonates are", countConsonate);
  // }

  // CountVowel("iram");

  // function test(num) {
  //   if (typeof num !== "number") {
  //     console.log("invalid input");
  //     return;
  //   }

  //   if (num < 0) {
  //     console.log("number should be greater than zero");
  //     return;
  //   }

  //   for (let i = 1; i <= num; i++) {
  //     if (num % i == 0) {
  //       console.log(`facters of ${num} are`, i);
  //     } else {
  //       console.log("odd are ( else block )", i);
  //     }
  //   }
  // }
  // test(0);

  // function calculateAverage(arr) {
  //   let rslt = 1;
  //   let average = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     // console.log(arr[i]);
  //     rslt = rslt * arr[i];
  //     average = rslt / arr.length;
  //   }

  //   // console.log("rslt value is", rslt);
  //   console.log("average value is", average);
  // }

  // calculateAverage([1, 2, 3, 4, 5]);

  // function calculateInterest(principal, rate, years) {
  //   let interest = (principal * rate * years) / 100;
  //   // 10000 * 10 * 5 / 100 = 500  10050 /100
  //   console.log("interest is", interest);
  //   return interest;
  // }

  // calculateInterest(10000, 10, 5);

  // function isPrime(num) {
  //   if (num < 2) {
  //     return false;
  //   }
  //   for (let i = 2; i < num; i++) {
  //     if (num % i == 0) {
  //       console.log(`${num} is not prime`);
  //       return false;
  //     }
  //   }
  //   console.log(`${num} is prime`);
  //   return true;
  // }
  // isPrime(8);

  // function Count(sen){
  //   let count=0;
  //   for (let i=1 ; i<=sen.length ; i++){
  //     if(sen[i] == " "){
  //       count++;
  //     }
  //   }
  //   console.log(count);
  // }

  // Count("hello nirma i m good");

  // function Temperature(fehrenheit) {
  //   // let celsius = (fehrenheit - 32) * (5 / 9);
  //   // console.log(celsius);
  //   let celcieus = (fehrenheit - 32) * (5/9);
  //   console.log(celcieus);
  // }
  // Temperature(109);

  // function Interchange(num1, num2) {
  //   console.log("num1", num1); //1
  //   console.log("num2", num2); //2
  //   let tem = num2; //2
  //   console.log("temp", tem);
  //   num2 = num1; //1 n2 =1
  //   console.log("num2 after", num2);
  //   num1 = tem;  //2 , n1 2
  //   console.log("num1 after ", num1);
  //   // console.log(num1);
  //   // console.log(num2);
  // }
  // Interchange(1,2);

  function isArmstrong(num) {
    let digits = String(num).split(""); // Convert number to array of digits
    let length = digits.length; // Total digits
    let sum = 0;

    for (let i = 0; i < length; i++) {
      let digit = Number(digits[i]); // Convert string to number
      sum += Math.pow(digit, length); // Raise digit to power of length
    }

    console.log("Sum is:", sum);

    if (sum === num) {
      console.log(`${num} is an Armstrong number `);
    } else {
      console.log(`${num} is NOT an Armstrong number `);
    }
  }

  isArmstrong(153); //  Armstrong
  isArmstrong(222); //  Not Armstrong

  // let arr = [1, 2, 3, 4, 5];
  // let r=arr.map((item, index)=>{
  //   console.log(item);
  // })

  // let filter = arr.filter((item, index)=>{
  //   return item <4 ;
  // })

  // console.log("item" , filter);

  // arr.forEach((item, index)=>{
  //   console.log(item);
  // })

  // useEffect(() => {
  // console.log("use effect called");
  // fetch("https://dummyjson.com/users")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log("data is ", data);
  //   });
  // }, []);

  // useEffect(() => {
  //   let i = 0;
  //   do {
  //     console.log(i);
  //     i++;
  //   } while (i < 3);
  // }, []);

  const [users, setUsers] = useState([]);
  async function fetchData() {
    try {
      // console.log("use effect called");
      // fetch("https://dummyjson.com/users")
      //   .then((res) => res.json())
      //   .then((data) => {
      //     console.log("data is ", data);
      //   });
      let rslt = await axios.get("https://dummyjson.com/users");
      console.log("rslt.data is", rslt.data);
      setUsers(rslt.data.users);
      console.log("rslt is", rslt);
    } catch {
      console.log("catch block called");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {users.map((item, index) => {
        return (
          <div>
            <p key={index}>`my user name is {item.firstName}`</p>
          </div>
        );
      })}
    </>
  );
}

export default practice;
