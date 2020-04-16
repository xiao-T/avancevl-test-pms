/**
 * login view
 * by xiaoT
 */

import React, { FC } from 'react'
import Button from '@material-ui/core/Button'
import Alert from '@material-ui/lab/Alert'
import './login.scss'

const Login: FC<{}> = () => {
  return (
    <div className='login'>
      <div className=''>login</div>
      <Alert severity='error'>This is an error alert — check it out!</Alert>
      <Button variant='contained' color='primary'>material button</Button>
    </div>
  )
}

export default Login
