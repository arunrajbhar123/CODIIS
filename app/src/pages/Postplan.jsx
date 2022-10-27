import {
  Box,
  Input,
  Text,
  Grid,
  FormControl,
  FormLabel,
  Select,
  Button,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postPlanList,
  getPlanList,
  postPlanDeleteList,
} from "./../redux/action";
const Postplan = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const { plan } = useSelector((state) => state);
  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(getPlanList());
  }, []);

  const handleSubmit = () => {
    const benefits = form?.benefits?.split(",");
    const data = {
      name: form.name,
      price: form.price,
      type_month_year: form.type_month_year,
      benefits: benefits,
      type: form.type,
    };
    dispatch(postPlanList(data));
  };

  return (
    <>
      <Box w={["100%", "80%", "60%"]} p={25} m="auto">
        <Box p={25} w={["100%", "80%", "60%"]} m={"auto"}>
          <Text fontSize={25} pb={5}>
            Enter plan{" "}
          </Text>
          <Grid gap={5}>
            <Input
              placeholder="Enter Name"
              name="name"
              onChange={(e) => handleForm(e)}
            />
            <Input
              placeholder={`Enter 3 to 4 point and separate by comma`}
              name="benefits"
              onChange={(e) => handleForm(e)}
            />
            <Input
              placeholder="Enter Price"
              name="price"
              onChange={(e) => handleForm(e)}
            />
            <Input
              placeholder="Enter type eg. basic"
              name="type"
              onChange={(e) => handleForm(e)}
            />
            <FormControl onChange={(e) => handleForm(e)}>
              <FormLabel>Type of Plan</FormLabel>
              <Select name="type_month_year" placeholder="Select country">
                <option value="month">Month</option>
                <option value="year">Year</option>
              </Select>
            </FormControl>
          </Grid>
          <Button mt="5" onClick={() => handleSubmit()}>
            Submit
          </Button>
        </Box>
      </Box>
      <TableDetails data={plan} />
    </>
  );
};
export default Postplan;

const TableDetails = ({ data }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(postPlanDeleteList(id));
  };
  return (
    //     name
    // price
    // type_month_year
    // benefits
    // type
    <TableContainer p="5">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Plan name</Th>
            <Th>benefits</Th>
            <Th>price</Th>
            <Th>type_month_year</Th>
            <Th>type</Th>
            <Th>edit</Th>
            <Th>delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.length &&
            data.map((el, index) => (
              <Tr key={index}>
                <Td>{el.name}</Td>
                <Td maxWidth="325px" noOfLines={1}>
                  {el.video}
                </Td>
                <Td noOfLines={1} maxWidth="325px">
                  {el?.benefits[0]}
                  <br />
                  {el?.benefits[1]}
                  <br />
                  {el?.benefits[2]}
                </Td>
                <Td>{el.price}</Td>
                <Td>{el.type_month_year}</Td>
                <Td>{el.type}</Td>
                <Td>
                  <Button>Edit</Button>{" "}
                </Td>

                <Td>
                  <Button
                    colorScheme={"red"}
                    onClick={() => handleDelete(el._id)}
                  >
                    Delete
                  </Button>{" "}
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
