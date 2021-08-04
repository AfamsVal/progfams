import React from 'react'

const courseCard = props => {
  const style = {
    color: '#640B92'
  }

  const inline = {
    minWidth: '16rem',
    minHeight: '17rem'
  }
  return (
    <div className='bg-white border-2 mx-4 mt-8' style={inline}>
      <img src={props.image} alt='course' />
      <div>
        <h1 className='m-2 font-semibold'>{props.title}</h1>
        <p className='font-normal mt-8 ml-2'>{props.lessons}</p>
        <p className='ml-2 text-2xl'>
          {props.price}
          <span className='ml-2 text-lg' style={style}>
            {props.discount}
          </span>
        </p>
      </div>
    </div>
  )
}

export default courseCard
