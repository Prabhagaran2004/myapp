import React from 'react'

const NewPost = ({handleSubmit,postBody,postTitle,setPostBody,setPostTitle}) => {
  return (
    <main>
      <h2>New Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Title :</label>
        <input
          type='text'
          required
          value={postTitle}
          onChange={(e)=>{setPostTitle(e.target.value)}}
        />
        <label>Post :</label>
        <input
          required
          value={postBody}
          onChange={(e)=>{setPostBody(e.target.value)}}
        />
        <button type='submit'>Submit</button>
      </form>
    </main>
  )
}

export default NewPost