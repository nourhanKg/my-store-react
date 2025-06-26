import { useState } from 'react'
import './App.css'
import {Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import PostsPage from './pages/PostsPage'
function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/posts" element={<PostsPage />} />
    </Routes>
  )
}

export default App
