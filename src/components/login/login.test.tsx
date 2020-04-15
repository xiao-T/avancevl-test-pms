/**
 * Login test
 * by xiaoT
 */
import React from 'react'
import { shallow, mount } from 'enzyme'
import Login from './'

describe('Login', () => {
  let component: any

  beforeEach(() => {
    component  = mount(<Login />)
  })

  it('should has a material button', () => {})
})
