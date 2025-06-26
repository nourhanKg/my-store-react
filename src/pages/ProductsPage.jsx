import React from 'react'
import ProductsList from '../components/Products.jsx'
import Header from '../components/Header.jsx' 
import Footer from '../components/Footer.jsx'
export default function ProductsPage() {
  return (
    <>
		<Header/>
        <div class="container">
          <h2>Our Amazing Products</h2>
        </div>
        <ProductsList />
		<Footer/>
    </>
  )
}
