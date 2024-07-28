import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    <section className='notFound' >
      <div className="container">
        <img src="/notFound.svg" alt="not found" />
        <h1>Page Not Found</h1>
        <p>unable to find !</p>
        <Link to={"/"}>Back to Home <span> <HiArrowNarrowRight /></span></Link>
        
            </div>
    </section>
    
    </>
  )
}

export default NotFound
