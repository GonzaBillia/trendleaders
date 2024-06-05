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
import { collection, getDocs } from 'firebase/firestore'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import PublicIcon from '@mui/icons-material/Public';

const ToolsDemoPanels = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    //Docs
    const [activeTab, setActiveTab] = useState("printful");

    //Data
    const [data, setData] = useState([])

    const getData = async () => {
        const data = await getDocs(collection(db, "toolsData"))
        const gotData = (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        setData(gotData.sort((a, b) => a.position - b.position))
    }

    //Content
    const [printfulProducts, setPrintfulProducts] = useState([])
    const [shopifyServices, setShopifyServices] = useState([])
    const [stripeFeatures, setStripeFeatures] = useState([])

    const getBrands = async () => {
        const data = await getDocs(collection(db, "clothesBrands"))
        setPrintfulBrands(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    const getAnalytics = async () => {
        const data = await getDocs(collection(db, "storeAnalytics"))
        setShopifyAnalytics(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    const getPayments = async () => {
        const data = await getDocs(collection(db, "payments"))
        setStripeCards(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }


    //brands imgs
    const [printfulBrands, setPrintfulBrands] = useState([])
    const [shopifyAnalytics, setShopifyAnalytics] = useState([])
    const [stripeCards, setStripeCards] = useState([])

    const getProductsImg = async () => {
        const data = await getDocs(collection(db, "printfulProducts"))
        setPrintfulProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    const getServicesImg = async () => {
        const data = await getDocs(collection(db, "shopifyServices"))
        setShopifyServices(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    const getFeaturesImg = async () => {
        const data = await getDocs(collection(db, "stripeFeatures"))
        setStripeFeatures(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    const handleChange = (value) => {
        setActiveTab(value)
    }


    const handleBrandsChange = (value) => {
        if (value === "printful") {
            return (
                printfulBrands.map((brand) => (
                    <Box key={brand.id} className='w-full h-full bg-white'>
                        <img src={brand.img} alt={brand.alt} className='p-16 w-full h-full object-contain rounded-xl' />
                    </Box>

                ))
            )
        } else if (value === "shopify") {
            return (
                shopifyAnalytics.map((brand) => (
                    <Box key={brand.id} className='w-full h-full bg-white'>
                        <img src={brand.img} alt={brand.alt} className='w-full pt-16  h-full object-cover rounded-xl' />
                    </Box>

                ))
            )
        } else {
            return (
                stripeCards.map((brand) => (
                    <Box key={brand.id} className='w-full h-full bg-white'>
                        <img src={brand.img} alt={brand.alt} className='w-full p-20 h-full object-contain rounded-xl' />
                    </Box>

                ))
            )
        }
    }

    const handleCarouselChange = (value) => {
        if (value === "printful") {
            return (
                
                    printfulProducts.map((brand) => (
                        <Box key={brand.id} className='w-full h-full'>
                            <Box className='w-full h-[90%]'>
                                <img key={brand.id} src={brand.img} alt={brand.alt} className='h-full w-full object-cover' />
                            </Box>
                            <Box backgroundColor={colors.orangeAccent[500]} className='w-full h-[10%] flex justify-center items-center'>
                                <Typography variant='h4' fontWeight={500} color='white' className=''>{brand.alt}</Typography>
                            </Box>
                        </Box>
                    ))
                
            )
        } else if (value === "shopify") {
            return (
                shopifyServices.map((brand) => (
                    <Box key={brand.id} className='w-full h-full'>
                        <Box className='w-full h-[90%]'>
                            <img key={brand.id} src={brand.img} alt={brand.alt} className='h-full w-full object-cover' />
                        </Box>
                        <Box backgroundColor={colors.orangeAccent[500]} className='w-full h-[10%] flex justify-center items-center'>
                            <Typography variant='h4' fontWeight={500} color='white' className=''>{brand.alt}</Typography>
                        </Box>
                    </Box>
                ))
            )
        } else{
            return (
                stripeFeatures.map((brand) => (
                    <Box key={brand.id} className='w-full h-full'>
                        <Box className='w-full h-[90%]'>
                            <img key={brand.id} src={brand.img} alt={brand.alt} className='h-full w-full object-cover' />
                        </Box>
                        <Box backgroundColor={colors.orangeAccent[500]} className='w-full h-[10%] flex justify-center items-center'>
                            <Typography variant='h4' fontWeight={500} color='white' className=''>{brand.alt}</Typography>
                        </Box>
                    </Box>
                ))
            )
        }
    }


    useEffect(() => {
        getData()
        getBrands()
        getAnalytics()
        getPayments()
        getProductsImg()
        getServicesImg()
        getFeaturesImg()
        handleChange("printful")
    }, [])


    return (
        <Box className='w-full py-32' backgroundColor={colors.background[100]}>
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
                                onClick={() => handleChange(value)}
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
                            <TabPanel key={value} value={value} className='grid grid-cols-12 p-4 grid-rows-12 gap-4 w-full h-full'>
                                {/* ROW 1 */}
                                <Box backgroundColor={colors.primary[400]} className='col-start-1 col-span-6 row-start-1 row-span-4 rounded-xl'>
                                    <Box className='w-full h-full relative'>
                                        <img src={cover} alt="printful" className='w-full h-full object-cover rounded-xl' />
                                        <Box className='p-12 absolute inset-0 flex flex-col h-full w-full items-center justify-center bg-black/65 rounded-xl'>
                                            <Typography variant='h1' fontWeight={700} color='white' className='pb-8 text-center'>{titleT1}</Typography>
                                        </Box>
                                    </Box>

                                </Box>
                                <Box backgroundColor={colors.primary[400]} borderColor={colors.orangeAccent[500]} className='col-start-7 col-span-6 row-start-1 row-span-4 rounded-xl border-2'>
                                    <Box className='p-6 relative w-full h-full'>
                                        <Box className='absolute top-0 right-0 w-16 h-16 flex justify-center items-center rounded-bl-xl rounded-tr-lg' backgroundColor={colors.orangeAccent[500]} >
                                            <QuestionMarkIcon fontSize='large' className=' text-white' />
                                        </Box>
                                        <Box className='p-8 flex flex-col h-full w-full items-start justify-around rounded-xl'>
                                            <Typography variant='h2' fontWeight={500} color={colors.grey[100]} className='pb-8'>{titleT2}</Typography>
                                            <Typography variant='h4' color={colors.grey[100]} className=''>{descT2}</Typography>
                                        </Box>
                                    </Box>
                                </Box>

                                {/* ROW 2 */}
                                <Box backgroundColor={colors.primary[400]} className='col-start-1 col-span-4 row-start-5 row-span-4 rounded-xl'>
                                    <Box borderColor={colors.orangeAccent[500]} className='relative w-full h-full border-2 rounded-xl'>
                                        <Box backgroundColor={colors.orangeAccent[500]} className='absolute z-10 top-0 w-full h-16 flex justify-center items-center rounded-t-lg'>
                                            <Typography variant='h3' fontWeight={500} color='white' className=''>{titleT3}</Typography>
                                        </Box>
                                        <Carousel navigation={Hidden} prevArrow={Hidden} nextArrow={Hidden} className='rounded-xl' loop={true} autoplay={true}>
                                            {handleBrandsChange(value)}
                                        </Carousel>
                                    </Box>
                                </Box>
                                <Box backgroundColor={colors.background[100]} borderColor={colors.primary[400]} className='col-start-5 col-span-4 row-start-5 row-span-4 rounded-xl flex justify-center items-center'>
                                    {theme.palette.mode === "dark" ? <img src={mainBrand} alt='img' /> : <img src={mainBrandLight} alt='img' />}

                                </Box>
                                <Box backgroundColor={colors.primary[400]} className='col-start-9 col-span-4 row-start-5 row-span-8 rounded-xl'>
                                    <Box className='w-full h-full'>
                                        <Carousel navigation={Hidden} prevArrow={Hidden} nextArrow={Hidden} className='w-full h-full rounded-xl' loop={true} autoplayDelay={4000} autoplay={true}>
                                            {handleCarouselChange(value)}
                                        </Carousel>
                                    </Box>
                                </Box>

                                {/* ROW 2 */}
                                <Box backgroundColor={colors.primary[400]} className='col-start-1 col-span-8 row-start-9 row-span-4 rounded-xl'>
                                    <Box borderColor={colors.orangeAccent[500]} className='relative w-full h-full border-2 rounded-xl'>
                                        <Box className='absolute top-0 right-0 w-16 h-16 flex justify-center items-center rounded-bl-xl rounded-tr-lg' backgroundColor={colors.orangeAccent[500]} >
                                            <PublicIcon fontSize='large' className=' text-white' />
                                        </Box>
                                        <Box borderColor={colors.orangeAccent[500]} className='flex h-full w-full'>
                                            <Box className='w-1/3 h-full flex justify-start items-center p-8'>
                                                <Typography variant='h1' fontWeight={500} color={colors.grey[100]} className=''>{titleT4}</Typography>
                                            </Box>
                                            <Box className='w-2/3 h-full bg-white rounded-r-xl'>
                                                <img src={map} className='object-cover w-full h-full p-8 ' />
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