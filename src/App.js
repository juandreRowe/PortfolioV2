import React from 'react';
import "../public/styles.css";

import {createTheme, ThemeProvider} from "@mui/material/styles";//Will override default imports components
import {ThemeProvider as ThemeProviderGlobal} from "@mui/material";
import IntroPage from "./pages/IntroPage";
import AboutMePage from "./pages/AboutMePage";
//Will override named imports components

const SECONDARY_GREY = "#1F2326";
const PRIMARY = "#FFFFFF";

const theme = createTheme({
    palette: {
        primary: {
            main: PRIMARY
        },
        secondary: {
            main: "#37b099"
        },
        grey: {
            main: "#212528",
            secondary: SECONDARY_GREY
        }
    },
});

const App = () => {
    return(
        <ThemeProvider theme={theme}>
            <ThemeProviderGlobal theme={theme}>
                <div style={{backgroundColor: SECONDARY_GREY, color: PRIMARY}}>
                    <IntroPage />
                    <br />
                    <br />
                    <AboutMePage />
                </div>
            </ThemeProviderGlobal>
        </ThemeProvider>
    );
};

export default App;