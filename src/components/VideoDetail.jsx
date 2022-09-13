import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { Stack, Box, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`videos?part=snippet,relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  // //De-structuring the object snippet
  // const {snippet} = videoDetail;
  return (
    <Box minHeight="92vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "88px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" p={2}>
              {videoDetail?.snippet?.title.slice(0, 60)}
            </Typography>

            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#FFF" }}
              py={1}
              px={1}
            >
              <Typography
                variant={{ sx: "subtitle2", md: "h6" }}
                color="#AAAAAA"
                pl={2}
              >
                {videoDetail?.snippet?.channelTitle}
                <CheckCircle
                  sx={{ fontSize: 14, color: "#AAAAAA", ml: "3px", mt: "2px" }}
                ></CheckCircle>
              </Typography>

              {/* can be linked to the chanelDetail */}
              <Stack
                direction="row"
                gap="20px"
                alignItems="center"
                sx={{ flexDirection: "row-reverse" }}
              >
                <Typography
                  color="#fff"
                  variant="body3"
                  fontSize={12}
                  sx={{ opacity: 0.7 }}
                >
                  {parseInt(
                    videoDetail?.statistics?.viewCount
                  ).toLocaleString()}{" "}
                  views
                </Typography>
                <Typography
                  color="#fff"
                  variant="body3"
                  fontSize={12}
                  sx={{ opacity: 0.7 }}
                >
                  {parseInt(
                    videoDetail?.statistics?.likeCount
                  ).toLocaleString()}{" "}
                  likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
      <Box
        px={2}
        py={{ md: 1, xs: 5 }}
        justifyContent="center"
        alignItems="center"
      >
        {/* <Videos videos={videos} /> */}
        New
      </Box>
    </Box>
  );
};

export default VideoDetail;
