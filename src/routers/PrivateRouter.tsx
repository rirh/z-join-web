import React from 'react'
import { Redirect, Route, useLocation } from 'react-router-dom'
import cookie from 'js-cookie'
// import { LOGIN_PAGE_URL } from 'src/pages/Login/Login';

export const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const CheckLoggedIn = () => {
    let location = useLocation()
    let token = cookie.get('token') || ''
    if (!token) {
      return <Redirect
        to={{
          // pathname: LOGIN_PAGE_URL,
          state: { from: location }
        }}
      />

    }
    return <Component />
  }

  return <Route {...rest} component={CheckLoggedIn} />


}
