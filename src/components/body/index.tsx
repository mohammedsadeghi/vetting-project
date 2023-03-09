import React from "react";
import { BasicPagination } from "./pagination";
import { Grid, Typography } from "@mui/material";
import { Card } from "./card";
import { useTheme } from "@mui/material/styles";

type BodyProps = {
  countries: any;
  searchInputValue: String;
};
export const Body = ({ countries, searchInputValue }: BodyProps) => {
  const [page, setPage] = React.useState<number>(1);
  const theme = useTheme();
  console.log({ countries: countries.length });

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  //using useMemo, elements of the selected page will be stored in a variable and cached
  const elements = React.useMemo(() => {
    const endOfLine = page * 10;
    const startOfLine = page * 10 - 9;
    const selectedCountries = [];
    for (const [i, value] of countries.entries()) {
      if (i + 1 >= startOfLine && i + 1 <= endOfLine) {
        selectedCountries.push(value);
      } else if (i + 1 == endOfLine) break;
    }

    return selectedCountries;
  }, [page]);
  //using useMemo and searchInput value, elements that match with the entered value will be shown
  const searchResultForCountryName: any[] | null = React.useMemo(() => {
    if (searchInputValue !== "") {
      return countries.filter((country: any) => {
        return country.name.official === searchInputValue;
      });
    } else {
      return null;
    }
  }, [searchInputValue]);
  // this functions is used in map fn in JSX part
  const mapOutPut = (country: any, index: number) => {
    return (
      <Grid item xs={10} md={5} justifyContent={"center"} key={index}>
        <Card
          cardData={{
            image: country.coatOfArms.svg,
            name: country.name.official,
          }}
        />
      </Grid>
    );
  };
  return (
    <>
      <Grid container spacing={theme.spacing(4)} justifyContent={"center"}>
        <Grid item xs={8} justifySelf={"center"}>
          <Typography
            variant="h3"
            sx={{ textAlign: "center", my: theme.spacing(2), color: "white" }}
          >
            List
          </Typography>
        </Grid>
        {searchResultForCountryName
          ? searchResultForCountryName.map((country: any, index: number) =>
              mapOutPut(country, index)
            )
          : elements.map((country: any, index: number) =>
              mapOutPut(country, index)
            )}
      </Grid>
      <BasicPagination
        numberOfPages={countries.length / 10}
        handleChange={handleChange}
      />
    </>
  );
};
