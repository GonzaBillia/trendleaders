import React, { useState, useEffect } from 'react'
import { db } from '../firebase/firebaseConfig'
import {doc, getDoc } from 'firebase/firestore'
import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../theme'
import { Spinner } from '@material-tailwind/react'

const ServicesHeader = () => {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const [header, setHeader] = useState(null)

    const getHeader = async () => {
        const docRef = doc(db, "banners", "vLI7GZCgwWzh15rirgiJ")
        const docSnap = await getDoc(docRef)
        setHeader(docSnap.data())
    }

    useEffect(() => {
        getHeader()
    }, [])

    return (
        <>
            {header === null ?
            <div className="w-full h-[750px] flex justify-center items-center">
                <Spinner
                    className="h-16 w-16"
                    color="orange"
                />
            </div>
            :
            <Box className='w-full'>
                <Box>
                    <img src={header.img} alt={header.alt} className='w-full h-full object-cover' />
                </Box>
            </Box>
            }
            
        </>
        
    )
}

export default ServicesHeader