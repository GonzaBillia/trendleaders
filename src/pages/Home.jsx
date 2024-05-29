import { Box, useTheme } from '@mui/material'
import React from 'react'
import { tokens } from '../theme'
import CarouselComponent from '../components/Carousel'
import PlanCards from '../components/PlanCards'
import ProyectsList from '../components/ProyectsList'
import Team from '../components/Team'
import PricingOptions from '../components/PricingOptions'

const Home = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box>
            <CarouselComponent />
            <PlanCards />
            <ProyectsList />
            <Team />
            <PricingOptions />
        </Box>
    )
}

export default Home