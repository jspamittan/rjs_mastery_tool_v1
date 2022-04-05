import React from 'react'
import { useState } from 'react';
//import { TextField } from '@mui/material';
import OutsideClickHandler from 'react-outside-click-handler';
 
const Headers = () => {
  const [hidden, setHidden] = useState(false);
  const [input, setInput] = useState('Text Input');

  const getValue = (event) => {
    console.log('Input: ', event.target.value);
    setInput(event.target.value);
  }
  // console.log(setInput);
  return (
    <>
        <div className="p-3 bg-white w-100 h-100">
          <span className="border border-secondary bg-white p-2 h-25" >Header</span>
          <div className="center mx-auto">
            <OutsideClickHandler 
              onOutsideClick={() =>{
                setHidden(false);
            }}>
                <div className="border-secondary rounded pointer page-header w-50 bg-light text-primary center" onDoubleClick={() => setHidden(true)} onClick={() => setHidden(false)} >{input}</div>
              {hidden && (
                <input type="textarea" id="displayInput" className='position-absolute' value={input} placeholder="Type Here" onChange={getValue} />   
              )} 
            </OutsideClickHandler>
          </div>
        </div>
    </>
  )
}

export default Headers;