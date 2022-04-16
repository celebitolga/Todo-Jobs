import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: {
      default: string;
    }
    colors: {
      transparent: string;
      white: string;
      black: {
        default: string;
        500: string;
      };
      error: string;
      primary: string;
      secondary: string;
      gray: string;
      darkGray: string;
      lightGray: string;
      urgent: string;
      regular: string;
      trivial: string;
    },
    screens: {
      sm: string,
      md: string,
      lg: string,
      xl: string,
    }
  }
}