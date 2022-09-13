import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { borderRight } from "@mui/system";
import { SideBar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  //Used to have the categories for API search
  const [selectedCategory, setSelectedCategory] = useState("New");
  //used to retain the data returned by the fetchFromAPI
  const [videos, setVideos] = useState([]);

  //used to reload the videos when page re-renders,then is used as fetchFromAPI is an async function
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&query=${selectedCategory}`).then(
      (data) => {
        setVideos(data.items);
      }
    );
    //dependency arrray is used as it recalls this function whenever a new selectedcategory calls
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      {/* change */}
      <Box
        sx={{
          height: "200vh",
          borderRight: "1px solid #3d3d3d",
          px: { px: 0, md: 0 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        {/* <Typography className='copyright' variant="body2" sx={{mt:1.5,color:'#fff'}}>
          
        </Typography> */}
      </Box>
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
          {selectedCategory}
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
