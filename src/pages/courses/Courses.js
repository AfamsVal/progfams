import React from 'react'
import Header from '../../sharedComponents/header/header'
import CourseCard from '../../sharedComponents/coursesCard/courseCard'
import cardImage from '../../assets/course.png'

const Courses = () => {
  const style = {
    backgroundColor: '#C3C3C3'
  }
  return (
    <div className='w-full pb-36 pt-16'>
      <Header />
      <div className='lg:mx-32'>
        <h3 className='m-2'>Categories</h3>
        <div className='xl:grid xl:grid-rows-2 md:grid md:grid-rows-3 '>
          <div className='flex xl:row-start-1 xl:row-end-2 md:row-start-1 md:row-end-2 '>
            <div className='w-max  m-2'>
              <p className='p-1 px-4 text-xs rounded-sm' style={style}>
                NO PREREQUISITE COURSES
              </p>
            </div>
            <div className='w-max  m-2'>
              <p className='p-1 px-4 text-xs rounded-sm' style={style}>
                DATA STRUCTURES AND ALGORITHM
              </p>
            </div>
          </div>
          <div className='flex xl:row-start-1 xl:row-end-2 md:row-start-2 md:row-end-3 2xl:-ml-40'>
            <div className='w-max  m-2'>
              <p className='p-1 px-4 text-xs rounded-sm' style={style}>
                DATABASE COURSES
              </p>
            </div>
            <div className='w-max  m-2'>
              <p className='p-1 px-4 text-xs rounded-sm' style={style}>
                PYTHON
              </p>
            </div>
            <div className='w-max  m-2 '>
              <p className='p-1 px-4 text-xs rounded-sm' style={style}>
                JAVASCRIPT
              </p>
            </div>
            <div className='w-max  m-2'>
              <p className='p-1 px-4 text-xs rounded-sm' style={style}>
                WEB DEVELOPMENT
              </p>
            </div>
          </div>
          <div className='flex xl:row-start-1 xl:row-end-2 md:row-start-2 md:row-end-3 2xl:-ml-40 lg:mr-48'>
            <div className='w-max  m-2'>
              <p className='p-1 px-4 text-xs rounded-sm' style={style}>
                MOBILE APP DEVELOPMENT
              </p>
            </div>
            <div className='w-max  m-2 '>
              <p className='p-1 px-4 text-xs rounded-sm' style={style}>
                DEV OPS
              </p>
            </div>
          </div>
          <div className='flex xl:row-start-2 xl:row-end-3 md:row-start-3 md:row-end-4 '>
            <div className='w-max  m-2'>
              <p className='p-1 px-4 text-xs rounded-sm' style={style}>
                PROGRAMMING LANGUAGES
              </p>
            </div>
            <div className='w-max  m-2 block '>
              <p className='p-1 px-4 text-xs rounded-sm' style={style}>
                MACHINE LEARNING
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className='text-2xl mx-4 lg:mx-36 mt-20 -mb-2'>Courses</h1>
      <div className='grid grid-rows-3'>
        <div className='lg:mx-32 flex sm:overflow-x-scroll overflow-y-hidden'>
          <CourseCard
            image={cardImage}
            title='HTML and CSS for modern web developmwnt'
            lessons='56 lessons'
            price='$30'
            discount='30% off'
          />
          <CourseCard
            image={cardImage}
            title='HTML and CSS for modern web developmwnt'
            lessons='56 lessons'
            price='$30'
            discount='30% off'
          />
          <CourseCard
            image={cardImage}
            title='HTML and CSS for modern web developmwnt'
            lessons='56 lessons'
            price='$30'
            discount='30% off'
          />
          <CourseCard
            image={cardImage}
            title='HTML and CSS for modern web developmwnt'
            lessons='56 lessons'
            price='$30'
            discount='30% off'
          />
        </div>
        {/* <h1 className='text-2xl mx-36'>Bundles</h1> */}
        <div className='lg:mx-32 flex sm:overflow-x-scroll overflow-y-hidden'>
          <CourseCard
            image={cardImage}
            title='HTML and CSS for modern web developmwnt'
            lessons='56 lessons'
            price='$30'
            discount='30% off'
          />
          <CourseCard
            image={cardImage}
            title='HTML and CSS for modern web developmwnt'
            lessons='56 lessons'
            price='$30'
            discount='30% off'
          />
          <CourseCard
            image={cardImage}
            title='HTML and CSS for modern web developmwnt'
            lessons='56 lessons'
            price='$30'
            discount='30% off'
          />
          <CourseCard
            image={cardImage}
            title='HTML and CSS for modern web developmwnt'
            lessons='56 lessons'
            price='$30'
            discount='30% off'
          />
        </div>
        {/* <h1 className='text-2xl mx-36'>Tests</h1> */}
        <div className='lg:mx-32 flex sm:overflow-x-scroll overflow-y-hidden'>
          <CourseCard
            image={cardImage}
            title='HTML and CSS for modern web developmwnt'
            lessons='56 lessons'
            price='$30'
            discount='30% off'
          />
          <CourseCard
            image={cardImage}
            title='HTML and CSS for modern web developmwnt'
            lessons='56 lessons'
            price='$30'
            discount='30% off'
          />
          <CourseCard
            image={cardImage}
            title='HTML and CSS for modern web developmwnt'
            lessons='56 lessons'
            price='$30'
            discount='30% off'
          />
          <CourseCard
            image={cardImage}
            title='HTML and CSS for modern web developmwnt'
            lessons='56 lessons'
            price='$30'
            discount='30% off'
          />
        </div>
      </div>
    </div>
  )
}

export default Courses
