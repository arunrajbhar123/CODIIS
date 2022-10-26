import { Box } from "@chakra-ui/react";
import PlanDetails from "./../components/PlanDetails";
import { useSelector } from "react-redux";
const User = () => {
  const { data } = useSelector((state) => state);
  return (
    <Box>
      <PlanDetails />
    </Box>
  );
};
export default User;
