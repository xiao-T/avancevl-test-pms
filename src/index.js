/**
 * react16
 * by xiaoT
 */

import React, { Component, Fragment, Suspense } from 'react'
import ReactDom from 'react-dom'
import { Route, HashRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import routes from '@Routes/index.tsx'
import store from '@Store'

const Loading = () => {
  return (
    <div data-position='center' className='loading flex col pa'>
      <i className='icon icon-loading' />
      <span>加载中...</span>
    </div>
  )
}

class ErrorHandle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      error: {}
    }
  }
  componentDidCatch (error) {
    this.setState({
      error
    })
  }
  render () {
    let { error } = this.state
    let { children } = this.props
    return (
      <Fragment>
        {error.message ? <code className='hl'>{error.message}</code> : children}
      </Fragment>
    )
  }
}

class APP extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }
  componentDidMount () {}
  render () {
    return (
      <ErrorHandle>
        <Suspense fallback={<Loading />}>
          <Switch>
            {routes.map((item, index) => {
              return (
                <Route key={item.path + index} {...item} />
              )
            })}
          </Switch>
        </Suspense>
      </ErrorHandle>
    )
  }
}
let appWrap = document.getElementById('app')
ReactDom.render(<Provider store={store}><HashRouter><APP /></HashRouter></Provider>, appWrap)
