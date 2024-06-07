import React from 'react'
import { Box } from '@mui/material'
import BannerHeader from '../components/BannerHeader'
import AboutPresentation from '../components/AboutPresentation'
import Team from '../components/Team'

const About = () => {
    return (
        <Box minHeight={'70vh'}>
            <BannerHeader section={'about-us'} />
            <AboutPresentation />
            <Team />
        </Box>
    )
}

export default About