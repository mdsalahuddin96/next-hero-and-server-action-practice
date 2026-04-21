'use client'
import { ThemeProvider } from "next-themes";


const HeroThemeProvider = ({children}) => {
    return (
        <ThemeProvider attribute='class' defaultTheme="light" enableSystem>
            {children}
        </ThemeProvider>
    );
};

export default HeroThemeProvider;