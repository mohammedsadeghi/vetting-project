import { getCountry } from "@/api/getCountry";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { TableDataType } from "@/utils/type";
import { CountryTable } from "@/components/countryPage/body/table";
import { Footer } from "@/components/footer";
type CountryProps = {
  response: any;
};

function Page({ response }: CountryProps) {
  const theme = useTheme();

  const TableData: TableDataType = {
    name: response[0].name.common,
    independent: response[0].independent,
    region: response[0].region,
    population: response[0].population,
    startOfWeek: response[0].startOfWeek,
    unMember: response[0].unMember,
    languages: Object.keys(response[0].languages)
      .map((key) => response[0].languages[key])
      .join(" "),
    area: response[0].area,
    capitalInfo: response[0].capital[0],
    currencies: Object.keys(response[0].currencies)
      .map((key) => response[0].currencies[key].name)
      .join(" "),
  };
  return (
    <>
      <Box
        sx={{
          background: "#1c1b19",
          p: theme.spacing(2),
          height: "100vh",
        }}
      >
        <CountryTable rowData={TableData} />
      </Box>
      <Footer />
    </>
  );
}
type ServerSideProps = {
  req: any;
  res: any;
  query: {
    country: String[];
  };
};
// This gets called on every request
export async function getServerSideProps({ req, res, query }: ServerSideProps) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const response = await getCountry(query.country.join(" "));

  return {
    props: {
      response,
    },
  };
}

export default Page;
