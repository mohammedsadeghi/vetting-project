import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TableDataType } from "@/utils/type";
import { Box } from "@mui/material";
import {
  StyledTableCell,
  StyledTableRow,
} from "@/styles/countryPage/body/bodyStyles";

export const CountryTable = ({ rowData }: { rowData: TableDataType }) => {
  return (
    <TableContainer component={Box}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>independent</StyledTableCell>
            <StyledTableCell>region</StyledTableCell>
            <StyledTableCell>population</StyledTableCell>
            <StyledTableCell>startOfWeek</StyledTableCell>
            <StyledTableCell>unMember</StyledTableCell>
            <StyledTableCell>languages</StyledTableCell>
            <StyledTableCell>area</StyledTableCell>
            <StyledTableCell>capitalInfo</StyledTableCell>
            <StyledTableCell>currencies</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              {rowData.name}
            </StyledTableCell>
            <StyledTableCell>{`${rowData.independent}`}</StyledTableCell>
            <StyledTableCell>{rowData.region}</StyledTableCell>
            <StyledTableCell>{rowData.population}</StyledTableCell>
            <StyledTableCell>{rowData.startOfWeek}</StyledTableCell>
            <StyledTableCell>{`${rowData.unMember}`}</StyledTableCell>
            <StyledTableCell>{rowData.languages}</StyledTableCell>
            <StyledTableCell>{rowData.area}</StyledTableCell>
            <StyledTableCell>{rowData.capitalInfo}</StyledTableCell>
            <StyledTableCell>{rowData.currencies}</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
