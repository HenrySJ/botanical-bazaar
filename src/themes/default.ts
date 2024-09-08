'use client';

import { Palette, createTheme } from "@mui/material";
import { Playpen_Sans } from 'next/font/google'

const playpenSans = Playpen_Sans({
    weight: ['200', '400', '700', '800'],
    subsets: ['latin'],
    display: 'swap'
})

const themeDefault = createTheme({
    palette: {
        primary: {
            main: '#3c3c3c'
        },
        secondary: {
            main: '#29aa09',
            dark: '#005b00',
            light: '#c4e5bc',
            contrastText: '#000'
        },
    },
    typography: {
        fontFamily: playpenSans.style.fontFamily,
        h5: {
            fontWeight: 800
        }  
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: 'none',
                    boxShadow: 'none'
                }
            }
        }
    }
});

export default themeDefault;