import React from 'react'

import dan from '../../assets/dan.jpg'
import logoFoter from '../../assets/logo-footer.png'
import facebook from '../../assets/facebook-icon.png'
import linkedln from '../../assets/linkedln.png'
import twiiter from '../../assets/twitter.png'
import vimeo from '../../assets/vimeo.png'
import next from '../../assets/next.png'
import arrow from '../../assets/arrow.png'

const ContactUs = () => {
  const style = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.596),rgba(0, 0, 0, 0.671)),url(${dan})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '80vh'
  }
  return (
    <main>
      <section className='grid' style={style}>
        <div className='self-center text-center'>
          <h1 className='text-white text-4xl lg:text-6xl'>Contact Us</h1>
          <a className='text-white lg:text-2xl'>Home / </a>
          <a className='text-white lg:text-2xl'> Contact Us</a>
        </div>
      </section>
      <section className='grid md:grid-cols-2'>
        <div className='justify-self-start ml-5 md:justify-self-center my-6'>
          <h1 className='text-3xl m-4'>Contact Us</h1>
          <div className='flex my-2'>
            <span className='mt-4 bg-gray-50 py-1 px-3 border rounded-full'>
              <i className='fas fa-mobile-alt text-4xl text-red-500 m-4' />
            </span>
            <p className='m-4 leading-10'>
              +88 0123 456 789 <br />
              +88 987 654 3210
            </p>
          </div>
          <div className='flex'>
            <span className='mt-4 bg-gray-50 py-1 px-2 border rounded-full'>
              <i className='far fa-envelope text-4xl text-red-500 m-4' />
            </span>
            <p className='m-4 leading-10'>
              info@biztrox.com <br /> biztrox@email.com
            </p>
          </div>
          <div className='flex my-2'>
            <span className='mt-4 bg-gray-50 py-1 px-3 border rounded-full'>
              <i className='fas fa-map-marker-alt text-4xl text-red-500 m-4' />
            </span>
            <p className='m-4 leading-10'>
              24/B Garden Street. <br /> Northambia, Weals, UK
            </p>
          </div>
        </div>
        <div className='ml-6'>
          <form className='shadow-2xl lg:w-8/12 my-6 w-10/12 sm:w-9/12'>
            <h1 className='text-center text-3xl my-8'>Contact Us</h1>
            <div className='w-full my-6 px-8 grid lg:grid-cols-2 lg:gap-10 gap-5'>
              <input
                className=' h-12 border border-gray-500 outline-none rounded-md pl-2'
                placeholder='Name'
              />
              <input
                className=' h-12 border border-gray-500 outline-none rounded-md pl-2'
                placeholder='Email Address'
              />
            </div>
            <div className='w-full my-5 px-8'>
              <input
                className='w-full h-12 border border-gray-500 outline-none rounded-md pl-2'
                placeholder='Subject'
              />
            </div>
            <div className='w-full px-8'>
              <textarea
                className='w-full h-32 border border-gray-500 mb-5 outline-none rounded-md pt-2 pl-2'
                placeholder='Your Message Here'
                // style={{ height: '10rem' }}
              />
            </div>
            <button className='py-4 ml-8 bg-red-500 px-16 rounded-3xl text-md text-white m-4'>
              Submit Now
            </button>
          </form>
        </div>
      </section>
      <section
        className='lg:grid bg-gray-200 w-full pb-32  lg:grid-cols-4     '
        style={{ backgroundColor: '#303032' }}
      >
        <div className='py-8'>
          <img className='mx-auto my-4' src={logoFoter} alt />
          <p className='text-white mx-auto my-6 px-12'>
            Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt labore
            dolore magna aliqua enim.
          </p>
          <div className='flex justify-center'>
            <img className='w-12 m-2' src={facebook} />
            <img className='w-12 m-2' src={linkedln} />
            <img className='w-12 m-2' src={vimeo} />
            <img className='w-12 m-2' src={twiiter} />
          </div>
        </div>
        <div className='grid grid-cols-2 lg:mt-12'>
          <div className='ml-4'>
            <h1 className='text-white text-lg'>Services</h1>
            <div className='flex my-2'>
              <img className='w-4 h-4 mt-1' src={next} />
              <p className='text-white text ml-1'>About Us</p>
            </div>
            <div className='flex'>
              <img className='w-4 h-4 mt-1' src={next} />
              <p className='text-white ml-1'>Contact Us</p>
            </div>
            <div className='flex my-2'>
              <img className='w-4 h-4 mt-1' src={next} />
              <p className='text-white ml-1'>Service</p>
            </div>
            <div className='flex'>
              <img className='w-4 h-4 mt-1' src={next} />
              <p className='text-white ml-1'>Privacy policy</p>
            </div>
          </div>
          <div className='ml-4 '>
            <h1 className='text-white text-lg'>Quick Link</h1>
            <div className='flex my-2'>
              <img className='w-4 h-4 mt-1' src={next} />
              <p className='text-white ml-1'>About Us</p>
            </div>
            <div className='flex'>
              <img className='w-4 h-4 mt-1' src={next} />
              <p className='text-white ml-1'>Contact Us</p>
            </div>
            <div className='flex my-2'>
              <img className='w-4 h-4 mt-1' src={next} />
              <p className='text-white ml-1'>Service</p>
            </div>
            <div className='flex'>
              <img className='w-4 h-4 mt-1' src={next} />
              <p className='text-white ml-1'>Privacy policy</p>
            </div>
          </div>
        </div>
        <div className='py-4 col-span-2 lg:mt-8 justify-self-center'>
          <h1 className='text-center text-white text-2xl '>Subscribe Us</h1>
          <p className='text-center mx-auto text-white'>
            Lorem ipsum dolor sit amet, consect etur adipisicing. elit sed do eiusmod
          </p>
          <div className='border-2  h-12 rounded-3xl bg-white w-10/12 mx-auto'>
            <input
              className='w-4/5 h-full  rounded-3xl px-2 border-0 outline-none inline'
              placeholder='Enter Your Email'
            />
            <img className='w-10 p-2 rounded-3xl inline' src={arrow} alt='alt' />
          </div>
        </div>
      </section>
    </main>
  )
}
export default ContactUs
