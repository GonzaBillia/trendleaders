import React, { useState, useEffect } from 'react'
import { tokens } from '../theme'
import { useTheme, Typography, CardActionArea, Box, ButtonBase } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'
import { db } from '../firebase/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

const ProyectsList = () => {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    //hooks
    const [proyectsData, setProyectsData] = useState([])

    //db Ref
    const proyectsDataCollection = collection(db, 'proyects')

    //get
    const getProyectsData = async () => {
        const data = await getDocs(proyectsDataCollection)
        setProyectsData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    useEffect(() => {
        getProyectsData()
    }, [])

    //Cards Configs
    const ImageButton = styled(ButtonBase)(({ theme }) => ({
        position: 'relative',
        height: 300,
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
        opacity: 0.4,
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
        <Box backgroundColor={colors.primary[400]} className='pt-32 pb-48'>
            <Box className='w-full mx-auto container grid grid-cols-3 gap-3'>
                <Box className='col-span-3 text-center pb-16'>
                    <Typography variant='h1' fontWeight={700} color={colors.grey[100]} className='pb-4'>Our Projects</Typography>
                    <Typography variant='h4' color={colors.grey[100]}>Take a look our Special Proyects made with Love</Typography>
                </Box>
                {proyectsData.map((proyect) => (
                    <Box
                        key={proyect.id}
                        className='col-span-1'
                        sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', backgroundColor: colors.background[100] }}
                    >
                        <CardActionArea
                            component={Link}
                            to={`/portfolio`}
                        >
                            <ImageButton
                                focusRipple
                                key={proyect.id}
                                style={{
                                    width: '100%',
                                }}
                            >
                                <ImageSrc style={{ backgroundImage: `url(${proyect.images[0]})` }} />
                                <ImageBackdrop className="MuiImageBackdrop-root" />
                                <Image>
                                    <Typography
                                        component="span"
                                        variant="h4"
                                        fontWeight={700}
                                        color="inherit"
                                        sx={{
                                            position: 'relative',
                                            p: 4,
                                            pt: 2,
                                            pb: (theme) => `calc(${theme.spacing(1)} + 6px)`
                                        }}
                                    >
                                        {proyect.name}
                                        <ImageMarked className="MuiImageMarked-root" />
                                    </Typography>
                                </Image>
                            </ImageButton>
                        </CardActionArea>
                    </Box>
                ))}
            </Box>
        </Box>

    )
}

export default ProyectsList