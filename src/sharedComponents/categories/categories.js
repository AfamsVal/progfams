import React from 'react'
import PropTypes from 'prop-types'

const Categories = ({ children }) => {
  return <div className='w-max  m-2'>{children}</div>
}

Categories.propTypes = {
  children: PropTypes.ReactNode
}

export default Categories
