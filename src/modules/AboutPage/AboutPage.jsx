import React, { useContext, useEffect } from 'react'
import { Grid, Typography } from '@mui/material'
import { styled, Box } from '@mui/system'
import { useLocation } from 'react-router-dom'

import { RefContext } from '../../hooks/context/RefContext'

import { RedButton, TextWithRedLine } from '../../components/CommonComponents'
import config from '../../config.json'

const PageHeader = styled(TextWithRedLine)({
    cursor: 'unset',
    fontWeight: 'bold',
    fontSize: '8rem',
    letterSpacing: '15px',

    '::after': {
        transition: 'left 0.3s',
        width: '250px',
        height: '10px',
        bottom: '20px'
    },

    '@media (max-width: 1600px)': {
        fontSize: '5rem',
        marginTop: '30px',
        '::after': {
            bottom: '10px',
            width: '150px',
        }
    },
})

const InfoHeader = styled(Typography)({
    fontSize: '3rem',
    margin: '10px 0',
    marginRight: '50px',
    fontWeight: '700',
    color: 'red',
    letterSpacing: '10px',

    '@media (max-width: 1600px)': {
        fontSize: '2.5rem',
        letterSpacing: '8px',
    }
})

const InfoText = styled(Typography)({
    fontSize: '1.5rem',
    margin: '20px 0',
    marginRight: '250px',

    '@media (max-width: 1600px)': {
        fontSize: '1.25rem',
        margin: '10px 0',
        marginRight: '150px',
    }
})

const DexterImage = styled('img') ({
    height: '650px', 
    width: 'auto',
    position: 'absolute',

    '@media (max-width: 1600px)': {
        height: '505px',
    },

})

const AboutPage = () => {
    const location = useLocation()
    const refContext = useContext(RefContext)

    useEffect(() => {
        if (location.pathname === '/about') {
            refContext.aboutPage.current?.scrollIntoView({ behavior: 'smooth' })
        }
    }, [location, refContext.aboutPage])

    return (
        <Box sx={{
                height: '100%',
                backgroundColor: '#1b1b1b',
                display: 'flex',
                alignItems: 'stretch'
            }} 
            ref={refContext.aboutPage}
        >
            <Grid container maxHeight={false}>
                <Grid item xs={6} sx={{ textAlign: 'center' }}>
                    <PageHeader disableRipple>
                        ABOUT US
                    </PageHeader>
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={12} maxHeight='100%'>
                    <Grid container maxHeight='100%'>
                        <Grid item xs={6}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                height: '100%',
                                marginTop: '50px'
                            }}>
                                <DexterImage src={process.env.PUBLIC_URL + '/assets/images/dexter.png'} alt='dexter'/>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-evenly',
                                height: '100%',
                                padding: '0 0.5rem',

                            }}>
                                <InfoHeader component={'h2'}>
                                    REVENANTZ
                                </InfoHeader>
                                <InfoText component={'span'} sx={{ fontWeight: '700' }}>
                                    AN ASIAN GAMING COMMUNITY WHERE PLAYERS CAN HAVE FUN & MAKE NEW FRIENDS.
                                </InfoText>
                                <InfoText component={'span'}>
                                    Revenantz is a CS:GO Community with servers accross Asia, mainly in Singapore & India.
                                </InfoText>
                                <InfoText component={'span'}>
                                    We host events of many esports titles such as CS, Valorant, etc along with community events in our custom Counter-Strike servers.
                                </InfoText>
                                <InfoText component={'span'}>
                                    Feel free to email us regarding Scrim / Tournament CS:GO Servers & Esports related projects. 
                                </InfoText>
                                <a href={`mailto:${config.mail}`}>
                                    <RedButton sx={{ width: '250px', margin: '20px 0', fontWeight: '600' }}>
                                        Contact us via Email
                                    </RedButton>
                                </a>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AboutPage