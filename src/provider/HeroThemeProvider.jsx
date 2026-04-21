'use client'
import { ThemeProvider } from "next-themes";


const HeroThemeProvider = ({children}) => {
    return (
        <ThemeProvider attribute='class' defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
    );
};

export default HeroThemeProvider;