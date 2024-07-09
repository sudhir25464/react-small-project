import React, { useState, useRef, useEffect } from 'react'

function UseRefHook() {

    const [input, setInput]=useState('')

    const [ generate, setGenerate]=useState('');
    const inputIn = useRef("");
    const prevState = useRef("");

    console.log(inputIn);

    const HandleChange =(e)=>{

        const value = e.target.value;
        setInput(value);
    
        
    }

    useEffect(()=>{

        prevState.current = generate 

    },[generate])


    console.log(input);
   
    const HandleClear =() =>{

        setInput('');
        inputIn.current.focus();
    }

  return (
   <>
   <div className='border p-20  mb-4'>
   <h2 className='text-3xl  font-semibold mb-2'>UseRef Hook</h2>
   <div>
   <input className='p-2 mt-2 w-100 me-2  bg-slate-100' ref={inputIn} value={input} onChange={HandleChange} type='text' placeholder='Enter text'></input>
   <button className='bg-gray-800 px-10 py-2  rounded text-white font-semibold' onClick={HandleClear} >Clear</button>
   <p className='p-5'>Preview : {input}</p>

   <div>
    <p className=' font-semibold text-lg'>Current Number {generate}</p>
    <p>PrevNumber {prevState.current}</p>
    <button className='bg-blue-500 px-10  mt-3 py-2 rounded text-white font-semibold' onClick={()=>setGenerate(Math.floor(Math.random()*100))}>Random Number</button>
   </div>
   </div>
   </div>
   </>
  )
}

export default UseRefHook
