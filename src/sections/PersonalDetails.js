import React from "react";
import {Grid, Stack, Typography} from "@mui/material";
import {useTheme} from "@emotion/react";

const PersonalDetails = () => {
    const theme = useTheme();

    const DETAILS_LIST = [
        {name: 'Phone', value: '068 522 0840'},
        {name: 'Email', value: 'juandrerowe.jr@gmail.com'},
        {name: 'Job Status', value: 'FREELANCE', invert: true},
    ]

    return(
        <Stack gap={2}>
            <Typography fontWeight={'bold'} variant={"h5"} >Personal Details</Typography>
            {DETAILS_LIST?.map(detail => {
                return(
                    <Grid container>
                        <Grid item xs={4} md={4}>
                            <Typography color={theme.palette.secondary.main} variant={"p"} >{detail.name}</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography style={detail?.invert ? {wordBreak: 'break-all', backgroundColor: theme.palette.secondary.main, padding: '2.5px', borderRadius: '5px'} : {}} variant={"p"} >{detail.value}</Typography>
                        </Grid>
                    </Grid>
                );
            })}
        </Stack>
    );
};

export default PersonalDetails;