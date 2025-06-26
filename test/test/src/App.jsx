import { use, useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
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

  // function task(num) {
  //   let number = String(num).split("");
  //   console.log(number);
  //   let sum=0 ;
  //   console.log("ength is", length);
  //   for (let i = 0; i <= number.length-1 ; i++) {
  //     console.log("num[i] is", number[i] * length);
  //     sum += number[i] * length ;

  //   }
  //   console.log("sum is", sum);
  // }

  // task(222);  // 27+27+27 = 81

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

  // const [users, setUsers] = useState([]);

  // async function fetchData() {
  //   try {
  //     // console.log("use effect called");
  //     // fetch("https://dummyjson.com/users")
  //     //   .then((res) => res.json())
  //     //   .then((data) => {
  //     //     console.log("data is ", data);
  //     //   });
  //     let rslt = await axios.get("https://dummyjson.com/users");
  //     console.log("rslt.data is", rslt.data);
  //     setUsers(rslt.data.users);
  //     console.log("rslt is", rslt);
  //   } catch {
  //     console.log("catch block called");
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      <h1>hi form logic building file from app</h1>
    </>
  );
}

export default App;
