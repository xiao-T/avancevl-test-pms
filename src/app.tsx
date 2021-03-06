/**
 * app view
 * Thu Apr 16 13:13:50 2020
 * by xiaoT
 */

import React, { FC } from 'react'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'

import Progress from './progress/'
import MainContent from './mainContent/'

const useStyles = makeStyles({
  root: {
    background: '#1c1d1f',
    color: '#cdcecd',
    minHeight: '100vh',
    fontSize: '4.26667vw',
    padding: 0
  }
})
const App: FC<{}> = (): JSX.Element => {
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <CssBaseline />
      <Progress />
      <MainContent />
    </Container>
  )
}

export default App
