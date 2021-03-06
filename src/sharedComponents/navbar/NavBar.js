/* eslint-disable no-undef */
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import classnames from 'classnames'

const NavBar = () => {
  const { pathname } = useLocation()
  const [nav, setNav] = useState(true)
  return (
    <nav className='flex items-center justify-between flex-wrap bg-white px-4 py-3 fixed w-full z-50'>
      <Link to='/'>
        <div className='flex items-center flex-shrink-0 text-blacker mr-6'>LOGO</div>
      </Link>
      <div className='block lg:hidden'>
        <button
          onClick={() => setNav(navToggle => !navToggle)}
          className='flex items-center px-3 py-2 border rounded text-black border-gray-500 hover:text-white hover:border-white'
        >
          <i className='fas fa-bars' />
        </button>
      </div>

      <div
        className={classnames(
          'w-full block flex-grow lg:flex lg:items-center lg:w-auto transition-all duration-500 ease-in-out mt-1',
          {
            hidden: nav
          }
        )}
      >
        <div className='lg:flex-grow lg:text-right text-base'>
          <Link
            to='/'
            className={`${
              pathname === '/'
                ? 'border-b-2 border-purple-800 font-bold text-primary'
                : 'text-black'
            } block ml-4 mt-4 lg:inline-block lg:mt-0  hover:text-primary mr-6`}
          >
            Home
          </Link>

          <Link
            to='/about'
            className={`${
              pathname === '/about'
                ? 'border-b-2 border-purple-800 font-bold text-primary'
                : 'text-black'
            } block ml-4 mt-4 lg:inline-block lg:mt-0 hover:text-primary mr-6`}
          >
            About
          </Link>
          <Link
            to='/faq'
            className={`${
              pathname === '/faq'
                ? 'border-b-2 border-purple-800 font-bold text-primary'
                : 'text-black'
            } block ml-4 mt-4 lg:inline-block lg:mt-0 hover:text-primary mr-6`}
          >
            FAQ
          </Link>

          <Link
            to='/courses'
            className={`${
              pathname === '/courses'
                ? 'border-b-2 border-purple-800 font-bold text-primary'
                : 'text-black'
            } block ml-4 mt-4 lg:inline-block lg:mt-0 hover:text-primary mr-6`}
          >
            Courses
          </Link>
          <Link
            to='/contact-us'
            className={`${
              pathname === '/contact-us'
                ? 'border-b-2 border-purple-800 font-bold text-primary'
                : 'text-black'
            } block ml-4 mt-4 lg:inline-block lg:mt-0 hover:text-primary mr-6`}
          >
            Contact Us
          </Link>
        </div>
        <div>
          <Link
            to='/login'
            className='inline-block ml-4 text-sm px-6 py-3 leading-none border rounded text-black border-purple-800 hover:border-purple-900 hover:bg-primary hover:text-white mt-4 lg:mt-0'
          >
            Login
          </Link>
          <Link
            to='/register'
            className='inline-block ml-4 text-sm px-6 py-3 leading-none border rounded text-white bg-primary  hover:border-purple-900 hover:bg-primary border-purple-800  hover:text-white mt-4 lg:mt-0'
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
