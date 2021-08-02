import React from 'react'
import { Link } from 'react-router-dom'
import { ABOUT_US, HOW_IT_WORKS, FAQ, PRIVACY_POLICY, COPY_RIGHT } from './constants'
const Footer = () => {
  return (
    <footer className='relative bg-black text-white px-4 py-10'>
      <div className='grid grid-cols-4 gap-1 md:mx-80 mt-10'>
        <div className='mt-3  text-center'>
          <Link to='#' title='' className='footer-links text-white'>
            {ABOUT_US}
          </Link>
        </div>
        <div className='mt-3  text-center'>
          <Link to='#' title='' className='footer-links text-white'>
            {HOW_IT_WORKS}
          </Link>
        </div>
        <div className='mt-3  text-center'>
          <Link to='#' title='' className='footer-links text-white'>
            {FAQ}
          </Link>
        </div>
        <div className='mt-3  text-center'>
          <Link to='#' title='' className='footer-links text-white'>
            {PRIVACY_POLICY}
          </Link>
        </div>
      </div>
      <div className='grid grid-cols-1 gap-1 mx-32 my-10'>
        <hr />
      </div>

      <div className='grid grid-cols-2 gap-1 mx-6 mt-8'>
        <div className='mt-8 lg:mt-0 lg:mx-4 lg:pr-8 '>
          <Link to='#' title='' className=' flex items-center footer-links'>
            <span>
              <i className='fas fa-envelope text-base text-white' />
            </span>
            <span className='ml-3 text-white'>&copy; {COPY_RIGHT} </span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
