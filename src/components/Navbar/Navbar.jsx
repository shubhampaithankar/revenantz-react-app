import React from 'react'
import { AppBar, Grid } from '@mui/material';
import { styled } from '@mui/system'

import { ImageLogo, TextWithRedLine } from '../CommonComponents';

import config from '../../config.json'
import { Link } from 'react-router-dom';

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

const Navbar = () => {
    return (
        <AppBarStyle position='static'>
            <Grid container spacing={0} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Grid item xs={2} sx={{ textAlign: 'center'}}>
                    <Link to='about'>
                        <LinkStyled variant='span' disableRipple >
                            ABOUT US
                        </LinkStyled>
                    </Link>
                </Grid>
                <Grid item xs={2} sx={{ textAlign: 'center' }}>
                    <LinkStyled variant='span' disableRipple >
                        VIP MEMBERSHIP
                    </LinkStyled>
                </Grid>
                <Grid item xs={4} sx={{ textAlign: 'center' }}>
                    <Link to='/' onClick={window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <ImageLogo src={process.env.PUBLIC_URL + '/assets/logo.png' } alt="RevenantZ Logo" sx={{ width: '175px' }} />
                    </Link>
                </Grid>
                <Grid item xs={2} sx={{ textAlign: 'center' }}>
                    <a href={config.links.ranks}>
                        <LinkStyled variant='span' disableRipple>                        
                            RANK AND STATS
                        </LinkStyled>                
                    </a>
                </Grid>
                <Grid item xs={2} sx={{ textAlign: 'center' }}>
                    <a href={config.links.bans}>
                        <LinkStyled variant='span' disableRipple>
                            BANS
                        </LinkStyled>
                    </a>
                </Grid>
            </Grid>
          </AppBarStyle>
    );
}

export default Navbar