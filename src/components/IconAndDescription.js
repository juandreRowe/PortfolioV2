import React from 'react';
import {Stack} from "@mui/material";
import {useTheme} from "@emotion/react";

const IconAndDescription = ({icon, description}) => {
    const theme = useTheme();
    return(
        <Stack gap={1} p={1} style={{backgroundColor: theme.palette.grey.main}} alignItems={'center'}>
            {icon}
            {description}
        </Stack>
    );
};

export default IconAndDescription;