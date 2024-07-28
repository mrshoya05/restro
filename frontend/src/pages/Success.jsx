import React, { useEffect, useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom'

const Success = () => {

  const [countDown, setCountdown] = useState(5)
  const navigate = useNavigate()
  useEffect(()=>{
 const timeOutId = setInterval(()=>{
  setCountdown(preCount => {
    if (preCount === 1) {
      clearInterval(timeOutId)
      navigate('/')
  }
  return preCount - 1
});
 },1000)
 return ()=> clearInterval(timeOutId);
  },[navigate])

  return (
    <>
      <section className='notFound'>
        <div className="container">
          <img src="/sandwich.png" alt="success" />
          <h1>Success! redirecting to home {countDown} seconds . . . .</h1>
          <Link to={'/'}> Back to home <span> <HiArrowNarrowRight /></span></Link>
        </div>
      </section>
    </>
  )
}

export default Success
