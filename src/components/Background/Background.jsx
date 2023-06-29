import React from 'react'
import { styled } from '@mui/system'

const VideoBackground = styled('div')({
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    zIndex: '-1',
})

const Video = styled('video')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
})

const Background = () => {
  return (
    <VideoBackground>
        <Video preload='auto' autoPlay loop muted>
            <source src={process.env.PUBLIC_URL + '/assets/video/NEVERMORE 2 [CS-GO].mp4'} type="video/mp4" />
        </Video>
    </VideoBackground>
  )
}

export default Background