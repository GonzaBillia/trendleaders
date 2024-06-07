import React from 'react'
import { Box } from '@mui/material'
import BannerHeader from '../components/BannerHeader'
import ContactForm from '../components/ContactForm'
import PricingOptions from '../components/PricingOptions'
import ContactQuestions from '../components/ContactQuestions'

const Contact = () => {
    return (
        <Box minHeight={'70vh'}>
            <BannerHeader section={'contact-us'}/>
            <ContactForm />
            <PricingOptions />
            <ContactQuestions />
        </Box>
    )
}

export default Contact