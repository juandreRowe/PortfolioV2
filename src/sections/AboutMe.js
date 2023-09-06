import React from "react";
import {Box, Stack, Typography} from "@mui/material";
import {useTheme} from "@emotion/react";

const AboutMe = () => {
    const theme = useTheme();
    return(
        <Stack gap={2} mb={2}>
            <Box flexDirection={'column'} display={'flex'} alignItems={'center'} mt={2}>
                <Typography fontWeight={'bold'} variant={"h4"} >About me</Typography>
                <div style={{borderBottom: `1px solid ${theme.palette.secondary.main}`, width: '50px', marginBottom: '5px'}}></div>
                <div style={{borderBottom: `1px solid ${theme.palette.secondary.main}`, width: '25px'}}></div>
            </Box>
            <Typography>
                I am a highly skilled and motivated Full Stack Software Developer with 2 years of professional experience
                in building robust and scalable web applications. My expertise lies in crafting efficient solutions using
                a wide range of technologies, including Java, JavaScript, HTML, CSS, React, Spring Boot and Kafka.
            </Typography>
        </Stack>
    );
};

export default AboutMe;