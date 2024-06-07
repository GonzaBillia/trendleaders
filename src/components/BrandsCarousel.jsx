import React, { useState, useEffect } from 'react'
import { useTheme, Box, Typography } from '@mui/material'
import { tokens } from '../theme'
import { db } from '../firebase/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

const BrandsCarousel = ({section}) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [brands, setBrands] = useState([])

    const brandsCollection = collection(db, 'clothesBrands')

    const getBrands = async () => {
        const data = await getDocs(brandsCollection)
        setBrands(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    useEffect(() => {
        getBrands()
    }, [])

    return (
        <Box className='w-full py-16' backgroundColor={section === true ? colors.primary[400] : colors.background[100]}>
            <Box className='container mx-auto w-full overflow-hidden'>
                <Box className='text-center pb-16'>
                    <Typography
                        variant='h1'
                        fontWeight={700}
                        color={colors.grey[100]}
                        className='pb-4'
                    >
                        Some Brands We Work With
                    </Typography>
                    <Typography
                        variant='h4'
                        color={colors.grey[100]}
                    >
                        Thanks to Printfull for being the best
                    </Typography>
                </Box>
                <Box className='flex slide-track'>
                    {brands.map((brand) => (
                        <Box
                            key={brand.id}
                            className='h-full w-[300px] m-2 flex-shrink-0 cursor-pointer'
                        >
                            <Box className='rounded-xl overflow-hidden mb-4 relative h-[100px] bg-[#fcfcfc] flex justify-center py-2 px-10'>
                                <img src={brand.img} alt={brand.name} className='max-h-[100px] relative object-contain' />
                            </Box>
                        </Box>
                    ))}
                    {brands.map((brand) => (
                        <Box
                            key={brand.id}
                            className='h-full w-[300px] m-2 flex-shrink-0 cursor-pointer'
                        >
                            <Box className='rounded-xl overflow-hidden mb-4 relative h-[100px] bg-[#fcfcfc] flex justify-center py-2 px-10'>
                                <img src={brand.img} alt={brand.name} className='max-h-[100px] relative object-contain' />
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
            
        </Box>
    )
}

export default BrandsCarousel