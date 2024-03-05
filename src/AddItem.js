import React from 'react'
import { useRef } from 'react'

const AddItem = ({newPorul,setnewPorul,seeru}) => {

  const input = useRef()
  return (
    <form onSubmit={seeru}>
        <label>Add item</label>
        <input type='text' ref={input} value={newPorul} onChange={(e) => setnewPorul(e.target.value)} />
        <button onClick={()=> input.current.focus()}>submit</button>
    </form>
  )
}

export default AddItem