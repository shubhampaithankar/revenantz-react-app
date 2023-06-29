import React from 'react'
import { Container } from '@mui/system'

import Navbar from './components/Navbar/Navbar'
import Background from './components/Background/Background'
import LandingPage from './modules/LandingPage/LandingPage'
import AboutPage from './modules/AboutPage/AboutPage'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const App = () => {

  const theme  = createTheme({
    typography: {
      allVariants: {
        fontFamily: 'Rajdhani',
        color: 'whitesmoke'
      },
    },
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <Background />
        <Navbar />
        <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
          <LandingPage />
          <AboutPage />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
