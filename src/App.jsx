import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Container } from '@mui/material'

import { AppRoutes } from './routes'
import Footer from './components/Footer'


const App = () => {
  return (
    <BrowserRouter>
      <Container 
        maxWidth={false}
        sx={{
            height: '100vh',
            backgroundColor: 'rgb(41, 41, 41)',
            overflowY: 'scroll'
          }}>
        <AppRoutes />
      </Container>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
