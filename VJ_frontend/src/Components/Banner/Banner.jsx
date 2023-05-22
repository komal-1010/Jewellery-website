import React from "react";
import Grid from "@mui/material/Grid";
import bg from "../../img/bg.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useContext } from "react";
import { UserContext } from "../Product/UserContext";
import { IMG_URL } from "../../MIS/Global";
import { useEffect } from "react";
const Banner = ({imgurl}) => {
  const { bannerdata } = useContext(UserContext);


  // // let img = JSON.parse(bannerdata?.data[index]?.imgdata);
  // //  let imglink = IMG_URL + img[0].imglink;
  // useEffect(() => {
  //     if(!bannerdata==null){
  //       let img = JSON.parse(bannerdata?.data[index]?.imgdata);
  //       alert(img)
  //     }
  // }, [bannerdata])
  

  return (
    <div>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={12}
          sm={12}
          style={{
            display: "flex",
            justifyContaint: "center",
            alignItems: "center",
          }}
        >
          <img
            src={imgurl}
            style={{ padding: "30px", height: "60vh", width: "100vw" ,}}
          ></img>
        </Grid>
      </Grid>
    </div>
  );
};

export default Banner;
