import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { categories } from "../utils/constants";
// const variable = ""
// const size = useWindowDimensions();
const width = window.width;
const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  // if(window.width>916){
  //   return null;
  // }
  return (
    <div className="mydiv">
      <Stack
        direction="column" //Incase of  big window: column and small window row use direction:"row" and uncomment flex direction
        sx={{
          overflowY: "auto",
          height: { sx: "auto", md: "95%" },
          position: "fixed", //for fixed position
          background: "#181818",
          // flexDirection: { md: "column" },
          // display: window.width<900?'normal':'none'
        }}
      >
        {categories.map((category) => (
          <button
            className="category-btn"
            onClick={() => setSelectedCategory(category.name)}
            // alignContent="center"
            style={{
              background: "#181818",
              color: "white",
            }}
          >
            <Stack direction="column">
              <span alignItems="center">{category.icon} </span>
              <span>{category.name}</span>
            </Stack>
          </button>
        ))}
      </Stack>
    </div>
  );
};

export default SideBar;
