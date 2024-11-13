import { createTheme } from "@mui/material/styles";

export const theme2 = createTheme({
    palette: {
      primary: {
        main: "#2E3138"
      },
      secondary: {
        main: "#ccc9e7"
      }
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableRipple: true,
          size: "large",
          sx: {
            borderRadius: "50px"
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            background: "gray"
          }
        },
        defaultProps: {
          elevation: 20
        }
      },
      MuiInput:{
        styleOverrides: {
          root: {
            color: "white"
          }
        }
      }
    }
  });