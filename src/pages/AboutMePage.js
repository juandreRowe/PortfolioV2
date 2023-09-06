import React, {useState} from 'react';
import {Box, Button, Container, Grid} from "@mui/material";
import AboutMe from "../sections/AboutMe";
import PersonalDetails from "../sections/PersonalDetails";
import MySkills from "../sections/MySkills";
import DownloadIcon from '@mui/icons-material/Download';

const AboutMePage = () => {
    const [isLoading, setIsLoading] = useState();

    const onDownloadHandler = () => {
        setIsLoading(true);
        fetch('/cv.pdf')
            .then(response => {
                response.blob().then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = 'juandreCV.pdf';
                    a.click();
                });
                //window.location.href = response.url;
            }).finally(() => {
                setIsLoading(false);
        });
    }

    return(
        <Container pb={3}>
            <AboutMe />
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6}>
                    <PersonalDetails />
                </Grid>
                <Grid item>
                    <MySkills />
                </Grid>
            </Grid>
            <Box display={'flex'} justifyContent={'center'} py={5}>
                <Button disabled={isLoading} onClick={onDownloadHandler} variant={'outlined'} endIcon={<DownloadIcon />}>{isLoading ? 'Downloading...' : 'Download CV'}</Button>
            </Box>
        </Container>
    );
};

export default AboutMePage;