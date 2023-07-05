import React from 'react'
import { Typography } from '@mui/material'
import { styled, Box } from '@mui/system';

import config from '../../config.json'

import { ImageLogo } from '../../components/CommonComponents.js';

const LogoStyled = styled(ImageLogo)({
  width: '55px', 
  marginTop: '4px',
})

const LogoBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  cursor: 'pointer',
  padding: '0 0.5rem',
  // whiteSpace: 'pre-wrap'
})

const LogoName = styled(Typography)({
  padding: '0.75rem', 
  fontSize: '1.25rem',
  fontWeight: '600',
  // color: 'red'
})

const LogoNameBracket = styled(Typography)({
  padding: '0.75rem', 
  fontSize: '1.25rem',
  fontWeight: '600',
  color: 'red',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center'
})

const LandingPage = ({ landingPage }) => {

  const handleClick = (number) => {
    switch (number) {
      case 1: return window.open(config.links.discord, '_blank')
      case 2: return window.open(config.links.steam, '_blank')
      case 3: return window.open(config.links.instagram, '_blank')
      case 4: return window.open(config.links.youtube, '_blank')
      default:
        return
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
          ref={landingPage}
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
                  fontSize: '8rem',
                  fontWeight: '700',
                  fontStyle: 'italic'
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
              marginTop: '140px',
              width: '100%',
              '@media (max-width: 1600px)': {
                marginTop: '70px',
              }
            }}
          >
            <LogoBox onClick={() => handleClick(1)}>
              <LogoStyled  src={process.env.PUBLIC_URL + '/assets/svg/discord-logo-white.svg'} alt="discord-logo" />
              <LogoNameBracket component='span'>
                {'['}
                <LogoName>
                  DISCORD COMMUNITY
                </LogoName>
                {']'}
              </LogoNameBracket>
            </LogoBox>
            <LogoBox onClick={() => handleClick(2)}>
              <LogoStyled src={process.env.PUBLIC_URL + '/assets/svg/steam-logo-white.svg'} alt="steam-logo" />
              <LogoNameBracket component='span'>
                {'['}
                <LogoName>
                  STEAM GROUP
                </LogoName>
                {']'}
              </LogoNameBracket>
            </LogoBox>
            <LogoBox onClick={() => handleClick(3)}>
              <LogoStyled src={process.env.PUBLIC_URL + '/assets/svg/instagram-logo-white.svg'} alt="instagram-logo" />
              <LogoNameBracket component='span'>
                {'['}
                <LogoName>
                  INSTAGRAM PAGE
                </LogoName>
                {']'}
              </LogoNameBracket>
            </LogoBox>
            <LogoBox onClick={() => handleClick(4)}>
              <LogoStyled src={process.env.PUBLIC_URL + '/assets/svg/youtube-logo-white.svg'} alt="youtube-logo" />
              <LogoNameBracket component='span'>
                {'['}
                <LogoName>
                  YOUTUBE CHANNEL
                </LogoName>
                {']'}
              </LogoNameBracket>

            </LogoBox>
          </Box>
        </Box>
    );
}

export default LandingPage