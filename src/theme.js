import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";

// color design tokens
export const tokens = (mode) => ({
    ...(mode === "dark"
        ? {
            grey: {
                100: "#e0e0e0",
                200: "#c2c2c2",
                300: "#a3a3a3",
                400: "#858585",
                500: "#666666",
                600: "#525252",
                700: "#3d3d3d",
                800: "#292929",
                900: "#141414"
            },
            primary: {
                100: "#d0d1d5",
                200: "#a1a4ab",
                300: "#727681",
                400: "#1f2a40",
                500: "#141b2d",
                600: "#101624",
                700: "#0c101b",
                800: "#080b12",
                900: "#040509"
            },
            orangeAccent: {
                100: "#ffccb4",
                200: "#ffb38f",
                300: "#ff9a6c",
                400: "#fa7f48",
                500: "#f26422",
                600: "#c6541f",
                700: "#743418",
                800: "#4e2513",
                900: "#2a170c"
            },
            blueAccent: {
                100: "#e1e2fe",
                200: "#c3c6fd",
                300: "#a4a9fc",
                400: "#868dfb",
                500: "#6870fa",
                600: "#535ac8",
                700: "#3e4396",
                800: "#2a2d64",
                900: "#151632"
            },
            redAccent: {
                100: "#f8dcdb",
                200: "#f1b9b7",
                300: "#e99592",
                400: "#e2726e",
                500: "#db4f4a",
                600: "#af3f3b",
                700: "#832f2c",
                800: "#58201e",
                900: "#2c100f"
            },
            background: {
                100: "#141b2d"
            }
        } : {
            grey: {
                100: "#141414",
                200: "#292929",
                300: "#3d3d3d",
                400: "#525252",
                500: "#666666",
                600: "#858585",
                700: "#a3a3a3",
                800: "#c2c2c2",
                900: "#e0e0e0",
            },
            primary: {
                100: "#040509",
                200: "#080b12",
                300: "#0c101b",
                400: "#f2f0f0",
                500: "#141b2d",
                600: "#434957",
                700: "#727681",
                800: "#a1a4ab",
                900: "#d0d1d5",
            },
            orangeAccent: {
                100: "#2a170c",
                200: "#4e2513",
                300: "#743418",
                400: "#c6541f",
                500: "#f26422",
                600: "#fa7f48",
                700: "#ff9a6c",
                800: "#ffb38f",
                900: "#ffccb4",
            },
            blueAccent: {
                100: "#151632",
                200: "#2a2d64",
                300: "#3e4396",
                400: "#535ac8",
                500: "#6870fa",
                600: "#868dfb",
                700: "#a4a9fc",
                800: "#c3c6fd",
                900: "#e1e2fe",
            },
            redAccent: {
                100: "#2c100f",
                200: "#58201e",
                300: "#832f2c",
                400: "#af3f3b",
                500: "#db4f4a",
                600: "#e2726e",
                700: "#e99592",
                800: "#f1b9b7",
                900: "#f8dcdb",
            },
            background: {
                100: "#fcfcfc"
            }
        }
    )
})

//mui theme settings
export const themeSettings = (mode) => {
    const colors = tokens(mode)

    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                    primary: {
                        main: colors.primary[500],
                    },
                    secondary: {
                        main: colors.orangeAccent[700],
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100],
                    },
                    background: {
                        default: colors.background[100],
                    },
                }
                : {
                    primary: {
                        main: colors.primary[100],
                    },
                    secondary: {
                        main: colors.orangeAccent[300],
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100],
                    },
                    background: {
                        default: colors.background[100],
                    }
                }),
        },
        typography: {
            fontFamily: ["Raleway", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Raleway", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Raleway", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Raleway", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Raleway", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Raleway", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Raleway", "sans-serif"].join(","),
                fontSize: 14,
            }
        }
    }
}

//React Context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => {},
})

export const useMode = () => {
    const [mode, setMode] = useState("dark")

    const colorMode = useMemo(() => ({
        toggleColorMode: () => setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
    )

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

    return [theme, colorMode]
}
