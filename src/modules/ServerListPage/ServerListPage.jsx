import { Grid, Tab, Tabs, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import { styled, Box } from '@mui/system';
import { ReactSVG } from 'react-svg';

import { TextWithRedLine } from '../../components/CommonComponents'

import config from '../../config.json'

const PageHeader = styled(TextWithRedLine)({
    cursor: 'unset',
    fontWeight: 'bold',
    fontSize: '6rem',
    letterSpacing: '15px',

    '::after': {
        transition: 'left 0.3s',
        width: '250px',
        height: '10px',
        bottom: '20px'
    },

    '@media (max-width: 1600px)': {
        fontSize: '4rem',
        marginTop: '30px',
        '::after': {
            bottom: '10px',
            width: '150px',
        }
    },
})

const GameTab = styled(Tab)({
    margin: '0 1.5rem',
    cursor: 'pointer',
    transition: 'transform 0.25s, box-shadow 0.25s',
    '@media (max-width: 1600px)': {
    },
    ':hover': {
        transform: 'scale(1.20)',
    },
    '&.Mui-selected': {
        transform: 'scale(1.25)',
    },
})

const TabIcon = styled(ReactSVG)({
    svg: {
        fill: 'white',
        width: '100px',
        height: 'auto',
    },

    '@media (max-width: 1600px)': {
        svg: {
            fill: 'white',
            width: '100px',
            height: 'auto',
        },
    }

})

const SeverButton = styled(Button)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: '20px',
    margin: '10px',
    border: '1px solid white',
    borderRadius: '5px',
    height: '10rem',
    width: '20rem',
    transition: 'transform 0.25s',
    ':hover': {
        transform: 'scale(1.05)',
    }
})

const getCsgoString = (ipAddress) => `steam://connect/${ipAddress}/730/`

const ServerListPage = () => {

    const [currentGame, setCurrentGame] = useState('csgo')

    const handleChange = (event, value) => setCurrentGame(value)

    const handleClick = (ipAddress) => {
        switch (currentGame) {
            case 'csgo': return window.open(getCsgoString(ipAddress), '_self')
            default: return
        }
    }

    return (
        <Box sx={{
            height: '100%',
            backgroundColor: '#1b1b1b',
            overflowY: 'hidden',
            '@media (max-width: 1600px)': {
                paddingBottom: '8rem'
            }
        }}>
            <Grid container>
                <Grid item xs={12} textAlign={'center'}>
                    <PageHeader disableRipple>
                        SERVERS
                    </PageHeader>
                </Grid> 
                <Grid item xs={12}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={currentGame} onChange={handleChange} centered sx={{
                            '.MuiTabs-indicator': {
                                display: 'none',
                            },
                            margin: '25px 0'
                        }}>
                            {
                                Object.keys(config.games).map((game) => {
                                    return (
                                        <GameTab value={game} 
                                            key={game} 
                                            icon={<TabIcon src={process.env.PUBLIC_URL + `assets/svg/${game}-logo-white.svg`}/>}
                                            disableRipple
                                            sx={
                                                game === 'minecraft' ? { marginTop: '10px' } : null
                                            }
                                        />
                                    )
                                })
                            }
                        </Tabs>
                    </Box>
                    <Box sx={{ 
                            padding: '0 30rem', 
                            display: 'flex', 
                            justifyContent: 'space-evenly', 
                            flexWrap: 'wrap', 
                            alignItems: 'center', 
                            height: '100%',
                            '@media (max-width: 1600px)': {
                                padding: '0 20rem', 
                            }
                        }}
                    >
                        {
                            config.games[currentGame]
                                .servers.map(server => {
                                    return (
                                        <SeverButton key={server.name} onClick={() => handleClick(server.ip)}>
                                            <Typography component={'h3'} fontSize={'2.5rem'} fontWeight={'600'}>
                                                { server.name }
                                            </Typography>
                                            <Typography component={'h4'} fontSize={'2.25em'} color={'red'}>
                                                { server.ip }
                                            </Typography>
                                        </SeverButton>
                                    )
                            })
                        }
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ServerListPage