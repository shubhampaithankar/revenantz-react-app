import React, { Suspense } from 'react'
import { Container } from '@mui/system'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import Background from './components/Background/Background'
import Navbar from './components/Navbar/Navbar'

import { LandingPage, AboutPage, ServerListPage } from './modules/modules'
import { RefContextProvider } from './hooks/context/RefContext.js'

const theme  = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Rajdhani',
      color: 'whitesmoke'
    },
  },
})

const App = () => {
  return (
    <RefContextProvider>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div>Loading...</div>}>
          <Background />
          <Navbar />
          <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
            <LandingPage /> 
            <AboutPage />
            <ServerListPage />
          </Container>
        </Suspense>
      </ThemeProvider>
    </RefContextProvider>
  )
}

export default App
