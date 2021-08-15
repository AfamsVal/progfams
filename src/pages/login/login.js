import React from 'react'
import Amava from '../../assets/Amava.png'

const Login = () => {
  return (
    <section className='grid lg:grid-cols-3 pt-20  h-screen'>
      <div className='lg:grid hidden' style={{ backgroundColor: '#1F64E0' }}>
        <div className='justify-self-center w-full mt-8'>
          <img src={Amava} className='w-2/6 mx-auto' />
        </div>
        <div className='text-white self-center justify-self-center'>
          <h1 className='text-white text-5xl text-center'>Join Our Community</h1>
          <p className='text-lg text-center'>
            Build and customize your site visually and create stunning websites.
          </p>
        </div>
        <div className='self-end my-3 grid grid-cols-2'>
          <span className='text-white ml-4 justify-self-center text-lg'>Amava@ 2020</span>
          <span className='text-white self-center justify-self-center mr-4 text-lg'>
            Privacy Terms
          </span>
        </div>
      </div>
      <div className='col-span-2 justify-self-center self-center sm:w-3/6 '>
        <form>
          <h1 className='text-4xl'>
            Welcome to <span style={{ color: '#292DC2' }}>Amava</span>
          </h1>
          <p className='text-lg'>Login to your Account</p>
          <div className='w-full my-6'>
            <label className='text-xl'>Username</label>
            <br />
            <input
              className='w-full h-12 my-2 pl-3 text-lg mt-4  border-gray-400 border outline-none rounded-md'
              placeholder='your username'
            />
          </div>
          <div className='w-full my-6 '>
            <label className='text-xl '>Password</label>
            <br />
            <input
              className='w-full h-12 my-2 mt-4 pl-3 text-lg border-gray-400 border outline-none rounded-md'
              placeholder='your password'
            />
          </div>
          <div className='grid grid-cols-2'>
            <span className='text-lg'>
              <input className='mr-2' type='checkbox' />
              Keep me signed in
            </span>
            <a className='justify-self-end text-lg text-black'>Forget password</a>
          </div>
          <button
            className='w-full py-4 my-4 text-white text-xl rounded-md'
            style={{ backgroundColor: '#292DC2' }}
          >
            Sign in
          </button>
          <div className='grid grid-cols-1'>
            <span className='justify-self-center flex'>
              <h5 className='text-center text-lg'>Dont have an account yet</h5>
              <a className='ml-2 text-lg'>Register</a>
            </span>
          </div>
        </form>
      </div>
    </section>
  )
}
export default Login
