import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Link to = "/postpage/1" >Post1</Link>
      <br></br>
      <Link to = "/postpage/2" >Post2</Link>
      <br></br>
      <Link to = "/postpage/3" >Post3</Link>
      <br></br>
      <Link to = "/postpage/newpost" >NewPost</Link>
      <Outlet />
    </div>
  )
}

export default Layout