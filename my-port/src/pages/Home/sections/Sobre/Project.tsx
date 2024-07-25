import React from "react";
import { Grid, Typography } from "@mui/material";
import AppSlider from "./SliderProjects/AppSlider";


export const Project: React.FC = () => {
  return (
    
      <Grid
      paddingBlockEnd={10}
      bgcolor={"black"} >
        <Typography
        color={"white"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={90}
      fontSize={"40px"}
      id="sobre"
        >Sobre</Typography>
        <AppSlider />
      </Grid>
  );
};

export default Project;
