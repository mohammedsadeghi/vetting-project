import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CardContainer = styled(Box)(({ theme }) => ({
  background: `linear-gradient(to right top, ${theme.palette.common.black} 50%,${theme.palette.common.custom.purple})`,
  overflow: "hidden",
  borderRadius: theme.shape.borderRadius,
}));

export const CardsButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(to right top, ${theme.palette.common.custom.pink},${theme.palette.common.custom.purple})`,
  alignSelf: "center",
  color: theme.palette.common.black,
  fontWeight: "bold",
  [theme.breakpoints.down("md")]: {
    fontSize: 16,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
  },
}));

export const PaginationContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  backgroundColor: theme.palette.common.custom.purple,
  marginTop: theme.spacing(4),
}));

export const CardsName = styled(Typography)(({ theme }) => ({
  color: "white",
  textAlign: "center",

  [theme.breakpoints.down("md")]: {
    fontSize: 16,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
  },
}));
