import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../theme'

const FAQ = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box className='w-full py-32'>
            <Box className='container mx-auto flex flex-col items-center'>
                <Box className='pb-16 flex flex-col items-center'>
                    <Typography variant='h1' fontWeight={700} className='pb-4'>Frequently Asked Questions</Typography>
                    <Typography variant='h4'>We're here to help you learn more.</Typography>
                </Box>
                <Box className='w-full flex flex-col items-start px-48 py-24' backgroundColor={colors.primary[400]}>
                    <Typography variant='h2' fontWeight={500} className='pl-8 pb-4'>What services does TrendLeaders offer?</Typography>
                    <Typography variant='h4' className='pb-16'>
                        TrendLeaders offers a wide range of services, including innovation consulting, product development, digital marketing strategies, market trend analysis, and professional training.
                    </Typography>
                    <Typography variant='h2' fontWeight={500} className='pl-8 pb-4'>How can I contact TrendLeaders?</Typography>
                    <Typography variant='h4' className='pb-16'>
                        You can contact us through our website's contact form, by emailing us at info@trendleaders.com, or by calling us at +123-456-7890
                    </Typography>
                    <Typography variant='h2' fontWeight={500} className='pl-8 pb-4'>What is the process for starting a project with TrendLeaders?</Typography>
                    <Typography variant='h4' className='pb-16'>
                        The process starts with an initial consultation to understand your needs and objectives. Then, we create a personalized proposal, and once approved, we assign a dedicated team to work on your project.
                    </Typography>
                    <Typography variant='h2' fontWeight={500} className='pl-8 pb-4'>What sets TrendLeaders apart from other consulting firms?</Typography>
                    <Typography variant='h4' className='pb-16'>
                        Our unique blend of creativity and seriousness, combined with a focus on innovation and a commitment to excellence, sets us apart. We work closely with our clients to deliver customized solutions that truly make a difference.
                    </Typography>
                    <Typography variant='h2' fontWeight={500} className='pl-8 pb-4'>Do you offer services internationally?</Typography>
                    <Typography variant='h4' className='pb-16'>
                        Yes, TrendLeaders provides services to clients worldwide. We use digital communication tools and collaborative platforms to work efficiently with international clients.
                    </Typography>
                    <Typography variant='h2' fontWeight={500} className='pl-8 pb-4'>What types of companies can benefit from TrendLeaders' services?</Typography>
                    <Typography variant='h4' className='pb-16'>
                        We work with a variety of companies, from startups to large corporations, in sectors such as technology, healthcare, finance, manufacturing, and more. Any company looking to innovate and improve its operations can benefit from our services.
                    </Typography>
                    <Typography variant='h2' fontWeight={500} className='pl-8 pb-4'>How does TrendLeaders ensure the quality of its services?</Typography>
                    <Typography variant='h4' className='pb-16'>
                        We ensure the quality of our services through a rigorous quality control process, continuous client feedback, and ongoing improvement based on the latest industry standards and best practices.
                    </Typography>
                    <Typography variant='h2' fontWeight={500} className='pl-8 pb-4'>Does TrendLeaders offer training or workshops?</Typography>
                    <Typography variant='h4' className='pb-16'>
                        Yes, we offer training programs and workshops designed to enhance skills in innovation, leadership, and project management. These programs are available both online and in-person.
                    </Typography>
                    <Typography variant='h2' fontWeight={500} className='pl-8 pb-4'>What is TrendLeaders' mission?</Typography>
                    <Typography variant='h4' className='pb-16'>
                        Our mission is to share knowledge, resources, and insights that empower individuals and businesses to thrive in an ever-changing environment. We are dedicated to building a community of continuous learning and growth.
                    </Typography>
                    <Typography variant='h2' fontWeight={500} className='pl-8 pb-4'>Where are TrendLeaders' offices located?</Typography>
                    <Typography variant='h4' className='pb-16'>
                        Our main office is located at [Main Office Address], but we also have several satellite offices and work in a flexible environment that includes remote work options.
                    </Typography>
                    <Typography variant='h2' fontWeight={500} className='pl-8 pb-4'>How can I stay updated with TrendLeaders' news and updates?</Typography>
                    <Typography variant='h4' className='pb-16'>
                        You can follow us on social media, subscribe to our newsletter on our website, and regularly visit our news and blog section to stay up to date with the latest developments.
                    </Typography>
                    <Typography variant='h2' fontWeight={500} className='pl-8 pb-4'>Does TrendLeaders have corporate social responsibility (CSR) programs?</Typography>
                    <Typography variant='h4' className='pb-24'>
                        Yes, TrendLeaders is committed to corporate social responsibility. We participate in various community initiatives, ecological projects, and programs supporting education and entrepreneurship.
                    </Typography>
                    <Typography variant='h2' fontWeight={500} className='text-center pb-8'>For any other inquiries, please feel free to contact us. We are here to help!</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default FAQ