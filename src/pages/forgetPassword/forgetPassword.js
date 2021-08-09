import React from 'react'
import forgetPass from '../../assets/forgetPassword.png'

const ForgetPassword = () => {
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
            <h1 className='text-center pt-8 text-4xl'>Forget Password</h1>
            <div className='flex pt-8 text-lg mb-4 mx-4 sm:mx-16 border-b-2 border-gray-400'>
              <i className='fas fa-envelope pt-4' />
              <input
                className='ml-4 w-full  focus:border-gray-800 border-gray-400 outline-none'
                placeholder='Your Email'
              />
            </div>
            <div className='flex pt-8 text-lg mb-4 mx-4 sm:mx-16 border-b-2 border-gray-400'>
              <i className='fas fa-lock pt-4' />
              <input
                className='ml-4 w-full focus:border-gray-800 border-gray-400 outline-none'
                placeholder='Your new password'
                type='password'
              />
            </div>
            <div className='py-4 sm:mx-12'>
              <input className='ml-4' type='checkbox' />
              <label className='mx-8 text-lg'>Remember me</label>
            </div>
            <button
              className='text-white text-lg w-44 h-12 my-8 mb-36 rounded-md justify-self-center'
              style={btnColor}
            >
              Forget password
            </button>
          </div>
          <div className='grid'>
            <img className=' justify-self-center' src={forgetPass} />
            <a className='text-center text-lg pb-16 underline outline-none text-black'>Sign in</a>
          </div>
        </form>
      </div>
    </>
  )
}
export default ForgetPassword
