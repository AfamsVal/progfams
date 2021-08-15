import React from 'react'
// import { setCatchHandler } from 'workbox-routing'
import scale from '../../assets/planet.jpg'

const NotFound = () => {
  const style = {
    backgroundImage: `url(${scale})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh'
  }
  return (
    <section className='pt-40 grid' style={style}>
      <div className='justify-self-center self-center'>
        <p className='font-sans text-6xl text-white animate-bounce text-center'>404</p>
        <p className='font-sans text-3xl text-white animate-bounce text-center'>Page not found</p>
      </div>
    </section>
  )
}

export default NotFound
