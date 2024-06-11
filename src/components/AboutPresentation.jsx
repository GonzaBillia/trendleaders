import { Box, Typography, useTheme } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { db } from '../firebase/firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import { tokens } from '../theme'
import { Spinner } from '@material-tailwind/react'

const AboutPresentation = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const [about, setAbout] = useState([])

    const getAbout = async () => {
        const aboutRef = doc(db, 'about', 'HojgXTrb6iAB1qYRJ3pA')
        const data = await getDoc(aboutRef)
        setAbout(data.data())
    }

    useEffect(() => {
        getAbout()
    }, [])

    return (
        <Box className='w-full h-full py-12 xl:py-32'>
            {about.length === 0 ?
                <Box className="w-full h-[750px] flex justify-center items-center">
                    <Spinner
                        className="h-16 w-16"
                        color="orange"
                    />
                </Box>
            :
            <Box className='container mx-auto'>
                <Box className='w-full flex flex-col items-center px-8 pb-8 lg:pb-16'>
                    <Typography
                        variant='h1'
                        fontWeight={700}
                        color={colors.grey[100]}
                        className='pb-4 text-center'
                    >
                        Take Advantage of Your Impact
                    </Typography>
                    <Typography
                        variant='h4'
                        color={colors.grey[100]}
                    >
                        Let us tell you who we are!
                    </Typography>
                </Box>
                <Box className='w-full h-[600px] lg:h-[450px] rounded-xl relative'>
                    <img src={about.images[0]} alt={about.images[1]} className='w-full h-full object-cover rounded-xl' />
                    <Box className='absolute inset-0 grid grid-cols-3 flex-col justify-center items-center bg-black/50 rounded-xl'>
                        <Typography
                            variant='h2'
                            color='white'
                            fontWeight={500}
                            className='text-center p-4 md:p-16 col-span-3 lg:col-span-2'
                        >
                            {about.intro}
                        </Typography>
                        <Box className='col-span-1 hidden lg:flex justify-center'>
                            <img src={about.images[10]} alt={about.images[1]} className='w-[60%] h-full object-contain' />
                        </Box>
                    </Box>
                </Box>
                <Box className='w-full grid grid-cols-3 p-4 lg:py-16 lg:px-8'>
                    <Box className='col-span-2 flex flex-col items-start py-4 pr-8 lg:py-16 lg:pr-20'>
                        <Typography
                            variant='h2'
                            color={colors.grey[100]}
                            fontWeight={500}
                            className='pb-8'
                        >
                            Who We Are?
                        </Typography>
                        <Typography
                            variant='h4'
                            color={colors.grey[100]}
                        >
                            {about.who}
                        </Typography>
                    </Box>
                    <Box className='col-span-1'>
                        <img src={about.images[8]} alt={about.images[9]} className='w-full h-full object-cover' />
                    </Box>
                </Box>
                <Box className='w-full grid grid-cols-3 p-4 lg:py-16 lg:px-8'>
                    <Box className='col-span-1'>
                        <img src={about.images[4]} alt={about.images[5]} className='w-full h-full object-cover' />
                    </Box>
                    <Box className='col-span-2 flex flex-col items-end text-end py-4 pl-8 lg:py-16 lg:pl-20'>
                        <Typography
                            variant='h2'
                            color={colors.grey[100]}
                            fontWeight={500}
                            className='pb-8'
                        >
                            Our Mission
                        </Typography>
                        <Typography
                            variant='h4'
                            color={colors.grey[100]}
                        >
                            {about.mission}
                        </Typography>
                    </Box>
                </Box>
                <Box className='w-full grid grid-cols-3 p-4 lg:py-16 lg:px-8'>
                    <Box className='col-span-2 flex flex-col items-start py-4 pr-8 lg:py-16 lg:pr-20'>
                        <Typography
                            variant='h2'
                            color={colors.grey[100]}
                            fontWeight={500}
                            className='pb-8'
                        >
                            Our Vision
                        </Typography>
                        <Typography
                            variant='h4'
                            color={colors.grey[100]}
                        >
                            {about.vision}
                        </Typography>
                    </Box>
                    <Box className='col-span-1'>
                        <img src={about.images[6]} alt={about.images[7]} className='w-full h-full object-cover' />
                    </Box>
                </Box>
                <Box className='w-full grid grid-cols-3 p-4 lg:py-16 lg:px-8'>
                    <Box className='col-span-1'>
                        <img src={about.images[2]} alt={about.images[3]} className='w-full h-full object-cover' />
                    </Box>
                    <Box className='col-span-2 flex flex-col items-end text-end py-4 pl-8 lg:py-16 lg:pl-20'>
                        <Typography
                            variant='h2'
                            color={colors.grey[100]}
                            fontWeight={500}
                            className='pb-8'
                        >
                            Creativity
                        </Typography>
                        <Typography
                            variant='h4'
                            color={colors.grey[100]}
                        >
                            {about.creativity}
                        </Typography>
                    </Box>
                </Box>
                <Box className='w-full flex justify-center items-center py-8 px-8 lg:py-16 lg:px-24'>
                    <Typography
                        variant='h2'
                        color={colors.grey[100]}
                        fontWeight={500}
                        className='text-center'
                    >
                        {about.conclusion}
                    </Typography>
                </Box>
            </Box>}
            
        </Box>
    )
}

export default AboutPresentation