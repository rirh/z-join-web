import React from 'react'
// import { useTranslation } from 'react-i18next'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Home, HOME_PAGE_URL } from 'src/pages/Home/Home'
import { Dispatch, DISPATCH_PAGE_URL } from 'src/pages/Dispatch/Dispatch'
// import { Login, LOGIN_PAGE_URL } from 'src/pages/Login/Login'
// import { RestPassword, REST_PASSWORD_PAGE_URL } from 'src/pages/RestPassword/RestPassword'
// import { PrivateRoute } from './PrivateRouter'
/**
 * Using `XXX_PAGE_URL` path constants:
 * Pros: get rid of the fragile string literals
 * Cons: TODO: summarize all the path consts into a single file to avoid circular dependency & good for split chunks + lazy load
 */

export function AppRouter() {
  // const { i18n } = useTranslation()
  /**
   * Benefits of `basename`:
   * 1. <Link /> component auto-prefixed
   * 2. `history.[push|replace]` auto-prefixed
   *
   * TODO: how to handle `/`? Redirect?
   */
  // const basename = `/${i18n.language}`;

  return <BrowserRouter >
    <Switch>
      <Route exact path={HOME_PAGE_URL} component={Home} />
      <Route exact path={DISPATCH_PAGE_URL} component={Dispatch} />
      {/* <Route exact path={LOGIN_PAGE_URL} component={Login} />
            <PrivateRoute exact path={REST_PASSWORD_PAGE_URL} component={RestPassword} /> */}
      <Redirect to={DISPATCH_PAGE_URL} />
    </Switch>
  </BrowserRouter>

}
