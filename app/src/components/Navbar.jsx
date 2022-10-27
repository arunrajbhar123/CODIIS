import { ReactNode, useEffect } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import MainRoute from "./../pages/MainRoute";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Link as RouterLink } from "react-router-dom";
import { sessionUser } from "./../redux/action";
import { useDispatch } from "react-redux";
import { logoutFun } from "../redux/action.js";
var Links = ["plan", "friends"];

const NavLink = ({ children }) => (
  <RouterLink to={`/${children}`}>{children}</RouterLink>
);
export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuth, data, token } = useSelector((state) => state);
  const dispatch = useDispatch();
  if (data?.role === "admin") {
    Links = ["upload"];
  }
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      if (!data?.firstname) {
        dispatch(sessionUser(token));
      }
    }
  }, []);

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>Stream Video</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            {isAuth ? (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Text bg="red" w={35} h={35} p={1} borderRadius={25}>
                    {data?.firstname[0]?.toUpperCase()}
                  </Text>
                </MenuButton>
                <MenuList>
                  <Text>Hi, {data?.firstname}</Text>
                  <MenuItem>Email: {data?.email}</MenuItem>
                  <MenuItem>Role: {data?.role}</MenuItem>
                  <Button
                    colorScheme="red"
                    mt="5"
                    onClick={() => {
                      dispatch(logoutFun());
                    }}
                  >
                    Logout
                  </Button>
                </MenuList>
              </Menu>
            ) : (
              <Flex gap={25}>
                <Text onClick={() => navigate("/login")}>Login</Text>
                <Text onClick={() => navigate("/signup")}>Signup</Text>
              </Flex>
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box>
        <MainRoute />
      </Box>
    </>
  );
}
