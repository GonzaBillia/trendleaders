import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../theme'
import { Link } from 'react-router-dom'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const Error = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box minHeight={'70vh'} className= 'grid items-center px-6'>
            <Box className='text-center py-4'>
                <Typography variant='h4' color={colors.redAccent[400]} className='py-5'>404</Typography>
                <Typography variant='h1' className='py-2'>Page Not Found</Typography>
                <Typography variant='h5' className='py-5'>The page you are looking for does not exist.</Typography>

                <Box className='flex justify-center py-8'>
                    <Link to='/trendleaders/' className='flex justify-center items-center gap-x-2'>
                        <ArrowBackOutlinedIcon />
                        <Typography variant='h4' color={colors.blueAccent[400]}>Back to Home</Typography>
                    </Link>
                </Box>
                
            </Box>
        </Box>
    )
}

export default Error