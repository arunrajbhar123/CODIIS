import { Box, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Videobox = ({ title, video, _id }) => {
  return (
    <Box w="100%" boxShadow="md" rounded="md" bg="white" pb={2}>
      <video
        style={{ borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }}
      >
        <source src={video} />
      </video>
      <Text textAlign={"start"} p="2" pl="0">
        {title}
      </Text>
      <Button colorScheme="blue">
        <Link to={`/videoplay/${_id}`}>Watch Now</Link>
      </Button>

      <Button colorScheme="blue" ml={2}>
        !
      </Button>
    </Box>
  );
};
export default Videobox;
