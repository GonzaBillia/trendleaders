import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { useContext, useState } from 'react'
import { ColorModeContext, tokens } from '../../theme'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

const NavBar = () => {

    

    //scrollToggle
    const [navScroll, setNavScroll] = useState(false)
    const setNav = () => {
        if (window.scrollY >= 48) {
            setNavScroll(true)
        } else {
            setNavScroll(false)
        }
    }

    window.addEventListener('scroll', setNav)

    //saved img render
    const logoDarkUrl = 'https://firebasestorage.googleapis.com/v0/b/trendleaders-a31a9.appspot.com/o/logoDark2.svg?alt=media&token=6debfbbd-6493-4fac-9f3b-f6032c1c7649'
    const logoLightUrl = 'https://firebasestorage.googleapis.com/v0/b/trendleaders-a31a9.appspot.com/o/logoLight2.svg?alt=media&token=1314b1fe-bb37-46eb-a35c-87b9f13877da'
    const logoIconUrl = 'https://firebasestorage.googleapis.com/v0/b/trendleaders-a31a9.appspot.com/o/iconLogo.svg?alt=media&token=8a815a68-4fad-4c9d-b372-c8b79c78afb0'

    
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)

    return (
        <>
        {navScroll === false ?
        <Box backgroundColor={colors.primary[400]} className='top-0 z-50 drop-shadow-md'>
            <Box className='container mx-auto p-5 grid grid-cols-12 justify-between items-center'>
                <Box className='flex items-center h-8 col-span-3'>
                    <Link to={'/trendleaders/'}>
                        <img className='h-8' src={theme.palette.mode === 'dark' ? logoDarkUrl : logoLightUrl} alt='logo' />
                    </Link>
                </Box>
                <Box className='flex justify-around items-center col-span-6'>
                    <NavLink to={'/trendleaders/services'} className={({ isActive }) => isActive ? 'border-b-4 border-orange-900' : undefined}>
                        <Typography variant='h6' fontWeight={700}>Services</Typography>
                    </NavLink>
                    <NavLink to={'/trendleaders/portfolio'} className={({ isActive }) => isActive ? 'border-b-4 border-orange-900' : undefined}>
                        <Typography variant='h6' fontWeight={700}>Portfolio</Typography>
                    </NavLink>
                    <NavLink to={'/trendleaders/about'} className={({ isActive }) => isActive ? 'border-b-4 border-orange-900' : undefined}>
                        <Typography variant='h6' fontWeight={700}>About Us</Typography>
                    </NavLink>
                    <NavLink to={'/trendleaders/contact'} className={({ isActive }) => isActive ? 'border-b-4 border-orange-900' : undefined}>
                        <Typography variant='h6' fontWeight={700}>Contact Us</Typography>
                    </NavLink>
                </Box>
                <Box className='col-span-3 flex justify-end' gap={1}>
                    <IconButton>
                        <Link to={'/trendleaders/faq'}>
                            <HelpOutlineOutlinedIcon />
                        </Link>
                    </IconButton>
                    <IconButton>
                        <SupportAgentOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <Link to={'/trendleaders/login'}>
                            <Person2OutlinedIcon />
                        </Link>
                    </IconButton>
                    <IconButton onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode === 'dark' ? (
                            <DarkModeOutlinedIcon />
                        ) : (
                            <LightModeOutlinedIcon />
                        )}
                    </IconButton>
                </Box>
            </Box>
        </Box>
        :
        <Box backgroundColor={colors.primary[400]} className='fixed w-full top-0 z-50 drop-shadow-md'>
            <Box className='container mx-auto p-2 grid grid-cols-12 justify-between'>
                <Box className='flex h-10 col-span-2 col-start-1' gap={2}>
                    <IconButton>
                        <Link to={'/trendleaders/faq'}>
                            <HelpOutlineOutlinedIcon />
                        </Link>
                    </IconButton>
                    <IconButton>
                        <SupportAgentOutlinedIcon />
                    </IconButton>
                </Box>
                <Box className='flex justify-around items-center col-span-2 col-start-4'>
                    <NavLink to={'/trendleaders/services'} className={({ isActive }) => isActive ? 'border-b-4 border-orange-900' : undefined}>
                        <Typography variant='h6' fontWeight={700}>Services</Typography>
                    </NavLink>
                    <NavLink to={'/trendleaders/portfolio'} className={({ isActive }) => isActive ? 'border-b-4 border-orange-900' : undefined}>
                        <Typography variant='h6' fontWeight={700}>Portfolio</Typography>
                    </NavLink>
                </Box>
                <Box className='flex col-start-6 h-12 col-span-2 justify-center items-center rounded-full'>
                    <Link to={'/trendleaders/'}>
                        <img className='h-10' src={logoIconUrl} alt='logo' />
                    </Link>
                </Box>
                <Box className='flex justify-around items-center col-span-2 col-start-8'>
                    <NavLink to={'/trendleaders/about'} className={({ isActive }) => isActive ? 'border-b-4 border-orange-900' : undefined}>
                        <Typography variant='h6' fontWeight={700}>About Us</Typography>
                    </NavLink>
                    <NavLink to={'/trendleaders/contact'} className={({ isActive }) => isActive ? 'border-b-4 border-orange-900' : undefined}>
                        <Typography variant='h6' fontWeight={700}>Contact Us</Typography>
                    </NavLink>
                </Box>
                <Box className='col-span-1 col-start-12 flex justify-end' gap={2}>
                    <IconButton>
                        <Link to={'/trendleaders/login'}>
                            <Person2OutlinedIcon />
                        </Link>
                    </IconButton>
                    <IconButton onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode === 'dark' ? (
                            <DarkModeOutlinedIcon />
                        ) : (
                            <LightModeOutlinedIcon />
                        )}
                    </IconButton>
                </Box>
            </Box>
        </Box>}

        </>
    )
}

export default NavBar