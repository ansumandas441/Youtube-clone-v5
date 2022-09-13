import { Box, Stack } from "@mui/system";
import React from "react";
import { VideoCard, ChannelCard, Loader } from "./";

const Videos = ({ videos }) => {
  // console.log(videos);
  if (!videos?.length) return <Loader />;
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      flexWrap={{ md: "wrap" }}
      justifyContent="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {/* {item.id.channelId && <ChannelCard channelDetail={item}  */}
          {/* {item.id.channelId && <ChannelCard channelDetail={item} />} */}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
