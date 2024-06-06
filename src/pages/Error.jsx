import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../theme'
import { Link } from 'react-router-dom'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const Error = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const errorImg = 'https://firebasestorage.googleapis.com/v0/b/trendleaders-a31a9.appspot.com/o/design-template-for-web-page-with-404-error-isometric-page-not-working-error-png.webp?alt=media&token=75c7dfe6-90a2-4d33-a197-10d166af15b8'


    return (
        <Box minHeight={'70vh'} className= 'grid grid-cols-2 items-center px-6 container mx-auto'>
            <Box className='text-center col-span-1 py-4'>
                <Typography variant='h2' fontWeight={500} color={colors.redAccent[400]} className='py-5'>404</Typography>
                <Typography variant='h1' fontWeight={700} className='py-2'>Page Not Found</Typography>
                <Typography variant='h5' className='py-5'>The page you are looking for does not exist.</Typography>

                <Box className='flex justify-center py-8'>
                    <Link to='/trendleaders/' className='flex justify-center items-center gap-x-2'>
                        <ArrowBackOutlinedIcon />
                        <Typography variant='h4' color={colors.blueAccent[400]}>Back to Home</Typography>
                    </Link>
                </Box>
            </Box>
            <Box className='col-span-1 flex justify-center items-center'>
                <img src={errorImg} alt="Error" />

            </Box>
        </Box>
    )
}

export default Error