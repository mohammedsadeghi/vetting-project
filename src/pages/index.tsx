import SearchAppBar from "@/components/header";
import { Body } from "@/components/body";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { getCountries } from "@/api/getCountries";
import { Footer } from "@/components/footer";
import React from "react";
//! Important !

//inspected document.getElementById("__NEXT_DATA__").text in devtools and realized JSON file including 250 countries is 829kb which may cause performance issues.

//! Important !
export default function Home({ countries }: { countries: any }) {
  const [searchInputValue, setSearchInputValue] = React.useState<String>("");
  const setSearchValue = (value: String) => {
    setSearchInputValue(value);
  };
  const theme = useTheme();

  return (
    <>
      <Box sx={{ background: "#1c1b19", pt: theme.spacing(2), height: "100%" }}>
        <SearchAppBar setSearchValue={setSearchValue} />
        <Body countries={countries} searchInputValue={searchInputValue} />
        <Footer />
      </Box>
    </>
  );
}
export async function getStaticProps(context: any) {
  const countries = await getCountries();

  if (!countries) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      countries,
    },
  };
}
