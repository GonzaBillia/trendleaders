import { Box, useTheme } from '@mui/material'
import React from 'react'
import { tokens } from '../theme'
import CarouselComponent from '../components/Carousel'

const Home = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box minHeight={'70vh'}>
            <CarouselComponent />
        </Box>
    )
}

export default Home