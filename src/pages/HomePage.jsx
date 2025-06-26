import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
export default function HomePage() {
  return (
    <>
        <Header/>
            <div className="home-content">
                <h1>Welcome to Astro SSG Home Page!</h1>
                <p>
                    This page is generated statically at build time for maximum performance.
                    It's perfect for content that doesn't change frequently.
                </p>
                <p>
                    Even though the project's default is Server-Side Rendering, we've explicitly
                    marked this page for Static Site Generation using `export const prerender = true;`
                    in its frontmatter.
                </p>
                <p>
                    The header and footer are React components(Islands), but Astro renders them to static HTML by default, unless you specify a `client:` directive for interactivity.
                </p>
            </div>
		<Footer/>
    </>
  )
}
