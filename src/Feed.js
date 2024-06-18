import React from 'react'
import Post from './Post'

const Feed = ({posts}) => {
  return (
    <div>
        {posts.map (posts => (
            <Post key = {posts.id} posts = {posts} />
        ))}
    </div>
  )
}

export default Feed