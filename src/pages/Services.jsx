import React from 'react'
import { Box } from '@mui/material'

import ServicesTimeline from '../components/ServicesTimeline';
import ToolCards from '../components/ToolCards';
import ToolsDemoPanels from '../components/ToolsDemoPanels';



const Services = () => {

    return (
        <Box minHeight={'70vh'}>
            <ServicesTimeline />
            <ToolCards />
            <ToolsDemoPanels />
        </Box>
    )
}

export default Services