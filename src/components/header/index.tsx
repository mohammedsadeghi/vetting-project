import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import {
  LinearChip,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "@/styles/header/headerStyles";
import { useTheme } from "@mui/material/styles";

type AppBarProps = {
  setSearchValue: (value: String) => void;
};
export default function SearchAppBar({ setSearchValue }: AppBarProps) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        flexGrow: 1,
        mx: theme.spacing(8),
        borderRadius: theme.shape.borderRadius,
        overflow: "hidden",
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ mx: theme.spacing(2), width: "3rem" }}>
            <LinearChip />
          </Box>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              sx={{ width: "100%" }}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setSearchValue(event.target.value)
              }
            />
          </Search>
          <Typography
            variant="subtitle1"
            noWrap
            component="div"
            sx={{
              flexGrow: 0,
              display: { xs: "none", sm: "block" },
              mx: theme.spacing(2),
            }}
          >
            Create A Game
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
