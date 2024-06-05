import React from 'react'
import { Box } from '@mui/material'

import ServicesTimeline from '../components/ServicesTimeline';
import ToolCards from '../components/ToolCards';
import ToolsDemoPanels from '../components/ToolsDemoPanels';
import ServicesHeader from '../components/ServicesHeader';
import ServicesStarted from '../components/ServicesStarted';



const Services = () => {

    return (
        <Box minHeight={'70vh'}>
            <ServicesHeader />
            <ServicesTimeline />
            <ToolCards />
            <ToolsDemoPanels />
            <ServicesStarted />
        </Box>
    )
}

export default Services