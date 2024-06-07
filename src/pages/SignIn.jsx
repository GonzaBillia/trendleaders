import React from 'react'
import {
    Card,
    Input,
} from "@material-tailwind/react"
import { Box, Typography, Button, useTheme } from '@mui/material'
import { tokens } from '../theme'


const SignIn = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

        return (
            <Box className='w-full'>
                <Box className='container mx-auto flex flex-col items-center p-24'>
                    <Card style={{ backgroundColor: colors.primary[400] }} shadow={false} className='p-16'>
                        <Typography variant="h1" fontWeight={700} color={colors.grey[100]}>
                            Sign In
                        </Typography>
                        <Typography variant='h5' color={colors.grey[200]} className="pt-3">
                            Nice to meet you! Enter your details to Get Started.
                        </Typography>
                        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                            <Box className="mb-1 flex flex-col gap-6">
                                <Typography variant="h6" color={colors.grey[200]} className="-mb-3">
                                    Your Username
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder="name@mail.com"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                                <Typography variant="h6" color={colors.grey[200]} className="-mb-3">
                                    Password
                                </Typography>
                                <Input
                                    type="password"
                                    size="lg"
                                    placeholder="********"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                            </Box>
                            <Box className='pt-16 flex justify-center'>
                                <Button variant='contained' fullWidth sx={[{ backgroundColor: colors.orangeAccent[500] }, { '&:hover': { backgroundColor: colors.orangeAccent[600] } }]}>Sing In</Button>
                            </Box>
                        </form>
                    </Card>
                </Box>
            </Box>
        )
    }

    export default SignIn