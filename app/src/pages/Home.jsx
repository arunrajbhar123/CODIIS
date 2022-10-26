import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { sessionUser } from "./../redux/action";
import { Box } from "@chakra-ui/react";
import Admin from "./Admin";
import User from "./User";

const Home = () => {
  const dispatch = useDispatch();
  const { token, data } = useSelector((state) => state);
  useEffect(() => {
    dispatch(sessionUser(token));
  }, []);

  return <Box>{data?.role === "admin" ? <Admin /> : <User />}</Box>;
};
export default Home;
