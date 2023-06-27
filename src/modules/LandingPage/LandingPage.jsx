import React from 'react'
import { Box, Typography } from '@mui/material'

const LandingPage = () => {
  const HandleClick = (number) => {
    switch (number) {
      case 1:
        window.open('https://www.google.com', '_blank')
        break;
      case 2:
        window.open('https://www.youtube.com', '_blank')
        break;
      default: return
    }
  }
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
          }}
        >
          <img src={process.env.PUBLIC_URL + '/assets/logo.png' } alt="RevenantZ Logo" style={{ width: '600px', height: 'auto' }} />
          <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center', 
              marginTop: '25px',
            }}
          >
            <Typography variant="h4" component="h1" sx={{ 
                  color: 'whitesmoke', 
                  fontFamily: '"Ysabeau SC", sans-serif;',
                  fontSize: '2.75rem'
                }}
            >
              JOIN OUR COMMUNITY!
            </Typography>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                margin: '1rem 0',
                width: '100%',
                marginTop: '10px',
              }}
            >
              <Box onClick={() => HandleClick(1)} sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                cursor: 'pointer',
              }}>
                {/* <AccessAlarm /> */}
                <img src={process.env.PUBLIC_URL + '/assets/svg/discord-logo.svg'} alt="discord-logo" style={{ width: '1.75rem', marginTop: '4px' }}/>
                <Typography variant="h4" component="h2" sx={{ 
                    color: 'whitesmoke', 
                    fontSize: '1.75rem',
                    fontFamily: '"Ysabeau SC", sans-serif;',
                    padding: '0 0.75rem'
                }}>
                  DISCORD
                </Typography>
              </Box>
              <Box onClick={() => HandleClick(2)} sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                cursor: 'pointer',
              }}>
                <img src={process.env.PUBLIC_URL + '/assets/svg/steam-logo.svg'} alt="steam-logo" style={{ width: '1.75rem', marginTop: '4px' }}/>
                <Typography variant="h4" component="h2" sx={{ 
                    color: 'whitesmoke', 
                    fontSize: '1.75rem',
                    fontFamily: '"Ysabeau SC", sans-serif;',
                    padding: '0 0.75rem'
                }}>
                  STEAM
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
    );
}

export default LandingPage