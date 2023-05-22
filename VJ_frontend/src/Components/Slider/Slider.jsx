import React from "react";
import Grid from "@mui/material/Grid";
import bg from "../../img/bg.png"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
const Slider = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8} md={8} sm={12}>
          <h1>Slider</h1>
        </Grid>
      <Grid item xs={12} md={12} sm={12 }style={{display:"flex",justifyContaint:"center", alignItems:"center"}}>
        <button class="btn" style={{ margin:"10px",height:"150px", width:"60px"}}><ArrowBackIosNewIcon/></button>
<img src={bg} style={{ padding:"5px",height:"60vh",width:"100vw"}}></img>
<button class="btn" style={{ margin:"10px",height:"150px", width:"60px"}}><ArrowForwardIosIcon/></button>

        </Grid>
      </Grid>
    </div>
  );
};

export default Slider;
