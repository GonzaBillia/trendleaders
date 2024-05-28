import React, {useState, useEffect} from 'react'
import { useTheme, Box, Typography } from '@mui/material'
import { tokens } from '../theme'
import { Card, CardBody, Button } from '@material-tailwind/react'
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
        <Box className='w-full mx-auto container my-32 grid grid-cols-3 gap-4'>
            <Box className='col-span-3 text-center pb-12'>
                <Typography variant='h1' fontWeight={700} color={colors.grey[100]} className='pb-8'>Our Lead Plans</Typography>
            </Box>
            {plansData.map((plan) => (
                <Card
                    key={plan.id}
                    shadow={false}
                    className='col-span-1 rounded-xl p-10'
                    style={{backgroundColor: colors.primary[400]}}
                >
                    <CardBody style={{backgroundColor: colors.primary[400]}} className='text-center rounded-xl'>
                        <Box backgroundColor={colors.primary[400]} className='flex justify-center'>
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
                </Card>
            ))}
            <Box className='col-span-3 text-center pt-8'>
                <Button variant='contained' color='deep-orange' className='w-48 h-16 mx-auto'>
                    <Link to='/trendleaders/services'>
                        <Typography variant='h5' fontWeight={700} color={colors.grey[100]} className=''>
                            Go to Services
                        </Typography>
                    </Link>
                </Button>
            </Box>
        </Box>
    )
}

export default PlanCards