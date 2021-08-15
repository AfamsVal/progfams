import React from 'react'
import dan from '../../assets/dan.jpg'
import philosophy from '../../assets/philosophy.jpg'
import phoneman from '../../assets/phoneman.PNG'
import signature from '../../assets/ceo-signature.png'
import handshake from '../../assets/handshake.jpg'

import trophy from '../../assets/trophy.png'
import stack from '../../assets/stack.png'
import thumb from '../../assets/thumbs.png'
import smile from '../../assets/smile.png'
import client from '../../assets/client.png'
import logoFoter from '../../assets/logo-footer.png'
import facebook from '../../assets/facebook-icon.png'
import linkedln from '../../assets/linkedln.png'
import twiiter from '../../assets/twitter.png'
import vimeo from '../../assets/vimeo.png'
import next from '../../assets/next.png'
import arrow from '../../assets/arrow.png'

const AboutUs = () => {
  const style = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.596),rgba(0, 0, 0, 0.671)),url(${dan})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '80vh'
  }
  return (
    <main className='w-full h-full pt-16 grid'>
      <section className='grid' style={style}>
        <div className='self-center text-center'>
          <h1 className='text-white text-4xl lg:text-6xl'>About Us</h1>
          <a className='text-white lg:text-2xl'>Home / </a>
          <a className='text-white lg:text-2xl'> About Us</a>
        </div>
      </section>
      <section className='grid lg:grid-cols-2'>
        <div className='justify-self-center w-full grid lg:self-center'>
          <img className=' sm:w-2/3 lg:w-10/12 justify-self-center ' src={philosophy} />
        </div>
        <div className='justify-self-center lg:justify-self-start min-h-0 sm:w-2/3 ml-4'>
          <div className=''>
            <h1 className='text-xl mt-8'>Know About</h1>
            <h6 className='text-3xl'>Our Philosophy</h6>
            <hr className='mb-8 border-2 border-red-400 w-20' />
            <p className=''>
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor didunt
              laboris nisi ut aliquip ex commodo consequat. duis aute irure dolor in
              reprehenderivoluptate velit esse cillum dolore fugiat nulla pariatur.Excepteur sint
              ocaecat cupidatat noproident sunt culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <p className=''>
              Sed perspiciatis unde omnisiste natus error sit voluptatem accusantium.doloremque
              ladantium totam rem aperieaque ipsa quae ab illo inventore.veritatis. et quasi
              architecto beatae vitae dicta sunt explicabo.
            </p>
            <button className='bg-red-400 py-4 px-8  mb-6 rounded-full text-white'>
              Explore More
            </button>
          </div>
        </div>
      </section>
      <section className='grid md:grid-cols-2 my-8'>
        <div className='w-full grid'>
          <img
            className='sm:w-11/12 h-full  md:justify-self-end mx-auto md:mx-0'
            src={phoneman}
            alt='alt'
          />
        </div>
        <div className='w-full grid'>
          <div
            className='sm:w-11/12 justify-self-center md:justify-self-start mx-auto md:mx-0'
            style={{ backgroundColor: '#303032' }}
          >
            <h1 className='text-white text-4xl mx-16 pt-8 leading-10'>
              We are efficient to make your business rise
            </h1>
            <hr className='border-2 border-white mx-16 w-20 mb-4' />
            <p className='text-white text-lg mx-16'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor didunt
              laboris nisi ut aliquip ex commodo consequat. duis aute irure dolor in reprehenderit
              voluptate velit esse cillum dolore fugiat nulla pariatur.Excepteur sint ocaecat
              cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <img className='mx-16' src={signature} />
            <p className='text-white mx-16 text-xl py-4'>
              John Doe <br />
              CEO
            </p>
          </div>
        </div>
      </section>
      <section className='grid lg:grid-cols-2'>
        <div className='mx-4 lg:w-full grid'>
          <div className='lg:w-10/12 lg:justify-self-center'>
            <h3 className='text-2xl ml-4 lg-ml-0 pt-4'>Best Reason</h3>
            <h1 className='text-3xl ml-4 lg-ml-0 pb-4'>Why Choose Us</h1>
            <hr className='border-2 border-white mx-16 w-20 mb-4' />
            <div className='w-full bg-gray-100 py-4 my-4 rounded-full text-xl px-8'>
              <span className='mx-2 text-2xl text-red-500'>+</span>Our Company Mission
            </div>
            <div className='w-full bg-gray-100 my-4 py-4 rounded-full text-xl px-8'>
              <span className='mx-2 text-2xl text-red-500'>+</span>Our Company Mission
            </div>
            <div className='w-full bg-gray-100 py-4 rounded-full text-xl px-8 mb-20'>
              <span className='mx-2 text-2xl text-red-500'>+</span>Our Company Mission
            </div>
          </div>
        </div>
        <div className='mx-4 my-4 lg:mt-32'>
          <div className=''>
            <div className='mx-4 my-2'>
              <h5 className='text-xl'>Branding</h5>
              <div className='w-full bg-gray-100 rounded-full'>
                <div className='w-4/5 py-2 bg-black rounded-full' />
              </div>
            </div>
            <div className='mx-4 my-2'>
              <h5 className='text-xl'>Branding</h5>
              <div className='w-full bg-gray-100 rounded-full'>
                <div className='w-3/4 py-2 bg-black rounded-full' />
              </div>
            </div>
            <div className='mx-4 my-2'>
              <h5 className='text-xl'>Consulting</h5>
              <div className='w-full bg-gray-100 rounded-full'>
                <div className='w-2/4 py-2 bg-black rounded-full' />
              </div>
            </div>
            <div className='mx-4 my-2'>
              <h5 className='text-xl'>Buisness</h5>
              <div className='w-full bg-gray-100 rounded-full'>
                <div className='w-2/5 py-2 bg-black rounded-full' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className='h-min-0 grid grid-rows-4 md:grid-cols-2 md:grid-rows-1 lg:grid-cols-4 lg:grid-rows-1 place-content-center text-white '
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.884),rgba(0, 0, 0, 0.877)), url(${handshake})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div className='my-4 mx-auto'>
          <img className='mx-auto' src={stack} />
          <p className='text-center text-2xl my-4'>230</p>
          <p className='text-lg'>Project Done</p>
        </div>
        <div className='my-4 mx-auto'>
          <img className='mx-auto w-16' src={smile} />
          <p className='text-center text-2xl my-4'>789</p>
          <p className='text-center text-lg'>Satisfied Clients</p>
        </div>
        <div className='my-4'>
          <img className='mx-auto w-16' src={thumb} />
          <p className='text-center text-2xl my-4'>580</p>
          <p className='text-center text-lg'>Cup of Cofee</p>
        </div>
        <div className='my-4'>
          <img className='mx-auto w-16' src={trophy} />
          <p className='text-center text-2xl my-4'>130</p>
          <p className='text-center text-lg'>Awards Win</p>
        </div>
      </section>
      <div className='text-center justify-self-center'>
        <h4 className='text-2xl pt-8 pb-4'>Clients</h4>
        <h1 className='text-3xl'>What client Say</h1>
        <hr className='mb-16 border-2 border-red-400 ' />
      </div>
      <section className='grid md:grid-cols-2 mb-20'>
        <div className='text-center grid justify-self-center w-full'>
          <img className='w-9/12 xl:w-7/12 xl:justify-self-  justify-self-center' src={client} />
        </div>
        <div className='mx-8 w-11/12 lg:w-9/12 justify-self-center shadow-2xl'>
          <div className='justify-self-center '>
            <div className='ml-12 w-16 text-center pt-4 mx bg-gray-200 h-16 text-red-500 rounded-3xl text-2xl mt-4'>
              66
            </div>
            <span className='bg-red-600'>
              {/* <img className='w-16' src={arrow} alt='alt' /> */}
            </span>
            {/* <span>arrow</span> */}
            <p className='mx-12 text-md mt-12'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor didunt
              laboris nisi ut aliquip ex commodo consequat. duis aute irure dolor in reprehenderit
              voluptate velit esse cillum dolore fugiat nulla{' '}
            </p>
            <h5 className='mx-12 my-4'>Julia Robertson</h5>
            <h6 className='mx-12 my-6'>Happy Clients</h6>
          </div>
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

export default AboutUs
