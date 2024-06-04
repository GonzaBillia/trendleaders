import React, { useEffect, useState } from 'react'
import { Box, Hidden, Typography, useTheme } from '@mui/material'
import { tokens } from '../theme';
import {
    Carousel,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { db } from '../firebase/firebaseConfig';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import PublicIcon from '@mui/icons-material/Public';

const ToolsDemoPanels = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    //Docs
    const [printful, setPrintful] = useState({})
    const [shopify, setShopify] = useState({})
    const [stripe, setStripe] = useState({})

    const [brands, setBrands] = useState({})
    const [activeBrand, setActiveBrand] = useState({})
    const [activeTab, setActiveTab] = useState("printful");

    //brands imgs
    const [printfulBrands, setPrintfulBrands] = useState([])
    const [productsImg, setProductsImg] = useState([])

    const getBrands = async () => {
        const data = await getDocs(collection(db, "clothesBrands"))
        setPrintfulBrands(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    const getProductsImg = async () => {
        const data = await getDocs(collection(db, "printfulProducts"))
        setProductsImg(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }


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
        getBrands()
        getProductsImg()
    }, [])

    const data = [
        {
            label: "PRINTFUL",
            value: "printful",
            mainBrand: "https://firebasestorage.googleapis.com/v0/b/trendleaders-a31a9.appspot.com/o/brands%2FPF-Linear-Full-color%20white-RGB.svg?alt=media&token=aea55ff0-250a-41dc-a1b1-85f14b2fe9b3",
            mainBrandLight: "https://firebasestorage.googleapis.com/v0/b/trendleaders-a31a9.appspot.com/o/brands%2FPF-Linear-Full-color%20black-RGB.svg?alt=media&token=a13bea88-a3b4-4d0e-ba78-571efa7b8879",
            map: "https://firebasestorage.googleapis.com/v0/b/trendleaders-a31a9.appspot.com/o/product-content%2Fmap%2Fprintful-worldwide.png?alt=media&token=4c796f5b-982e-443a-8443-eb71cfa57436",
            cover: 'https://firebasestorage.googleapis.com/v0/b/trendleaders-a31a9.appspot.com/o/product-content%2Fmap%2Fe69431b087fb1bd79134dcc10af54e68_l__810.webp?alt=media&token=8d89c47d-5c9f-4f70-b302-685ae2ae42a5',


            //row 1
            titleT1: "Make Unique Designs for your Fans!",
            descT1: "Custom Merchandising for your Fans and Followers to make your content more personal and unique.",

            titleT2: "How we Work?",
            descT2: "We create your products through Print on Demand, a practical and optimized system, that allows you to have great quality designs with a lot of types of compatible clothing materials.",

            //row 2
            titleT3: "Some Available Brands",
            brandImgs: printfulBrands,
            descT3: "",

            //row 3
            titleT4: "The Fastest Shipping to all Countries!",
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
                        style={{ borderColor: colors.grey[700] }}
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
                                    color={activeTab === value ? colors.grey[100] : colors.grey[300]}>{label}</Typography>
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody className='h-[1000px]' style={{ backgroundColor: colors.background[100] }}>
                        {data.map(({ value, titleT1, titleT2, descT2, titleT3, mainBrand, mainBrandLight, map, titleT4, cover }) => (
                            <TabPanel key={value} value={value} className='grid grid-cols-12 p-6 grid-rows-12 gap-4 w-full h-full'>
                                {/* ROW 1 */}
                                <Box backgroundColor={colors.primary[400]} className='col-start-1 col-span-6 row-start-1 row-span-4 rounded-xl'>
                                    <Box className='w-full h-full relative'>
                                        <img src={cover} alt="printful" className='w-full h-full object-cover rounded-xl' />
                                        <Box className='p-12 absolute inset-0 flex flex-col h-full w-full items-center justify-center bg-black/70 rounded-xl'>
                                            <Typography variant='h1' fontWeight={700} color='white' className='pb-8 text-center'>{titleT1}</Typography>
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
                                        <Box backgroundColor={colors.orangeAccent[500]} className='absolute z-10 top-0 w-full h-16 flex justify-center items-center rounded-t-xl'>
                                            <Typography variant='h3' fontWeight={500} color='white' className=''>{titleT3}</Typography>
                                        </Box>
                                        <Carousel navigation={Hidden} prevArrow={Hidden} nextArrow={Hidden} className='rounded-xl' loop={true} autoplay={true}>
                                            {printfulBrands.map((brand) => (
                                                <Box className='w-full h-full bg-white'>
                                                    <img key={brand.id} src={brand.img} alt={brand.alt} className='p-16 w-full h-full object-contain rounded-xl' />
                                                </Box>

                                            ))}
                                        </Carousel>
                                    </Box>
                                </Box>
                                <Box backgroundColor={colors.background[100]} borderColor={colors.primary[400]} className='col-start-5 col-span-4 row-start-5 row-span-4 rounded-xl flex justify-center items-center'>
                                    {theme.palette.mode === "dark" ? <img src={mainBrand} alt='img' /> : <img src={mainBrandLight} alt='img' />}
                                    
                                </Box>
                                <Box backgroundColor={colors.primary[400]} className='col-start-9 col-span-4 row-start-5 row-span-8 rounded-xl'>
                                    <Box className='w-full h-full'>
                                        <Carousel navigation={Hidden} prevArrow={Hidden} nextArrow={Hidden} className='w-full h-full rounded-xl' loop={true} autoplayDelay={4000} autoplay={true}>
                                            {productsImg.map((brand) => (
                                                <Box className='w-full h-full'>
                                                    <Box className='w-full h-[90%]'>
                                                        <img key={brand.id} src={brand.img} alt={brand.alt} className='h-full w-full object-cover' />
                                                    </Box>
                                                    <Box backgroundColor={colors.orangeAccent[500]} className='w-full h-[10%] flex justify-center items-center'>
                                                        <Typography variant='h4' fontWeight={500} color='white' className=''>{brand.alt}</Typography>
                                                    </Box>
                                                </Box>
                                            ))}
                                        </Carousel>
                                    </Box>
                                </Box>

                                {/* ROW 2 */}
                                <Box backgroundColor={colors.primary[400]} className='col-start-1 col-span-8 row-start-9 row-span-4 rounded-xl'>
                                    <Box className='relative w-full h-full'>
                                        <Box className='absolute top-0 right-0 w-16 h-16 flex justify-center items-center rounded-bl-xl rounded-tr-xl' backgroundColor={colors.orangeAccent[500]} >
                                            <PublicIcon fontSize='large' className=' text-white' />
                                        </Box>
                                        <Box borderColor={colors.orangeAccent[500]} className='flex h-full w-full'>
                                            <Box className='w-1/3 h-full flex justify-start items-center p-8'>
                                                <Typography variant='h1' fontWeight={500} color={colors.grey[100]} className=''>{titleT4}</Typography>
                                            </Box>
                                            <Box className='w-2/3 h-full bg-white rounded-r-xl'>
                                                <img src={map} className='object-cover w-full h-full p-8 '/>
                                            </Box>
                                        </Box>
                                    </Box>
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