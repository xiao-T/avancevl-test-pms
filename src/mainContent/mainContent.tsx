/**
 * MainContent component
 * Thu Apr 16 15:26:21 2020
 * by xiaoT
 */

import React, { FC } from 'react'
import { Box } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'

const useMainContentStyles = makeStyles({
  mainContainer: {
    paddingTop: '1rem',
    backgroundColor: '#222529'
  }
})
const MainContent: FC<{}> = (): JSX.Element => {
  const classes = useMainContentStyles()
  return (
    <Box className={classes.mainContainer}>main content</Box>
  )
}

export default MainContent
