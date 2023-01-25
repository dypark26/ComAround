import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    textColor: string;
    header: string;
    herdernumber: string;
    activeMenu: string;
    children?: JSX.Element | JSX.Element[];
  }
}
