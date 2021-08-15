import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Footer, NavBar } from '..'
import notFound from '../../pages/notFound'
import landing from '../../pages/landing'
import { Courses } from '../../pages/courses'
import { Register } from '../../pages/register'
import { Login } from '../../pages/login'
import { ForgetPassword } from '../../pages/forgetPassword'
import { RecoverAccount } from '../../pages/recoverAccount'
import { AboutUs } from '../../pages/aboutUs'
import { ContactUs } from '../../pages/contactUs'
import { ComingSoon } from '../../pages/comingSoon'

const Routes = () => {
  return (
    <Router>
      <NavBar />
      <Suspense fallback='Loading...'>
        <Switch>
          <Route exact path='/' component={landing.Landing} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/recover-account' component={RecoverAccount} />
          <Route exact path='/courses' component={Courses} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/forget-password' component={ForgetPassword} />
          <Route exact path='/about-us' component={AboutUs} />
          <Route exact path='/contact-us' component={ContactUs} />
          <Route exact path='/coming-soon' component={ComingSoon} />
          <Route exact path='*' component={notFound.NotFound} />
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  )
}
export default Routes
