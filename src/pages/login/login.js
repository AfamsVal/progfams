import React from 'react'
import loginImage from '../../assets/signin-image.jpg'
import facebook from '../../assets/facebook(1).png'
import google from '../../assets/google-plus.png'
import twitter from '../../assets/twitter(1).png'

const Login = () => {
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
            <h1 className='text-center pt-8 text-4xl'>Sign in</h1>
            <div className='flex pt-8 text-lg mb-4 mx-4 sm:mx-16 border-b-2 border-gray-400'>
              <i className='fas fa-user pt-2' />
              <input
                className='ml-4 w-full focus:border-gray-800 border-gray-400 outline-none'
                placeholder='Your Name'
              />
            </div>
            <div className='flex pt-8 text-lg mb-4 mx-4 sm:mx-16 border-b-2 border-gray-400'>
              <i className='fas fa-lock pt-2' />
              <input
                className='ml-4 w-full focus:border-gray-800 border-gray-400 outline-none'
                placeholder='Your Name'
                type='password'
              />
            </div>
            <div className='py-4 sm:mx-12'>
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
export default Login
