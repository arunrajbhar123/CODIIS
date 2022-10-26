import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { sessionUser } from "./../redux/action";

const Home = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state);
  useEffect(() => {
    dispatch(sessionUser(token));
  }, []);
  
  return <div>Home</div>;
};
export default Home;
