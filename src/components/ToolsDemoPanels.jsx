import React, { useState } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../theme';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

const ToolsDemoPanels = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [activeTab, setActiveTab] = React.useState("html");
    const data = [
        {
            label: "HTML",
            value: "html",
            desc: `It really matters and then like it really doesn't matter.
    What matters is the people who are sparked by it. And the people 
    who are like offended by it, it doesn't matter.`,
        },
        {
            label: "React",
            value: "react",
            desc: `Because it's about motivating the doers. Because I'm here
    to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
            label: "Vue",
            value: "vue",
            desc: `We're not always in the position that we want to be at.
    We're constantly growing. We're constantly making mistakes. We're
    constantly trying to express ourselves and actualize our dreams.`,
        },

    ]


    return (
        <Box className='w-full py-32' backgroundColor={colors.primary[400]}>
            <Box className='container mx-auto'>
                <Box className='flex flex-col justify-center items-center pb-16'>
                    <Typography variant='h1' fontWeight={700} color={colors.grey[100]} className='pb-4'>Tools Advantages</Typography>
                    <Typography variant='h4' color={colors.grey[100]}>See some advantages of using our tools</Typography>
                </Box>
                <Tabs value={activeTab} className='pt-4'>
                    <TabsHeader
                        className="rounded-none border-b bg-transparent"
                        style={{ borderColor: colors.grey[700], backgroundColor: colors.primary[400]}}
                        indicatorProps={{
                            className:
                                "border-b-2 shadow-none rounded-none h-12 pt-8 pb-5",
                            style: {
                                borderColor: colors.orangeAccent[500],
                                backgroundColor: colors.background[100]
                            },
                        }}
                        
                    >
                        {data.map(({ label, value }) => (
                            <Tab
                                key={value}
                                value={value}
                                onClick={() => setActiveTab(value)}
                                className='flex flex-col justify-center items-center h-12'
                            >
                                <Typography variant="h4" 
                                    fontWeight={700}
                                    color= {activeTab === value ? colors.grey[100] : colors.grey[300]}>{label}</Typography>
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody className='h-72'>
                        {data.map(({ value, desc }) => (
                            <TabPanel key={value} value={value}>
                                {desc}
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>
            </Box>
        </Box>

    )
}

export default ToolsDemoPanels