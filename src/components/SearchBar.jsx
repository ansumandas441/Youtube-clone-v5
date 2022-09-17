// rafce
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import React from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  //e is the event
  const handleSubmit = (e) => {
    //Usually submitting form makes the page reload, and to prevent this default behaviour
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      // elevation={0}
      // onSubmit={() => {}}
      onSubmit={handleSubmit}
      sx={{
        //borderRadius: 20,
        border: "1px solid #313131",
        // pl: 1,
        pt: 0.1,
        pb: 0.1,
        boxShadow: "none",
        mr: { sm: 5 },
        backgroundColor: "#000",
      }}
    >
      <input
        color="#000"
        className="search-bar"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{ p: "0px", color: "#3d3d3d", background: "#000" }}
      >
        <Search />
      </IconButton>

      {/* Something */}
    </Paper>
  );
};

export default SearchBar;
