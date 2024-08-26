import React from 'react'
import { Link, useParams } from 'react-router-dom'


const PostPage = ({posts,handleDelete}) => {
  const {id} = useParams();
  const post = posts.find(post => (post.id).toString() === id)
  return (
    <main>
      <article>
        {post &&
          <>
            <h2>{post.title}</h2>
            <p>{post.datetime}</p>
            <p>{post.body}</p>
            <button onClick={handleDelete(post.id)}>Delete</button>
          </>
        }
        {!post && 
          <>
            <h2>inga onnum illa home ku poo</h2>
            <Link to='/'>Home ku</Link>
          </>
        }
      </article>
    </main>
  )
}

export default PostPage