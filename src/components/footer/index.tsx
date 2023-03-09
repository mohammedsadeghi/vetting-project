import {
  FooterContainer,
  FooterLinkText,
  GradientText,
} from "@/styles/footer/footerStyles";
import { Grid, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Grid
          container
          alignItems={"center"}
          sx={{ height: "50vh", width: "100%" }}
        >
          <Grid item container justifyContent={"center"} xs={12} spacing={4}>
            <Grid item>
              <FooterLinkText>Game List</FooterLinkText>
            </Grid>
            <Grid item>
              <FooterLinkText>Create A Game</FooterLinkText>
            </Grid>
            <Grid item>
              <FooterLinkText>Nothing</FooterLinkText>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <GradientText>Copyright ©Mohammad Sadeghi</GradientText>
          </Grid>
        </Grid>
      </FooterContainer>
    </>
  );
};
