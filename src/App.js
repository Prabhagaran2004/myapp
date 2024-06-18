import { Routes,Route, Link } from "react-router-dom";
import React from "react";
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

function App() {
  const [posts,setPosts] = useState([
    {
      id : 1,
      title : "Chest Workout",
      datetime : "Today"
    },
    {
      id : 2,
      title : "Arms Workout",
      datetime : "Tomorrom"
    },
    {
      id : 3,
      title : "Leg Workout",
      datetime : "Day after tomorrow"
    }
    
  ])
  const [search,setSearch] = useState('')
  const [result,setResult] = useState([])
 
  return (
    <div className="App">
      <Header title = "GYMRATS MEDIA"/>
      <Nav 
        search = {search}
        setSearch = {setSearch}
      />
      <Home 
        posts = {posts}
      />
      <NewPost />
      <PostPage />
      <About />
      <Missing />
      <Footer />
    </div>
  );
}

export default App;
