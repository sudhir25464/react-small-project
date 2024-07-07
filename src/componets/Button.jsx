import React from 'react'

function Button({name ,event}) {
  return (
    <div>
    <button onClick={event} className='bg-slate-400 px-3 border'>{name}</button>
    </div>
  )
}

export default Button
