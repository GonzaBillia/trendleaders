import { useTheme, Box, Typography, Button } from '@mui/material'
import React from 'react'
import { tokens } from '../theme'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';


const ContactQuestions = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box className='w-full py-12 lg:py-32' backgroundColor={colors.background[100]}>
            <Box className='container mx-auto grid grid-cols-2 gap-4 px-8'>
                <Box className='col-span-2 text-center pb-8'>
                    <Typography variant='h1' fontWeight={700} color={colors.grey[100]} className='pb-4'>Frequently Asked Questions</Typography>
                    <Typography variant='h4' color={colors.grey[100]}>We're here to help you learn more.</Typography>
                </Box>
                <Box className='col-span-1 flex-col'>
                    <Accordion sx={{ backgroundColor: colors.primary[400] }} className='p-4 my-2'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-header"
                        >
                            <Typography variant='h4' fontWeight={500} color={colors.grey[100]}>I Want to Know More About Your Services</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant='h5' color={colors.grey[100]}>You can read the frequently asked questions in the FAQ section</Typography>
                        </AccordionDetails>
                        <AccordionActions>
                            <Link to={'/trendleaders/faq'}>
                            <Button variant='contained' sx={[{backgroundColor: colors.orangeAccent[500]}, {'&:hover': {backgroundColor: colors.orangeAccent[600]}}]}>FAQ Section</Button>
                            </Link>
                        </AccordionActions>
                    </Accordion>
                    <Accordion defaultExpanded sx={{ backgroundColor: colors.primary[400] }} className='p-4 my-2'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-header"
                        >
                            <Typography variant='h4' fontWeight={500} color={colors.grey[100]}>How can I contact you?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant='h5' color={colors.grey[100]}>Contact us going to our "Contact Us" Section or click the next Contact button</Typography>
                        </AccordionDetails>
                        <AccordionActions>
                            <Link to={'/trendleaders/contact'}>
                            <Button variant='contained' sx={[{backgroundColor: colors.orangeAccent[500]}, {'&:hover': {backgroundColor: colors.orangeAccent[600]}}]}>Contact Center</Button>
                            </Link>
                        </AccordionActions>
                    </Accordion>
                </Box>
                <Box className='col-span-1 flex-col'>
                    <Accordion defaultExpanded sx={{ backgroundColor: colors.primary[400] }} className='p-4 my-2'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-header"
                        >
                            <Typography variant='h4' fontWeight={500} color={colors.grey[100]}>How I Get Started?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant='h5' color={colors.grey[100]}>You can Register Clicking the "User" Button below to start the Journey!</Typography>
                        </AccordionDetails>
                        <AccordionActions>
                            <Link to={'/trendleaders/login'}>
                            <Button variant='contained' sx={[{backgroundColor: colors.orangeAccent[500]}, {'&:hover': {backgroundColor: colors.orangeAccent[600]}}]}>Register or Login</Button>
                            </Link>
                        </AccordionActions>
                    </Accordion>
                    <Accordion sx={{ backgroundColor: colors.primary[400] }} className='p-4 my-2'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-header"
                        >
                            <Typography variant='h4' fontWeight={500} color={colors.grey[100]}>I Need Assistance Right Now</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant='h5' color={colors.grey[100]}>We have online agents available 24/7! let's go chat with us</Typography>
                        </AccordionDetails>
                        <AccordionActions>
                            <Button variant='contained' sx={[{backgroundColor: colors.orangeAccent[500]}, {'&:hover': {backgroundColor: colors.orangeAccent[600]}}]}>Live Assistance</Button>
                        </AccordionActions>
                    </Accordion>
                </Box>
            </Box>
        </Box>
    )
}

export default ContactQuestions