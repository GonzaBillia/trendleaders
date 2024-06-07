import React from 'react'
import {
    Card,
    Input,
    Checkbox,
} from "@material-tailwind/react"
import { Box, Typography, Button, useTheme, Backdrop, Modal, Fade } from '@mui/material'
import { tokens } from '../theme'
import { Link } from 'react-router-dom'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    maxHeight: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Login = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

        return (
            <Box className='w-full'>
                <Box className='container mx-auto flex flex-col items-center p-16'>
                    <Card style={{ backgroundColor: colors.primary[400] }} shadow={false} className='p-16'>
                        <Typography variant="h1" fontWeight={700} color={colors.grey[100]}>
                            Sign Up
                        </Typography>
                        <Typography variant='h5' color={colors.grey[200]} className="pt-3">
                            Nice to meet you! Enter your details to register.
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
                                    Your Email
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
                            <Checkbox
                                label={
                                    <Typography
                                        variant="small"
                                        color={colors.grey[200]}
                                        className="flex items-center font-normal"
                                    >
                                        I agree the
                                        <a
                                            onClick={handleOpen}
                                            className="font-medium"
                                            style={{ color: colors.orangeAccent[500] }}
                                        >
                                            &nbsp;Terms and Conditions
                                        </a>
                                    </Typography>
                                }
                                containerProps={{ className: "-ml-2.5" }}
                            />
                            <Box className='py-4 flex justify-center'>
                                <Button variant='contained' fullWidth sx={[{ backgroundColor: colors.orangeAccent[500] }, { '&:hover': { backgroundColor: colors.orangeAccent[600] } }]}>Sing Up</Button>
                            </Box>

                            <Typography variant='h5' color={colors.grey[200]} className="mt-4 text-center">
                                Already have an account?{" "}
                                <Link to={'/trendleaders/singin'} className="font-medium" style={{color: colors.orangeAccent[500]}}>
                                    Sign In
                                </Link>
                            </Typography>

                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                open={open}
                                onClose={handleClose}
                                closeAfterTransition
                                slots={{ backdrop: Backdrop }}
                                slotProps={{
                                    backdrop: {
                                        timeout: 500,
                                    },
                                }}
                            >
                                <Fade in={open}>
                                    <Box sx={style} overflow={"scroll"}>
                                        <Typography id="transition-modal-title" variant="h6" component="h2">
                                            Terms and Conditions
                                        </Typography>
                                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                            1. Introduction

                                            Welcome to TrendLeaders. These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to comply with and be bound by these terms. If you do not agree to these terms, please do not use our services.

                                            2. Definitions

                                            "Company" refers to TrendLeaders.
                                            "User" refers to any individual or entity accessing or using the services provided by TrendLeaders.
                                            "Services" refers to all services provided by TrendLeaders, including consulting, training, product development, and other professional services.
                                            3. Use of Services

                                            3.1. Eligibility: You must be at least 18 years old to use our services.

                                            3.2. Compliance: You agree to use our services in compliance with all applicable laws and regulations.

                                            3.3. Account: If you create an account with us, you are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.

                                            4. Intellectual Property

                                            4.1. Ownership: All content and materials provided by TrendLeaders, including but not limited to text, graphics, logos, and software, are the property of TrendLeaders or its licensors and are protected by intellectual property laws.

                                            4.2. License: TrendLeaders grants you a limited, non-exclusive, non-transferable license to access and use our services for personal or internal business use.

                                            5. Confidentiality

                                            5.1. Confidential Information: Both parties agree to keep confidential any proprietary information disclosed during the course of the services.

                                            5.2. Exceptions: Confidential information does not include information that is publicly known, already known to the recipient, independently developed, or required to be disclosed by law.

                                            6. Payment Terms

                                            6.1. Fees: You agree to pay all fees and charges for the services provided by TrendLeaders as outlined in the applicable service agreement.

                                            6.2. Payment: Payments are due as specified in the invoice or service agreement. Late payments may be subject to interest charges.

                                            7. Limitation of Liability

                                            7.1. No Warranty: TrendLeaders provides services on an "as is" and "as available" basis without any warranties of any kind, express or implied.

                                            7.2. Limitation: In no event shall TrendLeaders be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services.

                                            8. Indemnification

                                            You agree to indemnify and hold TrendLeaders harmless from any claims, damages, losses, or expenses arising out of your use of our services or violation of these terms.

                                            9. Termination

                                            9.1. Termination by User: You may terminate your use of our services at any time by notifying us in writing.

                                            9.2. Termination by TrendLeaders: We reserve the right to terminate or suspend your access to our services at any time, without notice, for conduct that we believe violates these terms or is harmful to other users.

                                            10. Governing Law

                                            These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.

                                            11. Changes to Terms

                                            TrendLeaders reserves the right to modify these terms at any time. We will notify you of any changes by posting the new terms on our website. Your continued use of our services after such changes constitutes your acceptance of the new terms.

                                            12. Contact Information

                                            If you have any questions about these terms, please contact us at:

                                            TrendLeaders
                                            [Address]
                                            Email: info@trendleaders.com
                                            Phone: +123-456-7890
                                        </Typography>
                                    </Box>
                                </Fade>
                            </Modal>
                        </form>
                    </Card>
                </Box>
            </Box>
        )
    }

    export default Login