import React, { useState } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../theme';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { db } from '../firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const ToolsDemoPanels = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    //Docs
    const [printful, setPrintful] = useState({})
    const [shopify, setShopify] = useState({})
    const [stripe, setStripe] = useState({})

    const getPrintful = async () => {
        const docRef = doc(db, "plansData", "XGiDnnSRTLg4IFtSkbSV")
        const docSnap = await getDoc(docRef)
        setPrintful(docSnap.data())
    }

    const getShopify = async () => {
        const docRef = doc(db, "plansData", "JctIylLQhrdzw0zv6dtW")
        const docSnap = await getDoc(docRef)
        setShopify(docSnap.data())
    }

    const getStripe = async () => {
        const docRef = doc(db, "plansData", "oEl82sJeFQGNvvLKOKBB")
        const docSnap = await getDoc(docRef)
        setStripe(docSnap.data())
    }


    const [activeTab, setActiveTab] = React.useState("printful");
    const data = [
        {
            label: "PRINTFUL",
            value: "printful",

            //row 1
            titleT1: "Make Unique Designs!",
            descT1: "Custom Merchandising for your Fans and Followers to make your content more personal and unique.",

            titleT2: "How we Work?",
            descT2: "We create your products through Print on Demand, a practical and optimized system, that allows you to have great quality designs with a lot of types of compatible clothing materials.",

            //row 2
            titleT3: "Available Brands",
            descT3: ""
        },
        {
            label: "SHOPIFY",
            value: "shopify",
            //row 1
            titleT1: "Shopify Stuff",
            descT1: "Custom Merchandising for your Fans and Followers to make your content more personal and unique.",
        },
        {
            label: "STRIPE",
            value: "stripe",
            desc: `We're not always in the position that we want to be at.
    We're constantly growing. We're constantly making mistakes. We're
    constantly trying to express ourselves and actualize our dreams.`,
        },

    ]


    return (
        <Box className='w-full py-32' backgroundColor={colors.primary[400]}>
            <Box className='container mx-auto'>
                <Box className='flex flex-col justify-center items-center pb-16'>
                    <Typography variant='h1' fontWeight={700} color={colors.grey[100]} className='pb-4'>Tools Advantages</Typography>
                    <Typography variant='h4' color={colors.grey[100]}>See some advantages of using our tools</Typography>
                </Box>
                <Tabs value={activeTab} className='pt-4'>
                    <TabsHeader
                        className="rounded-none border-b bg-transparent"
                        style={{ borderColor: colors.grey[700]}}
                        indicatorProps={{
                            className:
                                "border-b-2 shadow-none bg-transparent rounded-none h-12 pt-8 pb-5",
                            style: {
                                borderColor: colors.orangeAccent[500],
                            },
                        }}
                        
                    >
                        {data.map(({ label, value }) => (
                            <Tab
                                key={value}
                                value={value}
                                onClick={() => setActiveTab(value)}
                                className='flex flex-col justify-center items-center h-12'
                            >
                                <Typography variant="h4" 
                                    fontWeight={700}
                                    color= {activeTab === value ? colors.grey[100] : colors.grey[300]}>{label}</Typography>
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody className='h-[1000px]' style={{backgroundColor: colors.background[100]}}>
                        {data.map(({ value, titleT1, descT1, titleT2, descT2, titleT3 }) => (
                            <TabPanel key={value} value={value} className='grid grid-cols-12 grid-rows-12 gap-4 w-full h-full'>
                                {/* ROW 1 */}
                                <Box backgroundColor={colors.primary[400]} className='col-start-1 col-span-6 row-start-1 row-span-4 rounded-xl'>
                                    <Box className='w-full h-full relative'>
                                        <img src='https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80' alt="printful" className='w-full h-full object-cover rounded-xl' />
                                        <Box className='p-12 absolute inset-0 flex flex-col h-full w-full items-center justify-center bg-black/50 rounded-xl'>
                                            <Typography variant='h1' fontWeight={700} color='white' className='pb-8'>{titleT1}</Typography>
                                            <Typography variant='h3' fontWeight={500} color='white' className='text-center'>{descT1}</Typography>
                                        </Box>
                                    </Box>
                                    
                                </Box>
                                <Box backgroundColor={colors.primary[400]} className='col-start-7 col-span-6 row-start-1 row-span-4 rounded-xl'>
                                    <Box className='p-6 relative w-full h-full'>
                                        <Box className='absolute top-0 right-0 w-16 h-16 flex justify-center items-center rounded-bl-xl rounded-tr-xl' backgroundColor={colors.orangeAccent[500]} >
                                            <QuestionMarkIcon fontSize='large' className=' text-white' />
                                        </Box>
                                        <Box borderColor={colors.orangeAccent[500]} className='p-8 flex flex-col h-full w-full items-start justify-around rounded-xl border-2'>
                                            <Typography variant='h2' fontWeight={500} color={colors.grey[100]} className='pb-8'>{titleT2}</Typography>
                                            <Typography variant='h4' color={colors.grey[100]} className=''>{descT2}</Typography>
                                        </Box>
                                    </Box>
                                </Box>

                                {/* ROW 2 */}
                                <Box backgroundColor={colors.primary[400]} className='col-start-1 col-span-4 row-start-5 row-span-4 rounded-xl'>
                                    <Box className='relative w-full h-full'>
                                        <Box className='absolute top-0 w-full h-16 flex justify-center items-center bg-black/80 rounded-t-xl'>
                                            <Typography variant='h3' fontWeight={500} color='white' className=''>{titleT3}</Typography>
                                        </Box>
                                        
                                    </Box>
                                </Box>
                                <Box backgroundColor={colors.background[100]} borderColor={colors.primary[400]} className='col-start-5 col-span-4 row-start-5 row-span-4 rounded-xl border-2'>

                                </Box>
                                <Box backgroundColor={colors.primary[400]} className='col-start-9 col-span-4 row-start-5 row-span-4 rounded-xl'>

                                </Box>

                                {/* ROW 2 */}
                                <Box backgroundColor={colors.primary[400]} className='col-start-1 col-span-5 row-start-9 row-span-4 rounded-xl'>

                                </Box>
                                <Box backgroundColor={colors.primary[400]} className='col-start-6 col-span-7 row-start-9 row-span-4 rounded-xl'>

                                </Box>
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>
            </Box>
        </Box>

    )
}

export default ToolsDemoPanels