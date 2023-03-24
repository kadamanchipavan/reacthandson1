import './App.css';
import Firstfunction from "./Component/Firstfunction"
import Firstclass from "./Component/Firstclass"
import "./Component/External.css"
import { useState } from 'react';
import React from 'react'

const App = () => {
  const shadow={
    textShadow:"2px 2px 6px blue"
  }
  const flex={
    display:"flex",
    justifyContent:"center"
  }
  const flex_items={
    height:"50px",
    width:"auto",
    margin:"40px",
    borderRadius:"15px",
    backgroundColor:"orangered"
  }
  const flex_itemsforsecondrow={
    margin:"20%"
  }
  const[card,cardone]=useState(false);
  const[card2,cardtwo]=useState(false);

  return (
    <div className='App'>
      <h1 style={shadow}>Styling Using Class And Functional Components</h1>
      <div style={flex}>
   <button style={flex_items} className="change" onClick={()=>{cardone(!card)}}>To See Styling In Functional Components</button>
   <button style={flex_items} className="change" onClick={()=>{cardtwo(!card2)}}>To See Styling In Class Components</button>
      </div>
      <div style={flex}>
        {
          card && <Firstfunction style={flex_itemsforsecondrow}></Firstfunction>
        }
        {
          card2 && <Firstclass style={flex_itemsforsecondrow}></Firstclass>
        }

      </div>
    </div>
  )
}

export default App
