import React from 'react'
import recover from '../../assets/recover.png'

const recoverAccount = () => {
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
            <h1 className='text-center pt-8 text-4xl'>Recover Account</h1>
            <button
              className='text-white text-lg w-44 h-12 my-8 mb-36 rounded-md justify-self-center'
              style={btnColor}
            >
              Recover Account
            </button>
          </div>
          <div className='grid'>
            <img className=' justify-self-center' src={recover} />
            <a className='text-center text-lg pb-16 underline outline-none text-black'>Sign in</a>
          </div>
        </form>
      </div>
    </>
  )
}
export default recoverAccount
