for in loop objects ki keys ko loop in  krta ha , 
for of loop object ki values ko loop in krna hoto ya use hota ha 

**slice()** method, which is commonly used to create a shallow copy of a portion of an array without modifying the original array.

**splice()**, which is a powerful method in JavaScript for adding/removing/replacing items in an array.

let people = [
  { name: "Ali", age: 22 },
  { name: "Zara", age: 19 },
  { name: "Ahmed", age: 25 }
];

people.sort((a, b) => a.age - b.age);  // Sort by age

console.log(people);

<!-- new  -->
let events = [
  { title: "Meeting", date: new Date("2024-05-10") },
  { title: "Conference", date: new Date("2025-01-20") },
  { title: "Webinar", date: new Date("2023-12-01") }
];

events.sort((a, b) => b.date - a.date);  // Latest to earliest

console.log(events);
/*
Output:
[
  { title: "Conference", date: 2025-01-20 },
  { title: "Meeting", date: 2024-05-10 },
  { title: "Webinar", date: 2023-12-01 }
]
*/


let arr= [2,4,5,2,3,3,22,44];

// let rslt=arr.forEach((v)=>{
//     console.log("arr inner:",v+1);
// })
// console.log("after :",rslt); 
//rslt undefine coz ya new array return nhi krta 

// let rslt = arr.map((value,index,arrayy)=>{
//     console.log("arr map  :",value , "index:",index);
// })
// console.log("map arr  :",rslt);  
//return new arr , coz yaha ya new arr bnata ha 


let users = [
  { name: "Ali", age: 22 },
  { name: "Zara", age: 19 },
  { name: "Ahmed", age: 25 }
];

// users.forEach((value)=>{
//     console.log("values :",value)
// })

// let namee=users.map((val,index)=>{
//     console.log("new arr:", val.name);
//     return val.name
// })
// console.log("name:",namee)

let agee=users.map((val,index)=>{
    console.log("age:",val.age);
    console.log("new age:", val.age+1);
    return val.age+1;
})

console.log("age:",agee);

let students = [
  { name: "Ali", score: 85, gender: "male" },
  { name: "Zara", score: 92, gender: "female" },
  { name: "Ahmed", score: 70, gender: "male" },
  { name: "Ayesha", score: 95, gender: "female" },
  { name: "Bilal", score: 55, gender: "male" }
];

// let female=students.filter((v)=>{
//      console.log("value:,",v);
//     return v.gender="female";
// })
// console.log("female :",female);


// let male=students.filter((v)=>{
//     return v.gender="male";
// })

// console.log("male:",male);


let score=students.filter((v)=>{
    return  v.gender="male" && v.score>80;
    
})

console.log("marks:",score);

let users = [
  { name: "Sara", age: 24, city: "Karachi" },
  { name: "Ali", age: 17, city: "Lahore" },
  { name: "Usman", age: 20, city: "Karachi" },
  { name: "Hina", age: 19, city: "Islamabad" },
  { name: "Tariq", age: 23, city: "Lahore" }
];

// et users who are from Karachi and above 18 years old.
// Then, use .map() to return only their names.

let person=users.filter((v)=>{
    return  v.city==="Karachi" && v.age>18;
    
})
let rslt=person.map((p)=>{
    console.log("person name is :",p.name)
    return p.name
})
console.log("person live in karachi age greater than 18 is ",rslt);


// You have a list of employees and you want to:
// Get only employees from the "IT" department
// Whose salary is more than 60,000
// Then return a new array of objects that contains just their name and salary only

let employees = [
  { name: "Amna", salary: 75000, department: "IT" },
  { name: "Bilal", salary: 45000, department: "HR" },
  { name: "Saad", salary: 62000, department: "IT" },
  { name: "Nida", salary: 58000, department: "Finance" },
  { name: "Usman", salary: 80000, department: "IT" }
  ];
  
  let employee=employees.filter((e)=>{
      return e.department==="IT" && e.salary>60000
  })
  .map((n)=>{
      console.log("n:",n);
      return {
          name:n.name,
          salary:n.salary,
      };
  })
  
  console.log("rslt :",employee);
  
  <!-- new  -->

let randomNumber=Number.parseInt(Math.random()*100)+1;
console.log("randome number:", randomNumber);
let guessCount=0;
let guess;
let score;

while(true){
   guess=parseInt(prompt("guess any number betweeb 1 to 100"));
   guessCount++;
   if(guess==randomNumber){
       console.log("yaho you win");
   }else if(guess > randomNumber){
       console.log("gues number is greater than actual");
   }else if(guess < randomNumber){
       console.log("guess is less tahn number");
   }else{
       console.log("invalid input");
   }
   
   
}


   score=2-guessCount;
   alert("your trail exeed");

  <!-- snake game  -->

  let choices=["S", "W", "G"]
let Input;
while (true) {
     let input = prompt("Enter S, W, or G:");
    Input = input.toUpperCase();
    if (choices.includes(Input)) break;
    alert("Invalid input. Try again.");
}

let index=Math.floor(Math.random()*3)
let compChoice = choices[index];
console.log("c:",compChoice);

