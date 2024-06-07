import React from 'react'
import { Box } from '@mui/material'
import BannerHeader from '../components/BannerHeader'
import ProyectsList from '../components/ProyectsList'
import BrandsCarousel from '../components/BrandsCarousel'
import TestimonialsCarousel from '../components/TestimonialsCarousel'

const Portfolio = () => {
    return (
        <Box minHeight={'70vh'}>
            <BannerHeader section={'portfolio'} />
            <ProyectsList section={true} />
            <BrandsCarousel section={true} />
            <TestimonialsCarousel />
        </Box>
    )
}

export default Portfolio