import React, { useState } from 'react'

export const CurrencyConverter = () => {
    const [length,setLength] =useState(0);
    const [lowerCase,setLowerCase] =useState(false);
    const [upperCase,setUpperCase] =useState(false);
    const [number,setNumber] =useState(false);
    const [symbol,setSymbol] =useState(false);
    const [answer,setAnswer] =useState("");
    const generatePassword =() =>{
        const alphaCaps ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const alphaSmall ="abcdefghijklmnopqrstuvwxy"
        const numbers ="1234567890"
        const symbols ="~@#$%^&*()_+"
        let totalPassword ="";
        let finalPassword ="";
        if(upperCase) totalPassword +=alphaCaps;
        if(lowerCase) totalPassword +=alphaSmall;
        if(number) totalPassword += numbers;
        if(symbol) totalPassword += symbols;
        for(let i =0;i<length;i++)finalPassword += totalPassword.charAt(Math.random()*totalPassword.length)
        setAnswer(finalPassword);
    }
  return (
    <>
        <div className="container">
            <header>strong password generator</header>
            <div className="num">
                <label  htmlFor="num">Password Length:</label>
                <input onChange={(e) =>setLength(e.target.value)} id ="num" type="number" />
            </div>
            <div className="option">
                <div className="options">
                    <input onChange={(e) =>setUpperCase(e.target.checked)}   id ="uppercase" type="checkbox" />
                    <label htmlFor="uppercase">Include Uppercase</label>
                </div>
                <div className="options">
                    <input onChange={(e) =>setLowerCase(e.target.checked)} id ="Lowercase" type="checkbox" />
                    <label htmlFor="Lowercase">Include Lowercase</label>
                </div>
                <div className="options">
                    <input onChange={(e) =>setNumber(e.target.checked)} id ="Numbers" type="checkbox" />
                    <label htmlFor="Numbers">Include Numbers</label>
                </div>
                <div className="options">
                    <input onChange={(e) =>setSymbol(e.target.checked)} id ="Symbol" type="checkbox" />
                    <label htmlFor="Symbol">Include Symbol</label>
                </div>
            </div>
            <div className="generatePassword">
                <button onClick={generatePassword}>Generate Password</button>
            </div>
            <div className="finalAnswer">
                <div className="answer">
                    <input value={answer} onChange={(e) =>setAnswer(e.target.value)} type="text" />
                    <button onClick={() =>{navigator.clipboard.writeText(answer); alert("Copied successfully!!!")}}>Copy</button>
                </div>
            </div>
        </div>
    </>
  )
}
