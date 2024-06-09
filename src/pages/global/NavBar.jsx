import {
    Box, IconButton, Typography, useTheme, Card, List,
    ListItem
} from '@mui/material'
import { useContext, useState } from 'react'
import { ColorModeContext, tokens } from '../../theme'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Alert,
    Drawer,

} from "@material-tailwind/react";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import BubbleChartOutlinedIcon from '@mui/icons-material/BubbleChartOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const NavBar = () => {



    //scrollToggle
    const [navScroll, setNavScroll] = useState(false)
    const setNav = () => {
        if (window.scrollY >= 48 && screen.width >= 958) {
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

    //sidebar func
    const [open, setOpen] = React.useState(0);
    const [openAlert, setOpenAlert] = React.useState(true);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);

    const Sidebar = () => {
        return (
            <Drawer open={isDrawerOpen} onClose={closeDrawer} size={350}>
                <Card
                    sx={{
                        backgroundColor: colors.primary[400]
                    }}
                    shadow={false}
                    className="h-full w-full p-4"
                >
                    <Box className="mb-2 flex items-center gap-4 p-4">
                        <IconButton variant="text" size="lg" onClick={closeDrawer}>
                            <XMarkIcon className="h-8 w-8 stroke-2" color={colors.grey[100]} />
                        </IconButton>
                        <Typography variant="h3" fontWeight={500} color={colors.grey[100]}>
                            Menu
                        </Typography>
                    </Box>
                    <Box className='flex flex-col items-between'>
                        <List className='pb-4'>
                            <Link to={'/trendleaders/services'}>
                                <ListItem>
                                    <ListItemPrefix>
                                        <BubbleChartOutlinedIcon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    Services
                                </ListItem>
                            </Link>
                            <Link to={'/trendleaders/portfolio'}>
                                <ListItem>
                                    <ListItemPrefix>
                                        <BusinessCenterOutlinedIcon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    Portfolio
                                </ListItem>
                            </Link>
                            <Link to={'/trendleaders/contact'}>
                                <ListItem>
                                    <ListItemPrefix>
                                        <LocalPhoneOutlinedIcon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    Contact Us
                                </ListItem>
                            </Link>
                            <Link to={'/trendleaders/about'}>
                                <ListItem>
                                    <ListItemPrefix>
                                        <SentimentSatisfiedAltOutlinedIcon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    About Us
                                </ListItem>
                            </Link>
                            <hr className="my-2 border-blue-gray-500" />
                            <Link to={'/trendleaders/login'}>
                                <ListItem>
                                    <ListItemPrefix>
                                        <Person2OutlinedIcon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    Profile
                                </ListItem>
                            </Link>
                            <ListItem>
                                <ListItemPrefix>
                                    <SupportAgentOutlinedIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                Live Assistance
                            </ListItem>
                            <Link to={'/trendleaders/faq'}>
                                <ListItem>
                                    <ListItemPrefix>
                                        <HelpOutlineOutlinedIcon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    FAQ
                                </ListItem>
                            </Link>
                            <ListItem onClick={colorMode.toggleColorMode}>
                                <ListItemPrefix>
                                    {theme.palette.mode === 'dark' ? (
                                        <DarkModeOutlinedIcon />
                                    ) : (
                                        <LightModeOutlinedIcon />
                                    )}
                                </ListItemPrefix>
                                Theme
                            </ListItem>
                        </List>
                        <Alert
                            open={openAlert}
                            className="mt-auto"
                            onClose={() => setOpenAlert(false)}
                        >
                            <img className='mb-4 h-12 w-12' src={logoIconUrl} alt='logo' />
                            <Typography variant="h4" className="pb-2">
                                Be a Trend Leader Now!
                            </Typography>
                            <Typography variant="small" className="font-normal opacity-80">
                                Upgrade to a Premium Leader account to unlock all features!
                            </Typography>
                            <Box className="mt-4 flex gap-3">
                                <Typography
                                    as="a"
                                    href="#"
                                    variant="small"
                                    className="font-medium opacity-80"
                                    onClick={() => setOpenAlert(false)}
                                >
                                    Dismiss
                                </Typography>
                                <Link to={'/trendleaders/contact'}>
                                    <Typography
                                        as="a"
                                        href="#"
                                        variant="small"
                                        className="font-medium"
                                    >
                                        Upgrade Now
                                    </Typography>
                                </Link>
                            </Box>
                        </Alert>
                    </Box>

                </Card>
            </Drawer>
        )
    }

    return (
        <>
            <Sidebar className='lg:hidden' />
            {navScroll === false ?
                <Box backgroundColor={colors.primary[400]} className='fixed lg:static w-full top-0 z-50 drop-shadow-md'>
                    <Box className='lg:container lg:mx-auto p-5 grid grid-cols-8 lg:grid-cols-12 lg:justify-between items-center'>
                        <Box className='lg:hidden col-start-1 col-span-1 flex justify-start'>
                            <IconButton variant="text" size="lg" onClick={openDrawer}>
                                {isDrawerOpen ? (
                                    <XMarkIcon className="h-8 w-8 stroke-2" />
                                ) : (
                                    <Bars3Icon className="h-8 w-8 stroke-2" />
                                )}
                            </IconButton>
                        </Box>
                        <Box className='flex justify-center items-center lg:justify-start lg:h-8 col-span-6 lg:col-span-3'>
                            <Link to={'/trendleaders/'}>
                                <img className='h-8 object-contain' src={theme.palette.mode === 'dark' ? logoDarkUrl : logoLightUrl} alt='logo' />
                            </Link>
                        </Box>
                        <Box className='lg:flex lg:justify-around lg:items-center hidden lg:col-span-6'>
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
                        <Box className='hidden lg:col-span-3 lg:flex justify-end' gap={1}>
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
                        <Box className='flex col-span-2 col-start-1' gap={2}>
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