import { Box, Text, Flex, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFriendsList } from "../redux/action.js";
const Friends = () => {
  const dispatch = useDispatch();
  const { userList, user } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getFriendsList());
  }, []);

  return (
    <Box w="50%" p={"25"} fontSize={25} m={"auto"}>
      <Text pb="5">List of Friends</Text>
      <hr />
      {userList?.length &&
        userList.map((el, index) => (
          <Flex justify={"space-between"} pt={"5"} key={index}>
            <Flex gap={1}>
              <Text>{el.firstname}</Text>
              <Text>{el.lastname}</Text>
            </Flex>
            <Button>Add Friend</Button>
          </Flex>
        ))}
    </Box>
  );
};
export default Friends;
