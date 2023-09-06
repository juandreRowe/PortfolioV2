import React, {useEffect} from "react";
import {Stack, Typography} from "@mui/material";
import ListLinkIcons from "../components/ListLinkIcons";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import juandre from '../images/juandre.png';
import {useTheme} from "@emotion/react";

const ICONS_AND_LINKS = [
    {icon: <GitHubIcon fontSize={'large'} color={"primary"} />, link: 'https://github.com/juandreRowe'},
    {icon: <LinkedInIcon fontSize={'large'} color={"primary"} />, link: 'https://www.linkedin.com/in/juandre-rowe-3853961b6/'},
]

const IntroBox = () => {
    const theme = useTheme();

    return(
        <Stack gap={1} pb={2} alignItems={'center'} style={{backgroundColor: theme.palette.grey.main, maxWidth: '250px', borderRadius: '5%', marginTop: '100px'}}>
            <div style={{borderRadius: '100%', overflow: 'hidden', border: `20px solid rgba(55, 176, 153, 0.2)`, backgroundColor: "rgba(55, 176, 153, 0.2)", marginTop: '-100px'}}>
                <div style={{overflow: 'hidden', borderRadius: '100%', border: `5px solid ${theme.palette.secondary.main}`, zIndex: 2}}>
                    <img alt={'personal image'} src={juandre} style={{width: '100%', marginBottom: '-10px', zIndex: 2}} />
                </div>
            </div>
            <Stack alignItems={'center'}>
                <Typography fontWeight={'bold'} variant={"h4"} >Juandre Rowe</Typography>
                <Typography fontWeight={'bold'} variant={"subtitle1"}>Software Engineer</Typography>
            </Stack>
            <ListLinkIcons iconsAndLinks={ICONS_AND_LINKS} />
        </Stack>
    );
};

export default IntroBox;