import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
export default function HomePage() {
  return (
    <>
        <Header/>
            <div className="home-content">
                <h1>Welcome to React Home Page!</h1>
                <p>
                    This page is generated on the client side with a shell Html.
                </p>
                <p>
                    This could be bad for SEO and performance metrics. But is best for higher interactivity.
                </p>
                <p>
                    All components are Client-side rendered.
                </p>
            </div>
		<Footer/>
    </>
  )
}
