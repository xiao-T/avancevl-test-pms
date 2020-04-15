/**
 * routes
 * by xiaoT
 */

import React, { FC, CSSProperties, lazy } from 'react'
import { Redirect } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'

const Login = lazy(() => import(/* webpackChunkName: 'login.lazy' */'@Components/login/index.ts'))
// Register
const Register = lazy(() => import(/* webpackChunkName: 'register.lazy' */'@Components/register/index.ts'))

const NoMatch: FC<RouteComponentProps> = ({ location }) => {
  let style: CSSProperties = {
    color: 'red',
    fontSize: '16px',
    margin: '20px auto',
    textAlign: 'center'
  }
  return (
    <div style={style}>路由不匹配：{location.pathname}</div>
  )
}
const routes = [
  {
    path: '/',
    exact: true,
    render: (props) => {
      return (
        <Redirect to={'/login'} />
      )
    }
  }, {
    path: '/login',
    exact: true,
    component: Login
  }, {
    path: '/register',
    exact: true,
    component: Register
  }, {
    component: NoMatch
  }
]

export default routes
