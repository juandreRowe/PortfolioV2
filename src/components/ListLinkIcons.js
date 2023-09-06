import React from 'react';
import LinkIcon from "./LinkIcon";
import {Box} from "@mui/material";

const ListLinkIcons = ({iconsAndLinks}) => {
    return(
        <Box display={'flex'} justifyContent={'center'} gap={1} alignItems={'center'}>
            {iconsAndLinks?.map(i => {
                return(<LinkIcon icon={i.icon} link={i.link} />);
            })}
        </Box>
    );
};

export default ListLinkIcons;