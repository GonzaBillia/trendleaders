import { useState } from 'react'
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider} from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  const [theme, colorMode] = useMode()

  return (
    <>
      <ColorModeContext.Provider value={useMode(colorMode)}>
          <ThemeProvider theme={useMode(theme)[0]}>
              <CssBaseline />
              <main className='content'>
                <NavBar />
                <Routes>
                  <Route path="/trendleaders/" element={<Home />} />
                </Routes>
                <Footer />
              </main>
          </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  )
}

export default App
