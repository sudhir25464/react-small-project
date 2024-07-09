import React, { useState, useEffect } from 'react'
import Button from './Button'

function ActionComponent() {

    const [count, setCount] = useState(0);

    useEffect(()=>{

        console.log("value is updated", count);

        return ()=>{
            console.log("Component is mounted");
           
        }
    },[count])


    useEffect(()=>{

        console.log("value  is unmounted");

        return ()=>{
            console.log("Component is unmounted");
        }
    },[])
   
    const increase =()=> { if(count>=0){
        setCount(count +1)
    } };

    const decrease =()=> {if(count>=1){ setCount(count - 1)}};

    return (
        <>
            <div className=' justify-center pb-3'>
                <h3>Counter APP</h3>
                <div className='h-20'>
                    <span> {count}</span>
                </div>
                <div className='flex justify-center gap-3'>
                    <Button event={increase} name="+" />
                    <Button  event ={decrease} name="-" />

                </div>
            </div>
        </>
    )
}

export default ActionComponent
