import React from 'react'
import { Box, Button, TextField, Typography, useTheme } from '@mui/material'
import { Formik } from 'formik'
import * as yup from 'yup'
import useMediaQuery from '@mui/material/useMediaQuery'
import { tokens } from '../theme'

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
}

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/

const userSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    contact: yup.string().matches(phoneRegExp, "Phone number is not valid").required("required"),
    address1: yup.string().required("required"),
})

const ContactForm = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const isNonMobile = useMediaQuery('(min-width: 600px)')
    const handleFormSubmit = (values) => {
        console.log(values)
    }
    return (
        <Box className='w-full py-12 xl:py-32'>
            <Box className='container mx-auto'>
                <Box className='w-full flex flex-col justify-center items-center'>
                    <Typography variant='h1' fontWeight={700} color={colors.grey[100]} className='pb-4'>
                        Let's Get in Touch!
                    </Typography>
                    <Typography variant='h4' color={colors.grey[100]} className='pb-8'>
                        Submit this Form to get in touch with us
                    </Typography>
                </Box>
                <Box className='w-full flex justify-center'>
                    <Formik
                        
                        onSubmit={handleFormSubmit}
                        initialValues={initialValues}
                        validationSchema={userSchema}
                    >
                        {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                            <form onSubmit={handleSubmit}>
                                <Box
                                    m="40px 0 0 0"
                                    display="grid"
                                    gap="30px"
                                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                                    sx={{
                                        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                                    }}
                                    className='min-w-[300px] md:min-w-[600px] lg:min-w-[800px]'
                                >
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="First Name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.firstName}
                                        name="firstName"
                                        error={!!touched.firstName && !!errors.firstName}
                                        helperText={touched.firstName && errors.firstName}
                                        sx={{ gridColumn: "span 2" }}
                                    />
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Last Name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.lastName}
                                        name="lastName"
                                        error={!!touched.lastName && !!errors.lastName}
                                        helperText={touched.lastName && errors.lastName}
                                        sx={{ gridColumn: "span 2" }}
                                    />
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.email}
                                        name="email"
                                        error={!!touched.email && !!errors.email}
                                        helperText={touched.email && errors.email}
                                        sx={{ gridColumn: "span 4" }}
                                    />
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Contact Number"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.contact}
                                        name="contact"
                                        error={!!touched.contact && !!errors.contact}
                                        helperText={touched.contact && errors.contact}
                                        sx={{ gridColumn: "span 4" }}
                                    />
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Address 1"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.address1}
                                        name="address1"
                                        error={!!touched.address1 && !!errors.address1}
                                        helperText={touched.address1 && errors.address1}
                                        sx={{ gridColumn: "span 4" }}
                                    />
                                </Box>
                                <Box display="flex" justifyContent="end" mt="20px">
                                    <Button variant='contained' sx={[{ backgroundColor: colors.orangeAccent[500] }, { '&:hover': { backgroundColor: colors.orangeAccent[600] } }]}>contact me!</Button>
                                </Box>
                            </form>
                        )}
                    </Formik>
                </Box>
            </Box>
        </Box>
    )
}

export default ContactForm