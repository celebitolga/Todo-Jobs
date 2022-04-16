import { DefaultTheme, ThemeProvider } from "styled-components";

interface Props {
  children: React.ReactNode;
}

const theme: DefaultTheme = {
  borderRadius: {
    default: "0.25rem",
  },
  colors: {
    transparent: "transparent",
    white: "#ffffff",
    black: {
      default: "#000000",
      "500": "rgba(0, 0, 0, 0.5)",
    },
    error: "#ff0000",
    gray: "#EBEBEB",
    darkGray: "#A4A0A7",
    lightGray: "#F9F9F9",
    primary: "#E4EAFD",
    secondary: "#1750B3",
    urgent: "#E83D6D",
    regular: "#F1A824",
    trivial: "#2277E0",
  },
  screens: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
};

function Theme({ children }: Props): JSX.Element {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
