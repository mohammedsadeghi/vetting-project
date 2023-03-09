import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { Typography } from "@mui/material";
import {
  CardContainer,
  CardsButton,
  CardsName,
} from "@/styles/body/bodyStyles";
import { useRouter } from "next/router";

type CardData = {
  name: any;
  image: any;
};

export const Card = ({ cardData }: { cardData: CardData }) => {
  const theme = useTheme();
  const router = useRouter();

  const handleClick = (id: URL) => {
    router.push("country/" + id);
  };
  return (
    <CardContainer>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ height: "40vh" }}
      >
        <Grid item xs={5} justifyContent={"center"} sx={{ height: "100%" }}>
          <Box
            sx={{
              py: theme.spacing(2),
              position: "relative",
              height: "100%",
            }}
          >
            <Image
              src={cardData.image !== "" ? cardData.image : ""}
              alt="Flag"
              fill
              style={{ width: "100%", height: "100%", top: 0, left: 0 }}
            />
          </Box>
        </Grid>
        <Grid
          item
          container
          xs={5}
          direction={"column"}
          spacing={theme.spacing(2)}
        >
          <Grid item>
            <Typography
              variant="subtitle2"
              sx={{ color: "white", textAlign: "center", fontSize: 8 }}
            >
              Try Your Chance
            </Typography>
          </Grid>
          <Grid item>
            <CardsName variant="h5">{cardData.name}</CardsName>
          </Grid>
          <Grid item>
            <Box
              sx={{ window: "100%", justifyContent: "center", display: "flex" }}
            >
              <CardsButton
                color={"secondary"}
                variant="contained"
                onClick={() => handleClick(cardData.name.replace(/\s/g, "/"))}
              >
                SEE MORE
              </CardsButton>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </CardContainer>
  );
};
