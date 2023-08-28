import React from 'react'
import { useSelector } from 'react-redux'
// import { selectAllPosts } from '../featuers/postSlice'

const Post = () => {
    const posts = useSelector(state=>state.posts)
      
    const renderPost = posts.map((item,id)=>(
        <div >
        <article key={item.id} style={{border:"2px solid gray"}}>
        <h3>{item.title}</h3>
        <h3>{item.description}</h3>
        </article>
        </div>
    ))
  return (
    <div style={{alignItems:"center"}}>
    <h2>Posts</h2>
      {renderPost}
    </div>
  )
}

export default Post
