import 'styled-components'
// import { ThemeType } from "./theme"; // Import type from above file
declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    primary: string;
    secondary: string;
    font:string;
    mode:string;
  }
}
