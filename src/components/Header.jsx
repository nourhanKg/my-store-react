import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
export default function Header() {
  return (
    <header>
        <img src={Logo} alt="My Store Logo"/>
        <span style={{fontSize: "1.5rem"}}>My Store</span>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/products" className="hover:underline">Products</Link></li>
            <li><Link to="/posts" className="hover:underline">Posts</Link></li>
          </ul>
        </nav>
    </header>
  )
}