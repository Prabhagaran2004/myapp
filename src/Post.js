import React from 'react'

const Post = ({posts}) => {
  return (
    <article>
      <h2>{posts.title}</h2>
      <p>{posts.datetime}</p>
    </article>
  )
}

export default Post