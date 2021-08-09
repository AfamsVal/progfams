import React from 'react'
import PropTypes from 'prop-types'

const CourseCard = ({ image, title, lessons, price, discount }) => {
  const style = {
    color: '#640B92'
  }

  const inline = {
    minWidth: '16rem',
    minHeight: '17rem'
  }
  return (
    <div className='bg-white border-2 mx-4 mt-8' style={inline}>
      <img src={image} alt='course' />
      <div>
        <h1 className='m-2 font-semibold'>{title}</h1>
        <p className='font-normal mt-8 ml-2'>{lessons}</p>
        <p className='ml-2 text-2xl'>
          {price}
          <span className='ml-2 text-lg' style={style}>
            {discount}
          </span>
        </p>
      </div>
    </div>
  )
}

CourseCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  lessons: PropTypes.string,
  price: PropTypes.string,
  discount: PropTypes.string
}
export default CourseCard
