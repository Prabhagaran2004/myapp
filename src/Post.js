import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({post}) => {
  return (
    <article>
      <Link to={`post${post.id}`}>
        <h2>{post.title}</h2>
        <p>{post.datetime}</p>
      </Link>
      <h4>{post.body}</h4>
      <Link to ={`/edit/${post.id}`}>
        <button>Edit Post</button> 
      </Link>
    </article>
  )
}

export default Post