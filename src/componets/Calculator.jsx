import React, { useState } from 'react'
import Button from './Button'


const Calculator = () => {

    const [input1, setInput1] = useState(null);
    const [input2, setInput2] = useState(null);


    const [ result, setResult]=useState(null);

   
    const HandleChnge1 = (e)=>{

        const value = e.target.value
       
            setInput1(value);
    
      
    }

    const HandleChnge2 = (e)=>{
        const value = e.target.value
        setInput2(value);
    }
   
    console.log(input1, input2);
    
    function alertfs(){
        if(input2 === null || input1 === null){
            alert('Input all fields');
        }
    }
    const add =()=>{

        if(input2 === null || input1 === null){
            alert('Input all fields');
            
        }else{
            setResult(Number(input1) + Number(input2)) ;
        }
        
    }
    const sub =()=>{


        alertfs();

        setResult(Number(input1) - Number(input2));
    }
    const mult =()=>{

        alertfs();
        setResult(Number(input1) * Number(input2));
    }

  
    const Reset=()=>{
        setResult(null);
        setInput1('');
        setInput2('');
      
    }
    const resetresult =()=>{
        setResult(null);
    }
  return (
   <div className='flex flex-col justify-center bg-slate-300 p-10 mb-5'>

    <div className='gap-6'>
        <input type='number' className='me-3 p-2 h-10' value={input1} onChange={HandleChnge1}  placeholder='first number'  ></input>
        <input type='number' className='me-2 p-2 h-10 ' value={input2}  onChange={HandleChnge2}  placeholder='second number'  ></input>
       
    </div>
    <div className=' p-10  h-10 justify-center  justify-items-center '><span>{result}</span></div>

   

<div className='flex justify-center gap-3' >
    <Button event={add} name ="add"  />
    <Button event={sub} name ="sub"  />
    <Button event={mult} name ="mult"  />
    <Button event={Reset} name ="reset All"  /> 
    <Button event={resetresult}  name="Reset"></Button>

</div>

   </div>
  )
}

export default Calculator
