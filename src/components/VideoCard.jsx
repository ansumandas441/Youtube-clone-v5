import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoChannelUrl,
  demoVideoTitle,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  // console.log(videoId, snippet);
  return (
    <Card sx={{ xs: "100%", sm: "350px", md: "339px" }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "350px", md: "339px" }, height: 181 }}
        ></CardMedia>
      </Link>
      <CardContent sx={{ backgroundColor: "#000", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <div
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "19rem",
            }}
          >
            <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </div>
          <Typography variant="subtitle2" color="#AAAAAA">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle
              sx={{ fontSize: 14, color: "#AAAAAA", ml: "3px", mt: "2px" }}
            ></CheckCircle>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
