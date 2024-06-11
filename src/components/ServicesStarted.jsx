import React, { useState, useEffect } from 'react'
import { useTheme, Typography, CardActionArea, Box, ButtonBase } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'
import { tokens } from '../theme'

const ServicesStarted = () => {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const startImg = 'https://firebasestorage.googleapis.com/v0/b/trendleaders-a31a9.appspot.com/o/avatars%2F2148294586.jpg?alt=media&token=0a7e97fe-eed9-4095-aaaf-47b62acd17a0'

    //Cards Configs
    const ImageButton = styled(ButtonBase)(({ theme }) => ({
        position: 'relative',
        height: '100%',
        variant: 'contained',
        [theme.breakpoints.down('sm')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &.Mui-focusVisible': {
            zIndex: 1,
            '& .MuiImageBackdrop-root': {
                opacity: 0.70,
                backgroundColor: colors.orangeAccent[500]
            },
            '& .MuiImageMarked-root': {
                opacity: 0,
            },
            '& .MuiTypography-root': {
                border: '4px solid currentColor',
            },
        },
    }));

    const ImageSrc = styled('span')({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    });

    const Image = styled('span')(({ theme }) => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    }));

    const ImageBackdrop = styled('span')(({ theme }) => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.2,
        transition: theme.transitions.create('opacity'),
    }));

    const ImageMarked = styled('span')(({ theme }) => ({
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    }));

    return (
    <Box backgroundColor={colors.primary[400]} className='w-full py-12 xl:py-32'>
        <Box className='container mx-auto'>
            <Box className='flex flex-col justify-center items-center pb-8 lg:pb-16'>
                <Typography variant='h1' fontWeight={700} color={colors.grey[100]} className='pb-4 text-center'>Take Advantage of Your Impact</Typography>
                <Typography variant='h4' color={colors.grey[100]} className='pb-4 text-center'>This is the Most Important part of the plan and... It depends on You</Typography>
            </Box>
            <Box className='grid grid-cols-6 lg:gap-4 px-8 lg:px-20 justify-center items-center'>
                <Box className='col-span-6 lg:col-span-4 lg:py-16 lg:pr-16'>
                    <Box className='w-full h-full flex flex-col justify-center items-start'>
                        <Typography variant='h2' fontWeight={700} color={colors.orangeAccent[500]} className='pb-16'>Keep Doing What You Do Best!</Typography>
                        <Typography variant='h4' color={colors.grey[200]} className='pb-8'>
                            A company that does not show their products is a company that does not sell. It won't survive a Month! and that is why Your presence on this path is essential for everything to run smoothly.
                        </Typography>
                        <Typography variant='h4' color={colors.grey[200]} className='pb-16'>
                            Take care of sharing this with the World, your online Store, your unique Designs, your Merch and.. leave the rest in our Hands.
                        </Typography>
                        <Typography variant='h3' fontWeight={500} color={colors.blueAccent[400]} className='pb-8'>
                            The more reach you have, the higher we can go.
                        </Typography>
                    </Box>
                </Box>
                <Box
                        className='flex justify-center col-span-6 lg:col-span-2 lg:w-full h-full max-w-[400px] min-h-[500px]'
                        sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, backgroundColor: colors.background[100] }}
                    >
                        <CardActionArea
                            component={Link}
                            to={`/trendleaders/contact`}
                        >
                            <ImageButton
                                focusRipple
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                            >
                                <ImageSrc style={{ backgroundImage: `url(${startImg})` }} />
                                <ImageBackdrop className="MuiImageBackdrop-root" />
                                <Image>
                                    <Typography
                                        component="span"
                                        variant="h2"
                                        fontWeight={700}
                                        color="inherit"
                                        sx={{
                                            position: 'relative',
                                            p: 4,
                                            pt: 2,
                                            pb: (theme) => `calc(${theme.spacing(1)} + 6px)`
                                        }}
                                    >
                                        Get Started
                                        <ImageMarked className="MuiImageMarked-root" />
                                    </Typography>
                                </Image>
                            </ImageButton>
                        </CardActionArea>
                    </Box>
            </Box>
        </Box>
    </Box>
    )
}

export default ServicesStarted