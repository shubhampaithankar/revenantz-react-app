import React, { useRef, Suspense } from 'react'
import { Container } from '@mui/system'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import Background from './components/Background/Background'
import Navbar from './components/Navbar/Navbar'

import { LandingPage, AboutPage, ServerListPage } from './modules/modules'

const theme  = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Rajdhani',
      color: 'whitesmoke'
    },
  },
})

const App = () => {
  const landingPage = useRef(null)
  const aboutPage = useRef(null)
  const serverListPage = useRef(null)

  const navbarProps = {
    landingPage, aboutPage, serverListPage
  }
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>Loading...</div>}>
        <Background />
        <Navbar {...navbarProps} />
        <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
          <LandingPage landingPage={landingPage} />
          <AboutPage aboutPage={aboutPage} />
          <ServerListPage />
        </Container>
      </Suspense>
    </ThemeProvider>
  )
}

export default App
