import React, {useState, useEffect} from 'react'
import { useTheme, Box, Typography, Avatar } from '@mui/material'
import { tokens } from '../theme'
import { db } from '../firebase/firebaseConfig'
import {collection, getDocs} from 'firebase/firestore'

const Team = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    //Firebase
    const [teamData, setTeamData] = useState([]);
    const teamDataCollection = collection(db, 'team');

    const getTeamData = async () => {
        const data = await getDocs(teamDataCollection);
        setTeamData(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }

    useEffect(() => {
        getTeamData();
    }, [])


    return (
        <Box className='w-full py-12 lg:py-32' backgroundColor={colors.primary[400]}>
            <Box className='lg:container lg:mx-auto grid grid-cols-2'>
                <Box className='col-span-2 lg:col-span-1 lg:pr-16 pb-8'>
                    <Typography variant='h1' fontWeight={700} color={colors.grey[100]} className='pb-8'>Meet the Leadership</Typography>
                    <Typography variant='h4' color={colors.grey[100]}>We are a team of talented individuals with diverse backgrounds and interests. Our objective is giving our customers the best experience ever. For us is extremely important make a difference in the world and the lives of Your Fans.</Typography>
                </Box>
                <Box className='col-span-2 lg:col-span-1'>
                    {teamData.map((member) => (
                        <Box
                            key={member.id}
                            className='flex justify-center lg:justify-start items-center lg:pl-48'
                        >
                            <Box className='pb-16 flex justify-center items-center'>
                                <Avatar
                                    src={member.profile}
                                    alt={member.name}
                                    sx={{width: 100, height: 100, border: '2px solid', borderColor: colors.primary[100]}}
                                />
                            </Box>
                            <Box className='flex flex-col justify-center pb-16 pl-8 gap-1' sx={{height: 100}}>
                                <Typography variant='h3' fontWeight={700} color={colors.grey[100]}>{member.name}</Typography>
                                <Typography variant='h5' fontWeight={500} color={colors.blueAccent[400]}>{member.title}</Typography>
                            </Box>
                            
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default Team