import React, {useState, useEffect} from 'react'
import { useTheme, Box, Typography, Button } from '@mui/material'
import { tokens } from '../theme'
import { Card, CardBody, CardFooter } from '@material-tailwind/react'
import { db } from '../firebase/firebaseConfig'
import {collection, getDocs} from 'firebase/firestore'
import { Link } from 'react-router-dom'

const PlanCards = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    //hooks
    const [plansData, setPlansData] = useState([])

    //db Ref
    const plansDataCollection = collection(db, 'plansData')

    //get
    const getPlansData = async () => {
        const data = await getDocs(plansDataCollection)
        setPlansData(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    useEffect(() => {
        getPlansData()
    }, [])

    return (
        <Box className='w-full lg:mx-auto lg:container my-12 lg:my-32 grid grid-cols-3 gap-4'>
            <Box className='col-span-3 text-center pb-16'>
                <Typography variant='h1' fontWeight={700} color={colors.grey[100]} className='pb-4'>Our Leads Plan</Typography>
                <Typography variant='h4' color={colors.grey[100]}>These are the three steps of Success!</Typography>
            </Box>
            {plansData.map((plan) => (
                <Card
                    key={plan.id}
                    shadow={false}
                    className='col-span-3 lg:col-span-1 rounded-3xl p-10 m-8'
                    style={{backgroundColor: colors.background[100], borderWidth: 2, borderColor: colors.primary[400]}}
                >
                    <CardBody style={{backgroundColor: colors.background[100], minHeight: 370}} className='text-center rounded-xl'>
                        <Box backgroundColor={colors.background[100]} className='flex justify-center'>
                            <img src={plan.img} alt={plan.title} className='w-40 rounded-full' />
                        </Box>
                        <Typography
                            variant='h2'
                            fontWeight={700}
                            color={colors.grey[100]}
                            className='pt-6 pb-2'
                        >
                            {plan.title}
                        </Typography>
                        <Typography
                            variant='h5'
                            color={colors.grey[100]}
                            className=' py-5'
                        >
                            {plan.description}

                        </Typography>
                        
                    </CardBody>
                    <CardFooter>
                        <Box className='flex justify-center items-center'>
                            <img src={theme.palette.mode === 'dark' ? plan.logoWhite : plan.logoBlack} alt={plan.title} className='h-12' />
                        </Box>
                    </CardFooter>
                </Card>
            ))}
            <Box className='col-span-3 text-center pt-8'>
                <Typography variant='h5' fontWeight={700} color={colors.grey[100]} className='pb-8'>
                    See all the details about our Services
                </Typography>
                <Button variant='contained' sx={[{backgroundColor: colors.orangeAccent[500]}, {'&:hover': {backgroundColor: colors.orangeAccent[600]}}]} className='w-48 h-16 mx-auto'>
                    <Link to='/trendleaders/services'>
                        <Typography variant='h5' fontWeight={700} color={colors.grey[100]} className=''>
                            Lets Go!
                        </Typography>
                    </Link>
                </Button>
            </Box>
        </Box>
    )
}

export default PlanCards