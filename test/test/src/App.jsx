import { useEffect } from "react";
import "./App.css";

function App() {
  // {
  //   #imgdiv{
  //     display: flex;
  //     flex-direction : column;
  //     justify-content: center ;
  //     background-color:pink;

  //   }
  // }

  function armstrong(num) {
    let numstr = String(num);
    let length = numstr.length;
    let sum = 0;
    // console.log("length is", length);
    for (let i = 0; i < length; i++) {
      let digit = Number(numstr[i]);
      console.log("digit is", digit);
      sum += Math.pow(digit, length);
    }
    console.log("rslt is", sum);

    if (sum === num) {
      console.log(`${num} is an armstrong`);
    } else {
      console.log(`${num} is not an armstrong`);
    }
  }

  armstrong(153);

  return (
    <>
      <div>
        <h1>hello world</h1>
      </div>
    </>
  );
}

export default App;
