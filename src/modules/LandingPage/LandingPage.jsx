import React from 'react'
import { Typography } from '@mui/material'
import { styled, Box } from '@mui/system';

import config from '../../config.json'

import { ImageLogo } from '../../components/CommonComponents.js';

const LandingPage = () => {

  const LogoStyled = styled(ImageLogo)({
    width: '55px', 
    marginTop: '4px',
  })


  const HandleClick = (number) => {
    switch (number) {
      case 1:
        window.open(config.discord_url, '_blank')
        break;
      case 2:
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
            height: '100%',
            marginTop: '-75px',
          }}
        >
          <Box sx={{ textAlign: 'center', }}>
            <Typography variant="h4" component="h3" sx={{ 
                  color: 'whitesmoke', 
                  fontSize: '4rem',
                  letterSpacing: '8px'
                }}
            >
              WELCOME TO
            </Typography>
            <Typography variant="h1" component="h1" sx={{ 
                  color: 'red', 
                  fontSize: '8rem'
                }}
            >
              REVENANTZ
            </Typography>
          </Box>
          <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              flexWrap: 'wrap',
              // margin: '1rem 0',
              marginTop: '75px',
              width: '100%',
            }}
          >
            <Box onClick={() => HandleClick(1)} sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              cursor: 'pointer',
            }}>
              <LogoStyled  src={process.env.PUBLIC_URL + '/assets/svg/discord-logo-white.svg'} alt="discord-logo" />
            </Box>
            <Box onClick={() => HandleClick(2)} sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              cursor: 'pointer',
            }}>
              <LogoStyled src={process.env.PUBLIC_URL + '/assets/svg/steam-logo-white.svg'} alt="steam-logo" />
            </Box>
            <Box onClick={() => HandleClick(3)} sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              cursor: 'pointer',
            }}>
              <LogoStyled src={process.env.PUBLIC_URL + '/assets/svg/instagram-logo-white.svg'} alt="steam-logo" />
            </Box>
            <Box onClick={() => HandleClick(4)} sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              cursor: 'pointer',
            }}>
              <LogoStyled src={process.env.PUBLIC_URL + '/assets/svg/youtube-logo-white.svg'} alt="steam-logo" />
            </Box>
          </Box>
        </Box>
    );
}

export default LandingPage