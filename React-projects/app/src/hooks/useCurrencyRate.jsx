import React from 'react'
import { useState , useEffect } from 'react'

function useCurrencyRate(currency) {
    console.log("currency",currency);
    
 const [data , setData] = useState(0);
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res)=> setData(res[currency]));
        console.log(data);
    } , [currency]);

    console.log(data);

    return data ;
}

export default useCurrencyRate
