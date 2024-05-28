import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext, tokens } from '../../theme'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

const NavBar = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)

    return (

        <Box backgroundColor={colors.primary[400]} className='top-0 z-50 drop-shadow-md'>
            <Box className='container mx-auto p-5 grid grid-cols-12 justify-between'>
                <Box className='flex h-8 col-span-3'>
                    <Link to={'/trendleaders/'}>
                        <img className='h-8' src={theme.palette.mode === 'dark' ? 'trendleaders/src/assets/logo-white.png' : 'trendleaders/src/assets/logo-black.png'} alt='logo' />
                    </Link>
                </Box>
                <Box className='flex justify-around items-center col-span-6'>
                    <NavLink to={'/trendleaders/services'} className={({ isActive }) => isActive ? 'border-b-4 border-orange-900' : undefined}>
                        <Typography variant='h6'>Services</Typography>
                    </NavLink>
                    <NavLink to={'/trendleaders/portfolio'} className={({ isActive }) => isActive ? 'border-b-4 border-orange-900' : undefined}>
                        <Typography variant='h6'>Portfolio</Typography>
                    </NavLink>
                    <NavLink to={'/trendleaders/about'} className={({ isActive }) => isActive ? 'border-b-4 border-orange-900' : undefined}>
                        <Typography variant='h6'>About Us</Typography>
                    </NavLink>
                    <NavLink to={'/trendleaders/contact'} className={({ isActive }) => isActive ? 'border-b-4 border-orange-900' : undefined}>
                        <Typography variant='h6'>Contact Us</Typography>
                    </NavLink>
                </Box>
                <Box className='col-span-3 flex justify-end' gap={2}>
                    <IconButton>
                        <Person2OutlinedIcon />
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
    )
}

export default NavBar