import React from 'react';
import {Grid, Stack, Typography} from "@mui/material";
import IconAndDescription from "../components/IconAndDescription";
import java from '../images/java.png';
import javaScript from '../images/java-script.png';
import css from '../images/css-3.png';
import react from '../images/science.png';
import html from '../images/html-5.png';
import kafka from '../images/kafka.jpg';
import spring from '../images/spring.png';

const MySkills = () => {
    const IMG_WIDTH = 25;

    const SKILLS_LIST = [
        {name: 'Java', icon: <img src={java} alt={'java'} width={IMG_WIDTH} /> },
        {name: 'HTML', icon: <img src={html} alt={'java'} width={IMG_WIDTH} />},
        {name: 'CSS3', icon: <img src={css} alt={'java'} width={IMG_WIDTH} />},
        {name: 'JavaScript', icon: <img src={javaScript} alt={'java'} width={IMG_WIDTH} />},
        {name: 'Spring Boot', icon: <img src={spring} alt={'java'} width={IMG_WIDTH} />},
        {name: 'Kafka', icon: <img src={kafka} alt={'java'} width={IMG_WIDTH} />},
        {name: 'React', icon: <img src={react} alt={'java'} width={IMG_WIDTH} />},
    ];

    return(
        <Stack gap={2}>
            <Typography fontWeight={'bold'} variant={"h5"} >My Skills</Typography>
            <Grid container spacing={2}>
                {SKILLS_LIST?.map(skill => {
                    return(
                        <Grid item xs={4} md={3}>
                            <IconAndDescription icon={skill.icon} description={skill.name} />
                        </Grid>
                    );
                })}
            </Grid>
        </Stack>
    );
};

export default MySkills;