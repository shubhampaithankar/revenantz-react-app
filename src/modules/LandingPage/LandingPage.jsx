import React, { useContext, useEffect } from 'react'
import { Typography } from '@mui/material'
import { styled, Box } from '@mui/system';
import { useLocation } from 'react-router-dom'

import { RefContext } from '../../hooks/context/RefContext'

import { ImageLogo } from '../../components/CommonComponents.js';
import config from '../../config.json'

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

const LandingPage = () => {
    const location = useLocation()
    const refContext = useContext(RefContext)

    useEffect(() => {
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        }
    }, [location, refContext.landingPage])

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            marginTop: '-75px',
          }}
          ref={refContext.landingPage}
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
            <a href={config.links.discord} target='_blank' rel="noreferrer">            
              <LogoBox>
                  <LogoStyled  src={process.env.PUBLIC_URL + '/assets/svg/discord-logo-white.svg'} alt="discord-logo" />
                  <LogoNameBracket component='span'>
                    {'['}
                    <LogoName>
                      DISCORD COMMUNITY
                    </LogoName>
                    {']'}
                  </LogoNameBracket>
              </LogoBox>
            </a>
            <a href={config.links.steam} target='_blank' rel="noreferrer">   
              <LogoBox>
                <LogoStyled src={process.env.PUBLIC_URL + '/assets/svg/steam-logo-white.svg'} alt="steam-logo" />
                <LogoNameBracket component='span'>
                  {'['}
                  <LogoName>
                    STEAM GROUP
                  </LogoName>
                  {']'}
                </LogoNameBracket>
              </LogoBox>
            </a>
            <a href={config.links.instagram} target='_blank' rel="noreferrer">
              <LogoBox>
                <LogoStyled src={process.env.PUBLIC_URL + '/assets/svg/instagram-logo-white.svg'} alt="instagram-logo" />
                <LogoNameBracket component='span'>
                  {'['}
                  <LogoName>
                    INSTAGRAM PAGE
                  </LogoName>
                  {']'}
                </LogoNameBracket>
              </LogoBox>
            </a>
            <a href={config.links.youtube} target='_blank' rel="noreferrer">
              <LogoBox>
                <LogoStyled src={process.env.PUBLIC_URL + '/assets/svg/youtube-logo-white.svg'} alt="youtube-logo" />
                <LogoNameBracket component='span'>
                  {'['}
                  <LogoName>
                    YOUTUBE CHANNEL
                  </LogoName>
                  {']'}
                </LogoNameBracket>
              </LogoBox>
            </a>
          </Box>
        </Box>
    );
}

export default LandingPage