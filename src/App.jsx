import { useState } from 'react'
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider} from '@mui/material'
import { Routes, Route, BrowserRouter, ScrollRestoration } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './pages/global/NavBar'
import Footer from './pages/global/Footer'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './pages/Error'
import ScrollToTop from './components/ScrollToTop'
import FAQ from './pages/FAQ'

function App() {
  const [theme, colorMode] = useMode()

  return (
    <>
      <BrowserRouter>
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <main className='content scroll-smooth'>
                  <ScrollToTop />
                  <NavBar />
                  <Routes>
                    <Route path="/trendleaders/" element={<Home />} />
                    <Route path="/trendleaders/services" element={<Services />} />
                    <Route path="/trendleaders/portfolio" element={<Portfolio />} />
                    <Route path="/trendleaders/about" element={<About />} />
                    <Route path="/trendleaders/contact" element={<Contact />} />
                    <Route path='/trendleaders/faq' element={<FAQ />} />
                    <Route path="/trendleaders/*" element={<Error />} />
                  </Routes>
                  <Footer />
                </main>
            </ThemeProvider>
        </ColorModeContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
