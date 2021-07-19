import React from 'react';
import ReactDOM from 'react-dom';
import { useState,useEffect } from 'react';
import './Blog.css'
import axios from "axios"
import PopUp from './PopUp';
function Blog() {
  const [posts,setPost] = useState([]) ; 
  const [popUp, setPopUp] = useState(false) ; 
  const [index, setIndex] = useState(null) ; 


	function showPopUp(index) {
		setIndex(index)
		setPopUp(true)
	}

	function closePopUp() {
		setPopUp(false)
	}
  useEffect(async() => {
      axios.get("https://localhost:44361/post/getPosts").then
      (res=>{
          setPost(res.data) ; 
      })
      .catch(err=>{
      })
      
    },[])
  return (  
    posts.map(post=>
      <div class= "containerBlog" key = {post.id} >  
          {popUp ? <PopUp data = {posts.find(post=> post.id == index)} closePopUp = {closePopUp}/> : ""}  
          <div class= "image_big"
            onClick = {
              ()=>{ 
                              
              showPopUp(post.id) ; 
              }
              }>
          <img src={`data:image/png;base64,${post.image}`} class ="image"></img>
          <div class = "middle">

          <div class="text"  >Learn more</div>
          
          </div>

          </div>
          <span class="dot1"></span>
          <span class="dot2"></span>
          <div class ="title"> 
          {post.title}
          </div>
          <br></br>
          <div class ="title"> 
          {post.category}
          </div>
          <div class= "content">{post.content.substring(0,200)}</div>
          <div class ="person">
              <span class="date">{post.PublishingDate}</span>
            </div>               
      </div>
    )
  )
   
  ;
}

export default Blog;