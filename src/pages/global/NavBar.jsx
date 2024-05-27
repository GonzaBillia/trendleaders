import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext, tokens } from '../../theme'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import { Person2Outlined } from '@mui/icons-material'

const NavBar = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)

    return (

        <Box backgroundColor={colors.primary[400]}>
            <Box className='container mx-auto p-5 grid grid-cols-12 justify-between'>
                <Box className='flex h-8 col-span-3'>
                    <Link to={'/trendleaders/'}>
                        <img className='h-8' src={theme.palette.mode === 'dark' ? 'trendleaders/src/assets/full-logo-dark.svg' : 'trendleaders/src/assets/full-logo-light.svg'} alt='logo' />
                    </Link>
                </Box>
                <Box className='flex justify-around items-center col-span-6'>
                    <NavLink to={'/trendleaders/services'}>
                        <Typography variant='h6'>Services</Typography>
                    </NavLink>
                    <NavLink to={'/trendleaders/portfolio'}>
                        <Typography variant='h6'>Portfolio</Typography>
                    </NavLink>
                    <NavLink to={'/trendleaders/about'}>
                        <Typography variant='h6'>About Us</Typography>
                    </NavLink>
                    <NavLink to={'/trendleaders/contact'}>
                        <Typography variant='h6'>Contact Us</Typography>
                    </NavLink>
                </Box>
                <Box className='col-span-3 flex justify-end'>
                    <IconButton>
                        <Person2Outlined />
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