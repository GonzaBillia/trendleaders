import React from 'react'
import { Box, Typography, useTheme, Button } from '@mui/material'
import { Card, CardBody, CardHeader, CardFooter } from '@material-tailwind/react'
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import StarIcon from '@mui/icons-material/Star';
import { tokens } from '../theme'


const PricingOptions = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)


    

    return (
        <Box className='w-full py-12 lg:py-32' backgroundColor={colors.primary[400]}>
            <Box className='flex flex-col justify-center items-center pb-24'>
                <Typography variant='h1' fontWeight={700} color={colors.grey[100]} className='pb-8'>Pricing Subscriptions</Typography>
                <Typography variant='h4' color={colors.grey[100]}>Choose the plan that is right for you. We will get in touch after the purchase</Typography>
            </Box>
            <Box className='container mx-auto grid grid-cols-3 gap-3'>
                <Card style={{ backgroundColor: colors.background[100] }} variant="gradient" className="col-span-3 lg:col-span-1 w-full p-16 my-8 rounded-3xl">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 mb-8 rounded-none border-b pb-8 text-center"
                        style={{ borderBottom: '1px solid', borderColor: colors.grey[700] }}
                    >
                        <Typography
                            variant="h6"
                            color={colors.grey[100]}
                            className="font-normal uppercase pb-4"
                        >
                            standard leader
                        </Typography>
                        <Typography
                            variant="h1"
                            fontWeight={700}
                            color={colors.grey[100]}
                            className="mt-6 flex justify-center gap-1 text-7xl"
                        >
                            <span className="mt-2 text-3xl">$</span>459{" "}
                            <span className="self-end text-xl">/year</span>
                        </Typography>
                    </CardHeader>
                    <CardBody className="p-0">
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border-2 p-1 border-green-500 bg-green-500">
                                    <CheckIcon fontSize='small' sx={{color: "white"}}/>
                                </span>
                                <Typography className="font-normal" variant='h6' color={colors.grey[100]}>Custom Merchandising with <Typography component={'span'} fontWeight={700}>+5 items</Typography></Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border-2 p-1 border-green-500 bg-green-500">
                                    <CheckIcon fontSize='small' sx={{color: "white"}}/>
                                </span>
                                <Typography className="font-normal" variant='h6' color={colors.grey[100]}>Complete Store and global sales</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border-2 p-1 border-green-500 bg-green-500">
                                    <CheckIcon fontSize='small' sx={{color: "white"}}/>
                                </span>
                                <Typography className="font-normal" variant='h6' color={colors.grey[100]}>Analythics and reports</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border-2 p-1 border-green-500 bg-green-500">
                                    <CheckIcon fontSize='small' sx={{color: "white"}}/>
                                </span>
                                <Typography className="font-normal" variant='h6' color={colors.grey[100]}><Typography component={'span'} fontWeight={700}>35% commision</Typography> per sale</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border-2 p-1 border-red-500">
                                    <ClearIcon fontSize='small' color="error"/>
                                </span>
                                <Typography className="font-normal" variant='h6' color={colors.grey[100]}>
                                    Seasons campaigns, promotions and rewards
                                </Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border-2 p-1 border-red-500">
                                    <ClearIcon fontSize='small' color="error"/>
                                </span>
                                <Typography className="font-normal" variant='h6' color={colors.grey[100]}>
                                    Marketing team support
                                </Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border-2 p-1 border-red-500">
                                    <ClearIcon fontSize='small' color="error"/>
                                </span>
                                <Typography className="font-normal" variant='h6' color={colors.grey[100]}>
                                    Cutomizable Store for Events + More
                                </Typography>
                            </li>
                        </ul>
                    </CardBody>
                    <CardFooter className="mt-12 p-0 flex justify-center">
                        <Button
                            variant="contained"
                            sx={{
                                size: "lg",
                                backgroundColor: colors.grey[100],
                                color: colors.grey[900],
                                ripple: false,
                                width: "100%",
                                '&:hover': {
                                    backgroundColor: colors.grey[200],
                                }
                            }}

                        >
                            <Typography variant="h5" fontWeight={500}>Buy Now</Typography>
                        </Button>
                    </CardFooter>
                </Card>
                <Card style={{ backgroundColor: colors.grey[100] }} variant="gradient" className="col-span-3 lg:col-span-1 w-full pt-20 pb-16 px-16 rounded-3xl">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 mb-8 rounded-none border-b pb-8 text-center"
                        style={{ borderBottom: '1px solid', borderColor: colors.grey[800] }}
                    >
                        <Typography
                            variant="h3"
                            fontWeight={700}
                            color={colors.orangeAccent[500]}
                            className="font-normal uppercase pb-4"
                        >
                            premium leader
                        </Typography>
                        <Typography
                            variant="h1"
                            fontWeight={700}
                            color={colors.grey[900]}
                            className="mt-6 flex justify-center gap-1 text-7xl"
                        >
                            <span className="mt-2 text-4xl">$</span>779{" "}
                            <span className="self-end text-2xl">/year</span>
                        </Typography>
                    </CardHeader>
                    <CardBody className="p-0">
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border-2 p-1 border-green-500 bg-green-500">
                                    <CheckIcon fontSize='small' sx={{color: "white"}}/>
                                </span>
                                <Typography className="font-normal" variant='h6' color={colors.grey[900]}>Custom Merchandising with <Typography component={'span'} fontWeight={700}>+20 items</Typography></Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border-2 p-1 border-green-500 bg-green-500">
                                    <CheckIcon fontSize='small' sx={{color: "white"}}/>
                                </span>
                                <Typography className="font-normal" variant='h6' color={colors.grey[900]}>Complete Store and global sales</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border-2 p-1 border-green-500 bg-green-500">
                                    <CheckIcon fontSize='small' sx={{color: "white"}}/>
                                </span>
                                <Typography className="font-normal" variant='h6' color={colors.grey[900]}>Analythics and reports</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border-2 p-1 border-green-500 bg-green-500">
                                    <CheckIcon fontSize='small' sx={{color: "white"}}/>
                                </span>
                                <Typography className="font-normal" variant='h6' color={colors.grey[900]}><Typography component={'span'} fontWeight={700}>55% commision</Typography> per sale</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border-2 p-1 border-green-500 bg-green-500">
                                    <CheckIcon fontSize='small' sx={{color: "white"}}/>
                                </span>
                                <Typography className="font-normal" variant='h6' color={colors.grey[900]}>
                                    Seasons campaigns, promotions and rewards
                                </Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border-2 p-1 border-green-500 bg-green-500">
                                    <CheckIcon fontSize='small' sx={{color: "white"}}/>
                                </span>
                                <Typography className="font-normal" variant='h6' color={colors.grey[900]}>
                                    Marketing team support 
                                </Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border-2 p-1 border-green-500 bg-green-500">
                                    <CheckIcon fontSize='small' sx={{color: "white"}}/>
                                </span>
                                <Typography className="font-normal" variant='h6' color={colors.grey[900]}>
                                    Cutomizable Store for Events + More
                                </Typography>
                            </li>
                        </ul>
                    </CardBody>
                    <CardFooter className="mt-8 p-0 flex flex-col justify-center items-start"
                        style={{ borderTop: '1px solid', borderColor: colors.grey[800] }}>
                        <Box className='flex justify-start items-center py-6 px-2'>
                            <StarIcon fontSize='large' sx={{color: '#fbc02d'}} className='mx-3'/>
                            <Typography variant="h4" fontWeight={700} color={colors.grey[900]} className="">{" "}Favorite Leads Plan!</Typography>
                        </Box>
                        <Button
                            variant="contained"
                            sx={{
                                size: "lg",
                                backgroundColor: colors.orangeAccent[500],
                                color: colors.grey[100],
                                ripple: false,
                                width: "100%",
                                '&:hover': {
                                    backgroundColor: colors.orangeAccent[600],
                                }
                            }}

                        >
                            <Typography variant="h5" fontWeight={500}>Buy Now</Typography>
                        </Button>
                    </CardFooter>
                </Card>
                <Card style={{ backgroundColor: colors.background[100] }} variant="gradient" className="col-span-3 lg:col-span-1 w-full p-16 my-8 rounded-3xl">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 mb-8 rounded-none border-b pb-8 text-center"
                        style={{ borderBottom: '1px solid', borderColor: colors.grey[700] }}
                    >
                        <Typography
                            variant="h6"
                            color={colors.grey[100]}
                            className="font-normal uppercase pb-4"
                        >
                            pro leader
                        </Typography>
                        <Typography
                            variant="h1"
                            fontWeight={700}
                            color={colors.grey[100]}
                            className="mt-6 flex justify-center gap-1 text-7xl"
                        >
                            <span className="mt-2 text-3xl">$</span>599{" "}
                            <span className="self-end text-xl">/year</span>
                        </Typography>
                    </CardHeader>
                    <CardBody className="p-0">
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border-2 p-1 border-green-500 bg-green-500">
                                    <CheckIcon fontSize='small' sx={{color: "white"}}/>
                                </span>
                                <Typography className="font-normal" variant='h6' color={colors.grey[100]}>
                                    Custom Merchandising with <Typography component={'span'} fontWeight={700}>+10 items</Typography>
                                </Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border-2 p-1 border-green-500 bg-green-500">
                                    <CheckIcon fontSize='small' sx={{color: "white"}}/>
                                </span>
                                <Typography className="font-normal" variant='h6' color={colors.grey[100]}>Complete Store and global sales</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border-2 p-1 border-green-500 bg-green-500">
                                    <CheckIcon fontSize='small' sx={{color: "white"}}/>
                                </span>
                                <Typography className="font-normal" variant='h6' color={colors.grey[100]}>Analythics and reports</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border-2 p-1 border-green-500 bg-green-500">
                                    <CheckIcon fontSize='small' sx={{color: "white"}}/>
                                </span>
                                <Typography className="font-normal" variant='h6' color={colors.grey[100]}>
                                    <Typography component={'span'} fontWeight={700}>45% commision</Typography> per sale</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border-2 p-1 border-green-500 bg-green-500">
                                    <CheckIcon fontSize='small' sx={{color: "white"}}/>
                                </span>
                                <Typography className="font-normal" variant='h6' color={colors.grey[100]}>
                                    Seasons campaigns, promotions and rewards
                                </Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border-2 p-1 border-red-500">
                                    <ClearIcon fontSize='small' color="error"/>
                                </span>
                                <Typography className="font-normal" variant='h6' color={colors.grey[100]}>
                                    Marketing team support
                                </Typography>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="rounded-full border-2 p-1 border-red-500">
                                    <ClearIcon fontSize='small' color="error"/>
                                </span>
                                <Typography className="font-normal" variant='h6' color={colors.grey[100]}>
                                    Cutomizable Store for Events + More
                                </Typography>
                            </li>
                        </ul>
                    </CardBody>
                    <CardFooter className="mt-12 p-0 flex justify-center">
                        <Button
                            variant="contained"
                            sx={{
                                size: "lg",
                                backgroundColor: colors.grey[100],
                                color: colors.grey[900],
                                ripple: false,
                                width: "100%",
                                '&:hover': {
                                    backgroundColor: colors.grey[200],
                                }
                            }}

                        >
                            <Typography variant="h5" fontWeight={500}>Buy Now</Typography>
                        </Button>
                    </CardFooter>
                </Card>
            </Box>
        </Box>
    )
}

export default PricingOptions