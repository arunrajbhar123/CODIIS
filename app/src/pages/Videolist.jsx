import React from "react";
import { Box, Grid, } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVideo } from "../redux/action.js";
import Videobox from "./../components/Videobox";
const Videolist = () => {
  const { video } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideo());
  }, []);
  
  return (
    <Grid
      templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
      gap={6}
      pt={5}
      p={4}
    >
      {video?.length &&
        video.map((el, index) => <Videobox key={index} {...el} />)}
    </Grid>
   
  );
};

export default Videolist;
