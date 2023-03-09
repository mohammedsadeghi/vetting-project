import { createTheme } from "@mui/material/styles";
// Create a theme instance.

declare module "@mui/material/styles/createPalette" {
  //For TypeScript, you need to add module augmentation for the `custom` value
  interface CommonColors {
    custom: {
      brown: String;
      pink: String;
      purple: String;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#111111",
    },
    secondary: {
      main: "#8449E4",
    },
    common: {
      custom: {
        brown: "#E89951",
        pink: "#FF8C68",
        purple: "#8449E4",
      },
    },
  },
});
export default theme;
