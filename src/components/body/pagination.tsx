import * as React from "react";
import Pagination from "@mui/material/Pagination";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { PaginationContainer } from "@/styles/body/bodyStyles";

export const BasicPagination = ({
  numberOfPages,
  handleChange,
}: {
  numberOfPages: number;
  handleChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}) => {
  const theme = useTheme();
  return (
    <PaginationContainer>
      <Pagination
        count={numberOfPages}
        color="primary"
        sx={{
          width: "fit-content",
        }}
        onChange={handleChange}
      />
    </PaginationContainer>
  );
};
