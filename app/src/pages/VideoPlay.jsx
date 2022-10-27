import { Box } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getSingleVideo } from './../redux/action';
const VideoPlay = () => {
  const dispatch = useDispatch();
  const id = useParams();
  useEffect(() => {
    dispatch(getSingleVideo(id));

  }, []);

  return (
    <Box>
      <video>
        <source />
      </video>
    </Box>
  );
};
export default VideoPlay;
