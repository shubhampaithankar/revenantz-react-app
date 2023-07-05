import React from 'react'
import { AppBar, Grid } from '@mui/material';
import { styled } from '@mui/system'

import { ImageLogo, TextWithRedLine } from '../CommonComponents';

import config from '../../config.json'

const LinkStyled = styled(TextWithRedLine)({
    position: 'relative',
    fontSize: '1.75rem',
    fontWeight: '900',

    '@media (max-width: 1600px)': {
        fontSize: '1.2rem',
    },
    
    '::after': {
        transition: 'left 0.3s',
        width: '30px',
        height: '5px',
    },

    ':hover': {
        '::after': {
            left: 'calc(100% - 30px)'
        }
    },

    ':active': {
        '::after': {
            transition: '0.15s',
            left: '0',
            width: '100%'
        }
    }
})

const AppBarStyle = styled(AppBar)({
    background: 'transparent',
    boxShadow: 'none',
    padding: '0 15rem',

    '@media (max-width: 810px)': {
        backgroundColor: '#222',
    }
})

const Navbar = ({ landingPage, aboutPage, serverListPage }) => {
    const handleClick = (nav) => {
        switch (nav) {
            case 'about': return aboutPage.current?.scrollIntoView({ behavior: 'smooth' })
            case 'vip': return
            case 'home': return window.scrollTo({ top: 0, behavior: 'smooth' })
            case 'ranks': return window.open(config.links.ranks, '_self')
            case 'bans': return window.open(config.links.bans, '_self')
            default: return;
        }
    }
    return (
        <AppBarStyle position='static'>
            <Grid container spacing={0} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Grid item xs={2} sx={{ textAlign: 'center'}}>
                    <LinkStyled disableRipple onClick={() => handleClick('about')}>
                        ABOUT US
                    </LinkStyled>
                </Grid>
                <Grid item xs={2} sx={{ textAlign: 'center' }}>
                    <LinkStyled disableRipple onClick={() => handleClick('vip')}>
                        VIP MEMBERSHIP
                    </LinkStyled>
                </Grid>
                <Grid item xs={4} sx={{ textAlign: 'center' }}>
                    <ImageLogo onClick={() => handleClick('home')} src={process.env.PUBLIC_URL + '/assets/logo.png' } alt="RevenantZ Logo" sx={{ width: '175px' }} />
                </Grid>
                <Grid item xs={2} sx={{ textAlign: 'center' }}>
                    <LinkStyled disableRipple onClick={() => handleClick('ranks')}>                        
                        RANK AND STATS
                    </LinkStyled>                
                </Grid>
                <Grid item xs={2} sx={{ textAlign: 'center' }} onClick={() => handleClick('bans')}>
                    <LinkStyled disableRipple>
                        BANS
                    </LinkStyled>
                </Grid>
            </Grid>
          </AppBarStyle>
    );
}

export default Navbar