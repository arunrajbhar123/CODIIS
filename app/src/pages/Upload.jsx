import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { getVideo, videoUpload, getPlanList } from "../redux/action.js";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Upload() {
  const [form, setForm] = useState({});
  const { video, plan } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [numberPlan, SetNumberPlan] = useState([]);
  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSumit = () => {
    dispatch(videoUpload(form));
  };
  // https://drive.google.com/uc?id=1jn9h5ZdPSEz3_RcIkYutHoBCKJ-_VEZb&%20export=download
  function updateImageDisplay(e) {
    // e.preventDefault()
    e.preventDefault();
    let input = document.querySelector("input[type=file]");
    const curFiles = input.files;
    console.log(input.files);
    for (const file of curFiles) {
      console.log(file);
    }
  }
  useEffect(() => {
    dispatch(getVideo());

    dispatch(getPlanList());

    plan?.map((el) => {
      numberPlan.push(el._id);
    });
  }, []);

  return (
    <Box position={"relative"}>
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 1, md: 20 }}>
          <Heading
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          ></Heading>
          <Stack
            textalign={"center"}
            align={"center"}
            justify={"center"}
          ></Stack>
        </Stack>
        <Stack
          bg={"gray.50"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              Upload Video
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              ></Text>
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}></Text>
          </Stack>
          <Box as={"form"} mt={10}>
            <Stack spacing={4}>
              <Input
                placeholder="Title"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                name="title"
                onChange={(e) => handleForm(e)}
              />
              <Input
                placeholder="Description"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                name="description"
                onChange={(e) => handleForm(e)}
              />

              <FormControl onChange={(e) => handleForm(e)}>
                <Select name="plan_id" placeholder="plan name">
                  <option value={numberPlan[0]}>Hobby</option>
                  <option value={numberPlan[1]}>Growth</option>
                  <option value={numberPlan[2]}>Scale</option>
                </Select>
              </FormControl>

              <Input
                placeholder="Video link"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                name="video"
                onChange={(e) => handleForm(e)}
              />
              <Text>or</Text>

              <Input
                type="file"
                fontFamily={"heading"}
                bg={"gray.200"}
                p={1}
                color={"gray.800"}
                accept="video/*"
                name="video"
                onChange={(e) => handleForm(e)}
              />
            </Stack>
            <Button
              fontFamily={"heading"}
              mt={8}
              w={"full"}
              bgGradient="linear(to-r, red.400,pink.400)"
              color={"white"}
              _hover={{
                bgGradient: "linear(to-r, red.400,pink.400)",
                boxShadow: "xl",
              }}
              onClick={() => handleSumit()}
            >
              Submit
            </Button>
          </Box>
          form
        </Stack>
      </Container>
      <Blur
        position={"absolute"}
        top={-10}
        left={-10}
        style={{ filter: "blur(70px)" }}
      />

      <TableDetails data={video} />
    </Box>
  );
}

export const Blur = (props: IconProps) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};

const TableDetails = ({ data }) => {
  return (
    <TableContainer p="5">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>title</Th>
            <Th>video link</Th>
            <Th>description</Th>
            <Th>Author</Th>
            <Th>edit</Th>
            <Th>delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.length &&
            data.map((el, index) => (
              <Tr key={index}>
                <Td>{el.title}</Td>
                <Td maxWidth="325px" noOfLines={1}>
                  {el.video}
                </Td>
                <Td noOfLines={1} maxWidth="325px">
                  {el.description}
                </Td>
                <Td>{el.admin_name}</Td>
                <Td>
                  <Button>Edit</Button>
                </Td>
                <Td>
                  <Button colorScheme={"red"}>Delete</Button>
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
