import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { borderRight } from "@mui/system";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchFeed = () => {
  //used to retain the data returned by the fetchFromAPI
  const [videos, setVideos] = useState([]);
  //The useparamas set the searchTerm defined in the App.js
  const { searchTerm } = useParams();
  //used to reload the videos when page re-renders,then is used as fetchFromAPI is an async function
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
    //dependency arrray is used as it recalls this function whenever a new selectedcategory calls
  }, [searchTerm]);

  return (
    <Box
      p={2}
      pl={16}
      pt={3.3}
      sx={{ overflowY: "auto", height: "200vh", flex: 2 }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{ color: "white", fontSize: 15.8 }}
      >
        Search Results For:{" "}
        <span style={{ color: "#F31503" }}>{searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
