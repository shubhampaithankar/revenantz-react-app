import { Button, Typography } from '@mui/material'
import { styled } from '@mui/system'

export const ImageLogo = styled('img')({
    height: 'auto',
    cursor: 'pointer',
    transition: 'transform 0.25s, box-shadow 0.25s',

    ':hover': {
        transform: 'scale(1.1)',
        // boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    }
})

export const TextWithRedLine = styled(Button)({

    background: 'transparent',
    border: 'none',
    color: 'whitesmoke',
    letterSpacing: '3px',
    textDecoration: 'none',
    cursor: 'pointer',
    position: 'relative',
    padding: 0,
    transition: 'unset',

    '::after': {
        content: '""',
        position: 'absolute',
        bottom: '-5px',
        left: '0',
        display: 'inline-block',
        backgroundColor: 'red',
    },

    ':hover': {
        backgroundColor: 'unset'
    }
})

export const RedButton = styled(Button)({
    fontSize: '1.25rem',
    backgroundColor: 'red',
    color: 'whitesmoke'
})