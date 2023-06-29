import React from 'react'
import { AppBar, Grid } from '@mui/material';
import { styled } from '@mui/system'

import { ImageLogo, TextWithRedLine } from '../CommonComponents';

const LinkStyled = styled(TextWithRedLine)({
    position: 'relative',
    fontSize: '1.75rem',
    fontWeight: '600',

    '@media (max-width: 1600px)': {
        fontSize: '1.2rem',
    },
    
    '::after': {
        transition: 'left 0.3s',
        width: '25px',
        height: '2px',
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
                    <LinkStyled disableRipple>
                        ABOUT US
                    </LinkStyled>
                </Grid>
                <Grid item xs={2} sx={{ textAlign: 'center' }}>
                    <LinkStyled disableRipple>
                        VIP MEMBERSHIP
                    </LinkStyled>
                </Grid>
                <Grid item xs={4} sx={{ textAlign: 'center' }}>
                    <ImageLogo src={process.env.PUBLIC_URL + '/assets/logo.png' } alt="RevenantZ Logo" sx={{ width: '175px' }} />
                </Grid>
                <Grid item xs={2} sx={{ textAlign: 'center' }}>
                    <LinkStyled disableRipple>                        
                        RANK AND STATS
                    </LinkStyled>                
                </Grid>
                <Grid item xs={2} sx={{ textAlign: 'center' }}>
                    <LinkStyled disableRipple>
                        BANS
                    </LinkStyled>
                </Grid>
            </Grid>
          </AppBarStyle>
    );
}

export default Navbar