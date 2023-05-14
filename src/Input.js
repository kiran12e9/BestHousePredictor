import logo from './logo.svg';
import './Input.css';
import Plot from './Plot.js';
import { useState } from 'react';

function Input() {

  const [rows,setRows]=useState(0,0);
  const [cols,setCols]=useState(0,0);
  
  
  function Generatelayout(){

    // var inputcont=document.getElementById('content').innerText;
    // var [inputcont,setInputCont]=useState(inputcont)
    const inputrows=document.getElementById('rows').value
    const inputcols=document.getElementById('cols').value
    setRows(inputrows);
    setCols(inputcols);
  
}


  
  return (
    <div>
      <div className="inputbox">
      <table>
      <tr>
        <td className="inputheading">Enter no of rows:</td>
        <td><input type="text" id="rows" size="15" /></td>
      </tr>

      <tr>
        <td className= "inputheading">Enter no of columns:</td>
        <td><input type="text" id="cols" size="15"/></td>
      </tr>
      </table>
      
      <button className='genbutton' onClick={Generatelayout}>Generate Layout</button>

      </div>
      
      </div>
  );
}


export default Input;
 
