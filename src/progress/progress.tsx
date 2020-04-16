/**
 * Progress view
 * Thu Apr 16 13:25:02 2020
 * by xiaoT
 */

import React, { FC, useState, useEffect } from 'react'
import { Container, Box, CircularProgress } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'

const useContainerStyles = makeStyles({
  progressContainer: {
    padding: '16px 24px 0 24px'
  },
  liveProgress: {
    width: '8.75rem',
    height: '8.75rem',
    position: 'relative',
    marginRight: '2.5rem'
  },
  live: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0
  },
  liveStatus: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0
  },
  progressItem: {},
  afterSuffix: {
    color: '#58595c',
    fontSize: '12px'
  },
  itemTitle: {
    fontSize: '0.875rem'
  },
  scoreValue: {
    fontSize: '20px',
    color: 'white',
    fontWeight: 700,
    marginRight: '8px'
  }
})

const MAXProgress = 100
const Progress: FC<{}> = (): JSX.Element => {
  const classes = useContainerStyles()
  // 初始化当前进度
  const [currentProgress, setCurrentProgress] = useState<number>(35)

  // 更新进度
  useEffect(() => {
    let timer
    const updateProgress = () => {
      setCurrentProgress(currentProgress => {
        if (currentProgress + 2 >= MAXProgress) {
          clearTimeout(timer)
          return MAXProgress
        } else {
          return currentProgress + 2
        }
      })
      // 通过嵌套 setTimeout, 模拟 setInterval
      timer = setTimeout(() => {
        updateProgress()
      }, 1000)
    }
    // 启动定时器 模拟数据更新
    timer = setTimeout(() => {
      updateProgress()
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <Container className={classes.progressContainer}>
      <Box display='flex'>
        <Box className={classes.liveProgress}>
          <CircularProgress size='100%' className={classes.liveStatus} variant='static' value={currentProgress} />
          <Box
            display='flex' flexDirection='column' justifyContent='center' alignItems='center'
            className={classes.live}>
            <Box className={classes.itemTitle}>ACCURACY</Box>
            <Box className='score'>
              <Box component='span' className={classes.scoreValue}>{MAXProgress}</Box>
              <sub className={classes.afterSuffix}>%</sub>
            </Box>
          </Box>
        </Box>
        <Box display='flex' flexDirection='column' justifyContent='space-around'>
          <Box className={'completed ' + classes.progressItem}>
            <Box className={classes.itemTitle}>COMPLETED</Box>
            <Box className='score'>
              <Box component='span' className={classes.scoreValue}>{MAXProgress}</Box>
              <sub className={classes.afterSuffix}>PROBLEMS</sub>
            </Box>
          </Box>
          <Box className={'correct ' + classes.progressItem}>
            <Box className={classes.itemTitle}>CORRECT</Box>
            <Box className='score'>
              <Box component='span' className={classes.scoreValue}>{currentProgress}</Box>
              <sub className={classes.afterSuffix}>PROBLEMS</sub>
            </Box>
          </Box>
        </Box>
      </Box>
      <PastTime />
    </Container>
  )
}

const usePastTimeStyles = makeStyles({
  time: {
    color: '#58595c',
    fontSize: '12px',
    backgroundColor: '#222529',
    padding: '1rem 24px',
    marginRight: '-24px',
    marginLeft: '-24px',
    marginTop: '1rem'
  }
})
// PastTime FC
const PastTime: FC<{}> = (): JSX.Element => {
  const classes = usePastTimeStyles()
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const day = now.getDate()
  return (
    <Box className={classes.time}>PAST 24 HOURS,{year}/{month}/{day}</Box>
  )
}

export default Progress
