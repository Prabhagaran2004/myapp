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
      
    </article>
  )
}

export default Post