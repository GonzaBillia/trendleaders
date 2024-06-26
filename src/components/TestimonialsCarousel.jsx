import React, { useState, useEffect } from 'react'
import { tokens } from '../theme'
import { useTheme, Box, Typography, Card, Hidden } from '@mui/material'
import { Carousel, Rating } from '@material-tailwind/react'
import { db } from '../firebase/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import { BorderRight } from '@mui/icons-material'

const TestimonialsCarousel = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const [testimonialsData, setTestimonialsData] = useState([])

    const testimonialsDataCollection = collection(db, 'testimonials')

    const getTestimonialsData = async () => {
        const data = await getDocs(testimonialsDataCollection)
        setTestimonialsData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    useEffect(() => {
        getTestimonialsData()
    }, [])

    return (
        <Box className='w-full py-12 lg:py-32'>
            <Box className='lg:container lg:mx-auto px-8'>
                <Box className='text-center pb-16'>
                    <Typography
                        variant='h1'
                        fontWeight={700}
                        color={colors.grey[100]}
                        className='pb-4'
                    >
                        We have Worked with Thousands of Amazing People
                    </Typography>
                    <Typography
                        variant='h4'
                        color={colors.grey[100]}
                    >
                        What they have to say about us?
                    </Typography>
                </Box>
                <Carousel
                    className="rounded-xl bg-transparent max-h-[510px] min-h-[380px]"
                    autoplay={true}
                    loop={true}
                    prevArrow={Hidden}
                    nextArrow={Hidden}
                    navigation={({ setActiveIndex, activeIndex, length }) => (
                        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                            {new Array(length).fill("").map((_, i) => (
                                <span
                                    key={i}
                                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-orange-700" : "w-4 bg-orange-700/50"}`}
                                    onClick={() => setActiveIndex(i)}
                                />
                            ))}
                        </div>
                    )}>
                    {testimonialsData.map((testimonials) => (
                        <Box className='w-full grid grid-cols-3 items-center' key={testimonials.id}>
                            <Box className='col-span-1 ml-2 lg:ml-6 min-h-[290px] max-h-[500px] drop-shadow-md rounded-3xl z-10 object-cover'>
                                <img src={testimonials.img} alt={testimonials.name} className='min-h-[350px] max-h-[500px] w-full object-cover object-center rounded-lg lg:rounded-2xl' />
                            </Box>
                            <Card sx={{backgroundColor: colors.primary[400] }} className='col-span-2 mr-2 lg:mr-6 p-4 lg:p-16 lgp-10 min-h-[280px] max-h-[350px] flex flex-col justify-around'>
                            <Typography
                                variant='h5'
                                fontWeight={500}
                                color={colors.grey[100]}
                                className='pb-6'
                            >
                                {testimonials.comment}
                            </Typography>
                            <Box className='flex flex-col justify-end'>
                                <Typography
                                    variant='lg:h4 h5'
                                    fontWeight={700}
                                    color={colors.grey[100]}
                                    className='pb-1'
                                >
                                    {testimonials.name}
                                </Typography>
                                <Typography
                                    variant='lg:h5 h6'
                                    fontWeight={500}
                                    color={colors.blueAccent[400]}
                                    className='pb-2'
                                >
                                    {testimonials.title}
                                </Typography>
                                <Rating value={5} readonly />
                            </Box>

                        </Card>
                        </Box>
                    ))}
        </Carousel>
            </Box >
        </Box >
    )
}

export default TestimonialsCarousel