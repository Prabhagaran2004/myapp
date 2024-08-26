import { Routes,Route, Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Post from "./Post";
import Layout from "./Layout";
import { useState } from "react";
import { format } from "date-fns/format";

function App() {
  const [posts,setPosts] = useState([])
  const [search,setSearch] = useState('')
  const [result,setResult] = useState([])
  const [postTitle,setPostTitle] = useState('')
  const [postBody,setPostBody] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const filterResult = posts.filter((post) => 
    ((post.body).toLowerCase()).includes(search.toLowerCase()) ||
    ((post.title).toLowerCase()).includes(search.toLowerCase())
    )
    setResult(filterResult.reverse())
  },[posts,search])
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length -1].id +1 : 1
    const datetime = format(new Date(),'MMMM dd, yyyy pp')
    const newpost = {id , title: postTitle,datetime, body : postBody}
    const allpost = [...posts,newpost]
    setPosts(allpost)
    setPostTitle('')
    setPostBody('')
    navigate('/')
  }

  const handleDelete = (id) => {
    const postDelete = posts.filter(posts => posts.id === id)
    setPosts(postDelete)
    navigate('/')
  }
 
  return (
    <div className="App">
      
      <Header title = "GYMRATS MEDIA"/>
      <Nav 
        search = {search}
        setSearch = {setSearch}
      />
      <Routes>
        <Route path="/" element = {<Home 
          posts = {result}/>} />
        <Route path="post">
          <Route index element= {<NewPost 
            handleSubmit={handleSubmit}
            postBody={postBody}
            postTitle={postTitle}
            setPostBody={setPostBody}
            setPostTitle={setPostTitle} 
          />}/>
          <Route path=":id" element = {<PostPage posts={posts} handleDelete = {handleDelete} />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
