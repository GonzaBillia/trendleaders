import React, { useState, useEffect } from 'react'
import { db } from '../firebase/firebaseConfig'
import {collection, getDocs, where, query } from 'firebase/firestore'
import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../theme'
import { Spinner } from '@material-tailwind/react'

const BannerHeader = ({section}) => {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const [header, setHeader] = useState(undefined)

    const getHeader = async () => {
        const q = query(collection(db, 'banners'), where('title', '==', section))
        const data = await getDocs(q)
        const gotHeader = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        setHeader(gotHeader[0])
    }

    useEffect(() => {
        getHeader()
    }, [])

    return (
        <>
            {header === undefined ?
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

export default BannerHeader