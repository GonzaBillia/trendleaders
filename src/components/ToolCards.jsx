import React, { useState, useEffect } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../theme'
import { db } from '../firebase/firebaseConfig';
import { getDoc, doc } from 'firebase/firestore'

const ToolCards = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    //storage imgs
    const printfullBg = 'https://firebasestorage.googleapis.com/v0/b/trendleaders-a31a9.appspot.com/o/banners%2Fsections%2F2148846758.jpg?alt=media&token=35acc0cf-be35-4891-b607-b980593c58bb'
    const shopifyBg = 'https://firebasestorage.googleapis.com/v0/b/trendleaders-a31a9.appspot.com/o/banners%2Fsections%2F96211.jpg?alt=media&token=054d771e-9d8a-4673-ab3f-327effc022c8'
    const stripeBg = 'https://firebasestorage.googleapis.com/v0/b/trendleaders-a31a9.appspot.com/o/banners%2Fsections%2Foffice-620822_1920.jpg?alt=media&token=bf1901cc-df5d-4bbe-90e6-9d42538d28e5'


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

    useEffect(() => {
        getPrintful()
        getShopify()
        getStripe()
    }, [])


    return (
        <Box className='w-full'>

            <Box className="py-32 container mx-auto">
                <Box className='flex flex-col items-center justify-center pb-16'>
                    <Typography variant='h1' fontWeight={700} color={colors.grey[100]} className='pb-4'>The Three Master Tools</Typography>
                    <Typography variant='h4' color={colors.grey[100]}> These are the three tools you will have to get started.</Typography>
                </Box>
                <Box>
                    <Box className='grid grid-cols-3 my-2 '>
                        <Box className='col-span-2 p-8 flex flex-col justify-around h-[400px]' backgroundColor={colors.primary[400]}>
                            <Box className='flex justify-center pt-8'>
                                <Typography variant='h2' fontWeight={500} color={colors.grey[100]}>Product Designing</Typography>
                            </Box>
                            <Box>
                                <Typography variant='h4' color={colors.grey[200]} className='py-8 px-16'>
                                    That is How you be able to create your Merch. We will provide You a Merch Design Professional to help you make the Merch of your Dreams! You need to provide us basic information about your interests, your target audience, your brand identity information, etc.
                                </Typography>
                            </Box>
                            <Box className='flex justify-center items-center'>
                                <Typography variant='h3' fontWeight={500} color={colors.grey[100]}>Provided By: </Typography>
                                <Box className='px-4 h-12 flex justify-center items-center'>
                                    {theme.palette.mode === 'dark' ? 
                                    <img src={printful.logoWhite} alt="Printful" className='h-12' />
                                    :
                                    <img src={printful.logoBlack} alt="Printful" className='h-12' />}
                                </Box>
                            </Box>
                        </Box>
                        <Box className='col-span-1 h-[400px]'>
                            <img src={printfullBg} alt="Printful" className='h-full w-full object-cover' />
                        </Box>
                    </Box>
                    <Box className='grid grid-cols-3 my-2 '>
                        <Box className='col-span-1 h-[400px]'>
                            <img src={shopifyBg} alt="Shopify" className='h-full w-full object-cover' />
                        </Box>
                        <Box className='col-span-2 p-8 flex flex-col justify-around h-[400px]' backgroundColor={colors.primary[400]}>
                            <Box className='flex justify-center pt-8'>
                                <Typography variant='h2' fontWeight={500} color={colors.grey[100]}>Store Providing</Typography>
                            </Box>
                            <Box>
                                <Typography variant='h4' color={colors.grey[200]} className='py-8 px-16'>
                                    We Work with a practical and fast Store provider. Through it you can provide your Merch with your fans and followers. We will do the rest of the work for you.
                                </Typography>
                            </Box>
                            <Box className='flex justify-center items-center'>
                                <Typography variant='h3' fontWeight={500} color={colors.grey[100]}>Provided By: </Typography>
                                <Box className='px-4 h-12 flex justify-center items-center'>
                                    {theme.palette.mode === 'dark' ? 
                                    <img src={shopify.logoWhite} alt="Shopify" className='h-10' />
                                    :
                                    <img src={shopify.logoBlack} alt="Shopify" className='h-10' />}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='grid grid-cols-3 my-2 '>
                        <Box className='col-span-2 p-8 flex flex-col justify-around h-[400px]' backgroundColor={colors.primary[400]}>
                            <Box className='flex justify-center pt-8'>
                                <Typography variant='h2' fontWeight={500} color={colors.grey[100]}>Sales Controlling</Typography>
                            </Box>
                            <Box>
                                <Typography variant='h4' color={colors.grey[200]} className='py-8 px-16'>
                                    This is how you control the sales of your Store. A simply way your new clients will be able to buy your products. it is available to use anywhere. it supports most of the payment methods, like Visa, Mastercard and American Express.
                                </Typography>
                            </Box>
                            <Box className='flex justify-center items-center'>
                                <Typography variant='h3' fontWeight={500} color={colors.grey[100]}>Provided By: </Typography>
                                <Box className='px-4 h-12 flex justify-center items-center'>
                                    {theme.palette.mode === 'dark' ? 
                                    <img src={stripe.logoWhite} alt="Stripe" className='h-12' />
                                    :
                                    <img src={stripe.logoBlack} alt="Stripe" className='h-12' />}
                                </Box>
                            </Box>
                        </Box>
                        <Box className='col-span-1 h-[400px]'>
                            <img src={stripeBg} alt="Stripe" className='h-full w-full object-cover' />
                        </Box>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default ToolCards