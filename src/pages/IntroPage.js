import React from 'react';
import {Stack} from "@mui/material";
import IntroBox from "../sections/IntroBox";

const IntroPage = () => {
    return(
        <Stack className={'bg'} style={{height: '80vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <Stack style={{margin: 'auto auto auto auto'}}>
                <IntroBox />
            </Stack>
        </Stack>
    );
};

export default IntroPage;