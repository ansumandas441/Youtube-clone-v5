import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="flex-start"
    justifyContent="flex-start"
    spacing={40.4}
    // p={2}
    pt={0.7}
    pl={2}
    sx={{
      position: "sticky",
      background: "#202020",
      top: 0,
      // justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={60}></img>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
