import React from 'react'
import signupImage from '../../assets/signup-image.jpg'
import loginImage from '../../assets/signin-image.jpg'
import facebook from '../../assets/facebook(1).png'
import google from '../../assets/google-plus.png'
import twitter from '../../assets/twitter(1).png'

const Auth = () => {
  const style = {
    backgroundColor: '#F8F8F8'
  }
  const btnColor = {
    backgroundColor: '#4292DC'
  }

  return (
    <>
      <div className='w-full pb-36 pt-40' style={style}>
        <form className='grid h-full shadow mx-8 bg-white md:grid-cols-2'>
          <div className='grid'>
            <h1 className='text-center pt-8 text-4xl'>Sign Up</h1>
            <div className='pt-8 text-lg mb-4 mx-4 border-2 border-t-0 border-l-0 border-r-0 border-gray-400 outline-none'>
              <i className='fas fa-user' />
              <input className='ml-4' placeholder='Your Name' />
            </div>
            <div className='pt-8 text-lg mb-4 mx-4 border-2 border-t-0 border-l-0 border-r-0 border-gray-400 outline-none'>
              <i className='fas fa-envelope' />
              <input className='ml-4' placeholder='Your Email' />
            </div>
            <div className='pt-8 text-lg mb-4 mx-4 border-2 border-t-0 border-l-0 border-r-0 border-gray-400 outline-none'>
              <i className='fas fa-lock' />
              <input className='ml-4' placeholder='Password' type='password' />
            </div>
            <div className='pt-8 text-lg mb-4 mx-4 border-2 border-t-0 border-l-0 border-r-0 border-gray-400 outline-none'>
              <i className='fas fa-lock' />
              <input className='ml-4' placeholder='Repeat your password' type='password' />
            </div>
            <div className='py-4'>
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
      <div className='w-full pb-36 pt-8' style={style}>
        <form className='grid md:grid-cols-2 h-full  shadow mx-8 bg-white'>
          <div className='grid'>
            <h1 className='text-center pt-8 text-4xl'>Sign Up</h1>
            <div className='pt-8 text-lg mb-4 mx-4 border-2 border-t-0 border-l-0 border-r-0 border-gray-400 outline-none'>
              <i className='fas fa-user' />
              <input className='ml-4' placeholder='Your Name' />
            </div>
            <div className='pt-8 text-lg mb-4 mx-4 border-2 border-t-0 border-l-0 border-r-0 border-gray-400 outline-none'>
              <i className='fas fa-lock' />
              <input className='ml-4' placeholder='Your Name' type='password' />
            </div>
            <div className='py-4'>
              <input className='ml-4' type='checkbox' />
              <label className='mx-8 text-lg'>Remember me</label>
            </div>
            <button
              className='text-white text-lg w-44 h-12 my-8 rounded-md justify-self-center'
              style={btnColor}
            >
              Log in
            </button>
            <div className='flex justify-self-center mt-12'>
              <p className='text-lg pt-4'>Or login with</p>
              <img className='w-12 m-2' src={facebook} />
              <img className='w-12 m-2' src={google} />
              <img className='w-12 m-2' src={twitter} />
            </div>
          </div>
          <div className='grid'>
            <img className='py-16 justify-self-center' src={loginImage} />
            <a className='text-center text-lg pb-16 underline outline-none text-black'>
              Create an account
            </a>
          </div>
        </form>
      </div>
    </>
  )
}
export default Auth
