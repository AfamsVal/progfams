import React from 'react'
import comingSoon from '../../assets/coming-soon.png'

const ComingSoon = () => {
  return (
    <section className='grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 md:gap-10 py-40'>
      <div className='w-full grid'>
        <img
          className='w-10/12 lg:w-8/12 justify-self-center md:justify-self-end'
          src={comingSoon}
        />
      </div>
      <div className='grid'>
        <h1 className='text-5xl md:text-4xl lg:text-5xl text-center md:text-left text-blue-900'>
          {' '}
          Were coming soon.
        </h1>
        <p className='text-lg md:text-xl md:pr-8  xl:pr-72 text-center md:text-left md:text-start text-blue-900'>
          Our website is under construction, well be here soon here soon with our new awesome site
        </p>
        <div className='md:grid-cols-4 grid grid-cols-2 my-8 justify-self-center md:justify-self-start w-full xl:w-8/12 '>
          <span className='justify-self-center md:justify-self-start '>
            <h1 className='text-4xl text-blue-900'>504</h1>
            <h4 className='mx-3 text-blue-900'>DAYS</h4>
          </span>
          <span className='justify-self-center md:justify-self-start'>
            <h1 className='text-4xl text-blue-900'>16</h1>
            <h4 className='mx-auto text-blue-900'>HOURS</h4>
          </span>
          <span className='justify-self-center md:justify-self-start'>
            <h1 className='text-4xl text-blue-900'>00</h1>
            <h4 className='mx-auto text-blue-900'>Minute</h4>
          </span>
          <span className='justify-self-center md:justify-self-start'>
            <h1 className='text-4xl ml-2 text-blue-900'>23</h1>
            <h4 className='text-blue-900'>SECONDS</h4>
          </span>
        </div>
        <div className='text-center md:text-left'>
          <i className='fab fa-facebook-f mx-2 text-blue-900' />
          <i className='fab fa-twitter mx-2 text-blue-900' />
          <i className='fab fa-instagram mx-2 text-blue-900' />
          <i className='fab fa-youtube mx-2 text-blue-900' />
          <i className='fab fa-linkedin-in mx-2 text-blue-900' />
        </div>
      </div>
    </section>
  )
}

export default ComingSoon
