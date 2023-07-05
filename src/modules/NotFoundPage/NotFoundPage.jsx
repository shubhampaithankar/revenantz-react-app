import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const NotFoundPage = () => {
  return (
    <Box sx={{
        height: '100%',
        backgroundColor: '#1b1b1b',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <Typography fontSize={'5rem'} fontWeight={'700'}>
            Error 404 - Page not found!
        </Typography>
    </Box>
  )
}

export default NotFoundPage