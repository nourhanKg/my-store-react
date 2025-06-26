import React from 'react'
import PostsList from '../components/Posts.jsx'
import Header from '../components/Header.jsx' 
import Footer from '../components/Footer.jsx'

export default function PostsPage() {
  return (
    <>
        <Header/>
        <div class="container">
            <h2>Latest Blog Posts</h2>
        </div>
        <PostsList />
        <Footer/>
    </>
  )
}
