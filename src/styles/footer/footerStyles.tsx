import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FooterContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.common.black,
  width: "100%",
  height: "50vh",
}));

export const GradientText = styled(Typography)(({ theme }) => ({
  fontSize: "10px",
  background: `-webkit-linear-gradient(right, ${theme.palette.common.custom.pink},${theme.palette.common.custom.purple})`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textAlign: "center",
}));

export const FooterLinkText = styled(Typography)(({ theme }) => ({
  color: "white",
  fontSize: 12,
}));
