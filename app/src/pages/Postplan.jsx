import {
  Box,
  Input,
  Text,
  Grid,
  FormControl,
  FormLabel,
  Select,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
const Postplan = () => {
  const [form, setForm] = useState({});
  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const benefits = form.benefits.split(",");
    const data = {
      name: form.name,
      price: form.price,
      type_month_year: form.type_month_year,
      benefits: benefits,
      type: form.type,
    };
   
  };
  // name
  // price
  // type_month_year
  // benefits
  // type
  return (
    <Box w="50%" p={25} m="auto">
      <Box p={25} w={"60%"} m={"auto"}>
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
  );
};
export default Postplan;
