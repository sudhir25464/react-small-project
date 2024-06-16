import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)

  const [numberAllowes, setNumberAllowed] = useState(false);

  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");
// password generator
  const passwordGenerator = useCallback(() => {
    let pass = ""
    // let char =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowes) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*"

     

    for (let i = 1; i <=length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }
    setPassword(pass);


  }, [length, numberAllowes, charAllowed, setPassword])

  // copy to click bord
  const passwordRef = useRef(null)

  const CopytoClickBord = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
      window.navigator.clipboard.writeText(password)
  },[password])

  // call function
  useEffect(()=> {
    passwordGenerator();
  }, [length, numberAllowes, charAllowed, passwordGenerator])


  return (
    <>
      <h1 className='bg-black text-white px-4 py-2 font-bold '>Password Generator</h1>

      <div className='w-full max-w-md mx-auto shadow-md p-4 rounded px-4 my-8 text-orange-500 bg-green-500'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
           ref={passwordRef}
          />
          <button onClick={CopytoClickBord} className='flex text-sm gap-x-2 text-black px-2 py-1 text-center'>copy</button>
        </div>

        <div className='flex text-sm gap-2'>
              <div className='flex items-center gap-x-1 text-black text-sm font-bold'>
                <input type='range'
                  min={6}
                  max={50}
                  value={length}
                  className='cursor-pointer'
                  onChange={(e) => { setLength(e.target.value) }}
                />
                <label>Length: {length}</label>
              </div>

          
                
                  <div className='flex items-center gap-x-1'>
                  <input type='checkbox'
                    defaultChecked={numberAllowes}
                    id='numberInput'
                    onChange={() => {
                      setNumberAllowed((prev) => !prev);
                    }}
                  >
                  </input>
                  <label className='text-black'>Number</label>
                  </div>

              <div className='flex items-center gap-x-1'>
              <input type='checkbox'
                defaultChecked={charAllowed}
                id='charaterInput'
                onChange={() => {
                  setcharAllowed((prev) => !prev);
                }}
              >
              </input>
              <label className='text-black'>Character</label>
              </div>

      </div>
       </div>

    </>
  )
}

export default App
