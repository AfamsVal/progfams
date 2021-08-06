import React from 'react'
import signupImage from '../../assets/signup-image.jpg'

const register = () => {
  const style = {
    backgroundColor: '#F8F8F8'
  }
  const btnColor = {
    backgroundColor: '#4292DC'
  }

  return (
    <>
      <div className='w-full pb-36 pt-40' style={style}>
        <form className='grid h-full shadow-md mx-8 bg-white lg:mx-20 md:grid-cols-2 xl:mx-72'>
          <div className='grid'>
            <h1 className='text-center pt-8 text-4xl'>Sign Up</h1>
            <div className='flex pt-8 text-lg mb-4 mx-4 sm:mx-16 border-b-2 border-gray-400'>
              <i className='fas fa-user' />
              <input
                className='ml-4 w-full focus:border-gray-800 border-gray-400 outline-none'
                placeholder='Your Name'
              />
            </div>
            <div className='flex pt-8 text-lg mb-4 mx-4 sm:mx-16 border-b-2 border-gray-400'>
              <i className='fas fa-envelope ' />
              <input
                className='ml-4 w-full focus:border-gray-800 border-gray-400 outline-none'
                placeholder='Your Email'
              />
            </div>
            <div className='flex pt-8 text-lg mb-4 mx-4 sm:mx-16 border-b-2 border-gray-400'>
              <i className='fas fa-lock' />
              <input
                className='ml-4 w-full focus:border-gray-800 border-gray-400 outline-none'
                placeholder='Password'
                type='password'
              />
            </div>
            <div className='flex pt-8 text-lg mb-4 mx-4 sm:mx-16 border-b-2 border-gray-400'>
              <i className='fas fa-lock ' />
              <input
                className='ml-4 w-full focus:border-gray-800 border-gray-400 outline-none'
                placeholder='Repeat your password'
                type='password'
              />
            </div>
            <div className='py-4 sm:mx-12'>
              <input className='ml-4' type='checkbox' />
              <label className='mx-8 text-lg sm:mx-2'>
                I agree all statements in Terms of service
              </label>
            </div>
            <button
              className='text-white text-lg w-44 h-12 justify-self-center  my-8 rounded-md'
              style={btnColor}
            >
              Register
            </button>
          </div>
          <div className='grid'>
            <img className='py-16 justify-self-center' src={signupImage} />
            <a className='text-center text-lg pb-16 underline outline-none text-black'>
              I am already member
            </a>
          </div>
        </form>
      </div>
    </>
  )
}
export default register
