import React from 'react'
import { Box, Typography, useTheme, Button } from '@mui/material'
import { tokens } from '../theme'
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody
} from "@material-tailwind/react";
import { PhoneIcon, CurrencyDollarIcon, PaintBrushIcon, BuildingStorefrontIcon } from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom';


const ServicesTimeline = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)



    return (
        <Box className='w-full' backgroundColor={colors.primary[400]}>
            <Box className='container mx-auto py-32'>
                <Box className='flex flex-col justify-center items-center'>
                    <Typography variant='h1' fontWeight={700} color={colors.grey[100]} className='pb-4'>Our Services</Typography>
                    <Typography variant='h4' color={colors.grey[100]} className='pb-4'>Let's see how we work, step by step</Typography>
                </Box>

                <Box className="flex justify-center pt-16">
                    <Timeline className="w-[48rem]">
                        <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader>
                                <TimelineIcon className="p-2" style={{ backgroundColor: '#faee20' }}>
                                    <PhoneIcon className="h-6 w-6" />
                                </TimelineIcon>
                                <Typography variant="h3" fontWeight={500} color={colors.grey[100]}>
                                    Do The Call
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography variant="h5" color={colors.grey[200]}>
                                    The most important step is the first step. Get in touch with the team fullfilling the contact form or purchasing a subscription plan we offer you or click the next button. Once you do that, you will create your account and we will set your work team to start.
                                </Typography>
                                <Box className='flex justify-end gap-2 pt-4'>
                                    <Link to='/trendleaders/contact'>
                                        <Button variant='contained' sx={[{ backgroundColor: colors.orangeAccent[500] }, { '&:hover': { backgroundColor: colors.orangeAccent[600] } }]}>Go to Contact</Button>
                                    </Link>
                                    <Button variant='contained' sx={[{ backgroundColor: colors.orangeAccent[500] }, { '&:hover': { backgroundColor: colors.orangeAccent[600] } }]}>Go to Plans</Button>
                                </Box>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader>
                                <TimelineIcon className="p-2" style={{ backgroundColor: '#672d93' }}>
                                    <PaintBrushIcon className="h-6 w-6" />
                                </TimelineIcon>
                                <Typography variant="h3" fontWeight={500} color={colors.grey[100]}>
                                    Design Your Merch Products
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography variant="h5" color={colors.grey[200]}>
                                    You are allready in! Now it&apos;s time to design your merch products. We&apos;ll start with the basics. Depending your subscription, the team will start giving you all the tools you need. Starting with the type of products, how many and when you want to sell them. If you allready have an account, go to the Merch Dashboard clicking the next button.
                                </Typography>
                                <Box className='flex justify-end gap-2 pt-4'>
                                    <Link to='/trendleaders/contact'>
                                        <Button variant='contained' sx={[{ backgroundColor: colors.orangeAccent[500] }, { '&:hover': { backgroundColor: colors.orangeAccent[600] } }]}>Go to my Products</Button>
                                    </Link>
                                </Box>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader>
                                <TimelineIcon className="p-2" style={{ backgroundColor: '#ff51ac' }}>
                                    <BuildingStorefrontIcon className="h-6 w-6" />
                                </TimelineIcon>
                                <Typography variant="h3" fontWeight={500} color={colors.grey[100]}>
                                    Get Your Store
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography variant="h5" color={colors.grey[200]}>
                                    Great! Now you got your products, the team will set up your store. You will have a lot of options to customize it. like store templates, colors, your logo, etc. If you allready have an account and your Store is Online, just click the next button.
                                </Typography>
                                <Box className='flex justify-end gap-2 pt-4'>
                                    <Link to='/trendleaders/contact'>
                                        <Button variant='contained' sx={[{ backgroundColor: colors.orangeAccent[500] }, { '&:hover': { backgroundColor: colors.orangeAccent[600] } }]}>Go to my Store</Button>
                                    </Link>
                                </Box>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineHeader>
                                <TimelineIcon className="p-2" style={{ backgroundColor: "#0efe4f" }}>
                                    <CurrencyDollarIcon className="h-6 w-6" />
                                </TimelineIcon>
                                <Typography variant="h3" fontWeight={500} color={colors.grey[100]}>
                                    Start Selling and Profit
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography variant="h5" color={colors.grey[200]}>
                                    All is setted up! Now it&apos;s time to do what you best know, share your Merch with your fans and followers! If you allready have an account, go to the Dashboard to see your live analythics and monthly reports we have for you clicking this button.
                                </Typography>
                                <Box className='flex justify-end gap-2 pt-4'>
                                    <Link to='/trendleaders/contact'>
                                        <Button variant='contained' sx={[{ backgroundColor: colors.orangeAccent[500] }, { '&:hover': { backgroundColor: colors.orangeAccent[600] } }]}>Go to my dashboard</Button>
                                    </Link>
                                </Box>
                            </TimelineBody>
                        </TimelineItem>
                    </Timeline>
                </Box>
            </Box>
        </Box>
    )
}

export default ServicesTimeline