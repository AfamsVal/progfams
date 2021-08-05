import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Footer, NavBar } from '..'
import notFound from '../../pages/notFound'
import landing from '../../pages/landing'
import { Courses } from '../../pages/courses'

const Routes = () => {
  return (
    <Router>
      <NavBar />
      <Suspense fallback='Loading...'>
        <Switch>
          <Route exact path='/' component={landing.Landing} />
          <Route exact path='/courses' component={Courses} />
          <Route exact path='*' component={notFound.NotFound} />
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  )
}
export default Routes
