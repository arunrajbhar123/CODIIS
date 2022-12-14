import { ReactNode, useEffect, useState } from "react";
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { getPlanList, BuyPlanList } from "../redux/action.js";
function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

export default function PlanDetails() {
  const { plan, data } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlanList());
  }, []);

  const handleBuy = (id) => {
    dispatch(BuyPlanList({ plan_id: id }));
  };
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Plans that fit your need
        </Heading>
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        {plan?.length &&
          plan.map((el, index) => (
            <PriceWrapper key={index}>
              <Box py={4} px={12}>
                <Text fontWeight="500" fontSize="2xl">
                  {el.name}
                </Text>
                <HStack justifyContent="center">
                  <Text fontSize="3xl" fontWeight="600">
                    ₹
                  </Text>
                  <Text fontSize="5xl" fontWeight="900">
                    {el.price}
                  </Text>
                  <Text fontSize="3xl" color="gray.500">
                    /{el.type_month_year}
                  </Text>
                </HStack>
              </Box>
              <VStack py={4} borderBottomRadius={"xl"}>
                <List spacing={3} textAlign="start" px={12}>
                  {el.benefits.map((ds, index) => (
                    <ListItem key={index}>
                      <ListIcon as={FaCheckCircle} color="green.500" />
                      {ds}
                    </ListItem>
                  ))}
                </List>
                <Box w="80%" pt={7}>
                  <Button
                    w="full"
                    colorScheme="red"
                    variant={index !== 1 ? "outline" : null}
                    onClick={() => handleBuy(el._id)}
                  >
                    Buy now
                  </Button>
                </Box>
              </VStack>
            </PriceWrapper>
          ))}
      </Stack>
    </Box>
  );
}
