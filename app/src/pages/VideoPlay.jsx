import { Box, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getSingleVideo } from "./../redux/action";
const VideoPlay = () => {
  const { singleVideo } = useSelector((state) => state);
  const dispatch = useDispatch();
  const id = useParams();
  useEffect(() => {
    dispatch(getSingleVideo(id));
  }, []);

  return (
    <Box p={55}>
      <video style={{ width: "100%", height: "350px" }} controls>
        <source src={singleVideo?.video} />
      </video>
      <Box textAlign="start" textTransform="capitalize">
        <Text fontSize={35} fontWeight={"bolder"}>
          {singleVideo?.title}
        </Text>
        <Text>{singleVideo?.description}</Text>
        <Text fontWeight={"bold"}>Admin: {singleVideo?.admin_name}</Text>
      </Box>
    </Box>
  );
};
export default VideoPlay;
