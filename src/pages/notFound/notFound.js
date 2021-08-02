import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <div className='pt-40 w-screen flex justify-center content-center flex-wrap'>
        <p className='mt-16 font-sans text-6xl text-black animate-bounce'>404</p>
      </div>

      <div className='w-screen bottom-0 my-24 text-center font-sans text-xl'>
        <span className='text-black'>Take me back to </span>
        <Link className='border-b text-blue-600' to='/'>
          Home page
        </Link>
      </div>
    </div>
  )
}

export default NotFound
