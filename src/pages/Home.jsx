import { Box, useTheme } from '@mui/material'
import React from 'react'
import { tokens } from '../theme'
import CarouselComponent from '../components/Carousel'
import PlanCards from '../components/PlanCards'
import ProyectsList from '../components/ProyectsList'
import Team from '../components/Team'
import PricingOptions from '../components/PricingOptions'
import BrandsCarousel from '../components/BrandsCarousel'
import TestimonialsCarousel from '../components/TestimonialsCarousel'
import ContactQuestions from '../components/ContactQuestions'

const Home = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box>
            <CarouselComponent />
            <PlanCards />
            <ProyectsList section={false} />
            <BrandsCarousel />
            <Team />
            <TestimonialsCarousel />
            <PricingOptions />
            <ContactQuestions />
        </Box>
    )
}

export default Home