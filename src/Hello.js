import React, { useState } from 'react'

const Hello = () => {
    const [name,setName]=useState('')
    const [messege,setMessege]=useState('')
    const handleName=(e)=>{
        setName(e.target.value)
    }
    const handleMessege=(e)=>{
        setMessege(e.target.value)
    }
    const submitItems=(e)=>{
        e.preventDefault()
        console.log(name)
        console.log(messege)
    }
  return (
    <div>
       <form onSubmit={submitItems}>
          <input onChange={handleName} type="text"></input>
          <input onChange={handleMessege} type="text"></input>
          <button >Click me</button>

       </form>
    </div>
  )
}

export default Hello
