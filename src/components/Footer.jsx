import React from 'react'
import { BottomNavigation, Typography } from '@mui/material'

const Footer = () => {
  return (
    <BottomNavigation sx={{
        backgroundColor: 'rgb(41, 41 ,41)',
    }}>
        <Typography variant='h5' component='h3'>
            This is the footer
        </Typography>
    </BottomNavigation>
  )
}

export default Footer