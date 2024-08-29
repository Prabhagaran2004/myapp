import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Edit = ({posts , handleUpdate , editTitle, editBody , setEditBody, setEditTitle}) => {
  const {id} = useParams()
  const post = posts.find(post => post.id.toString() === id)
  useEffect(()=> {
    if(post) {
      setEditTitle(post.title)
      setEditBody(post.body)
    }
  },[post , setEditBody,setEditTitle])
  return (
    <main>
      {editTitle &&
        <>
          <h2>Edit Post</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <label>Title :</label>
            <input
              id='positive'
              type='text' 
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label>Post :</label>
            <input
              id='positive'
              type='text'
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button type='submit' onClick={() => handleUpdate(post.id)}>Submit</button>
          </form>
          </>
      } {!editTitle && 
        <>
          <p>onnume illa</p>
        </>
      }
    </main>
        
  )
}

export default Edit