if(Input===compChoice){
    console.log("Draw");
}else if(Input === "S" && compChoice ==="W"){
    console.log("user wins ")
}else if(Input === "G" && compChoice==="W" ){
    console.log("user wins ")
}else if(Input === "G" && comChoice=== "S"){
    console.log("user wins ")
}else{
    console.log("computer wins");
}



<!-- setinterval , settiemout  -->
useEffect(()=>{
const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000); // every second

    // ✅ Clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  💼 Real-World Project Use Cases:
✅ setTimeout — One-time delayed actions
Use Case	Example
User notification	Show "Welcome back!" after page loads for 2 seconds
Redirect after action	Redirect to login page after logout
Debouncing	Delay API call after user stops typing
Animation start delay	Start animation after page load

js 
Copy
Edit
setTimeout(() => {
  showToast("Saved!");
}, 2000);
✅ setInterval — Repeating tasks
Use Case	Example
Auto-refresh data	Fetch latest chat messages every 5 seconds
Countdown timer	Update countdown on screen every second
Slideshow/Carousel	Change slide every few seconds
Real-time clocks	Update time on screen in real-time


<!-- call back hell  -->

function fetchData(callback) {
  setTimeout(() => {
    callback(); // calling the function after task is done
    console.log("Data fetched");
    // callback(); // calling the function after task is done
  }, 2000);
}

function processData() {
  console.log("Processing data");
}

fetchData(processData);








some practical solved questions

const Practice = () => {
  let names = {
    name: "nirma",

    age: 21,
    gender: "female",
    cnic: 6555167272,
  };

  for (let name in names) {
    console.log("names :", name);
    for (let i = 0; i <= names; i++) {
      console.log("obj :", names[i]);
    }
  }

  let str = "hi my name is nirma my age is 21";
  // console.log("name :",str.split(""));
  let strr = Number.parseInt(
    str.slice("hi my name is nirma my age is 21".length)
  );
  console.log(typeof strr);

  // for(let i of str){
  //     console.log("str :",i);
  // }

  let arr = [1, 4, 2, 5, 3, 2, 44];
  console.log("arr : before", arr);
  let removed = arr.splice(2, 2, 33, 33, 22);
  console.log("Removed:", removed); // Output: [2, 5]
  console.log("after arr: ", arr);


console.log("arr ; ",arr);
let newarr=arr.slice(2);
console.log("newarr",newarr);


// let sort=arr.sort();
let sort = arr.sort((a, b) => a - b); // for ascending numerical 
console.log("arr sort ",sort);
arr.forEach((ele)=>{
    console.log("ele:",ele);
})



// let rslt=arr.forEach((v)=>{
//     console.log("arr inner:",v+1);
// })
// console.log("after :",rslt); 
//rslt undefine coz ya new array return nhi krta 

// let rslt = arr.map((value,index,arrayy)=>{
//     console.log("arr map  :",value , "index:",index);
// })
// console.log("map arr  :",rslt);  
//return new arr , coz yaha ya new arr bnata ha 


function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 2000);
  });
}

fetchData()
  .then(result => {
    console.log(result);
    return "Next step";
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });



  // call back 
  function greet(name, callback){
    console.log("name:",name);
    callback();  //this is call 
}

function hello(){
    console.log("hi hope you are doing well");
}

greet("nirma",hello);


// call back hell 
setTimeout(()=>{
  console.log("step one")
  setTimeout(()=>{
  console.log("step two")
  setTimeout(()=>{
        console.log("step three")
        setTimeout(()=>{
              console.log("step four");
        },2000)
  },2000)
  },2000)
},2000)

//this i scalll back hell 


// handling asyncronneous  operation 
function tea(){
  return new Promise((res,rej)=>{
      setTimeout(()=>{
          res("boil milk");
      },2000);
  })
}

function AddPatti(){
  return  new Promise((res,rej)=>{
      setTimeout(()=>{
           res("add patti");
      },2000)
     
  })
}


function AddSugar(){
  return new Promise((res,rej)=>{
      setTimeout(()=>{
          res("Add Sugar");
      },2000);
  })
}

// tea()
// .then((res)=>{
//     console.log(res);
//     return AddPatti();
// })
// .then((res)=>{
//     // console.log(".then console:",res);
//     return AddSugar();
// })
// .then((res)=>{
//     console.log(res);
//     return console.log("tea is ready !");
// })
// .catch((err)=>{
//     console.log("err whilte making tea",err);
// })

async function flow(){
  try{
      const teaa=await tea();
  console.log(teaa);
  
     const patti=await AddPatti();
  console.log(patti);
  
     const sugar=await AddSugar();
  console.log(sugar);
  
  alert("tea is ready");
  }catch(err){
      console.log("error acccor:",err)
  }
  
}

flow();

//  firstyly call back , call back hell , promises , then final solutionis asyn await function , solve all then problem and make thme easy to write processs , that we found in previous syntax 


  return (
    <div>
      <h1>hii from practice</h1>
    </div>
  );
};

export default Practice;
