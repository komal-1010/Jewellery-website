import React from "react";
import Grid from "@mui/material/Grid";
import bg from "../../img/Jwellary/engagement-ring-gold-jewellery-wedding-ring-gold-rings-transparent-background-437f0f12e38d0f4317e87d409f1e2045.png";
import img from "../../img/jw.png";
import image from "../../img/Jwellary/gold_necklace_Wedding_jewellery.png";

import Button from "@mui/material/Button";

import { border, width } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { IMG_URL } from "../../MIS/Global";
import { useEffect } from "react";
import { Getproductdata } from "../../API/Product/Product";
import { useState } from "react";
let tabledata = [];

const ProductSlider = () => {
  const navigate = useNavigate();
  const navigateToproduct = () => {
    navigate("/product");
  };
  const [data, setData] = useState([]);

  const getData = async () => {
    tabledata = await Getproductdata();
    // alert(JSON.stringify(tabledata))
    setData(tabledata);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Grid container spacing={2} sx={{ marginTop: "10px" }}>
        <Grid item xs={6} md={6}>
          <span style={{ fontSize: "25px", fontWeight: "bold", margin: "8px" }}>
            Product Name
          </span>
        </Grid>
        <Grid item xs={6} md={6}>
          <Button
            style={{ float: "right", margin: "10px" }}
            variant="contained"
            onClick={navigateToproduct}
          >
            View All
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={0}
        sx={{
          backgroundColor: "whitesmoke",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {data.data?.map((element) => {
          let img = JSON.parse(element.imgdata);
          let imglink = IMG_URL + img[0].imgpath;
          return (
            <Grid
              item
              xs={5.5}
              md={1.8}
              sm={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "10px",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                width: "200px",
                height: "320px",
                padding: "10px",
              }}
            >
              <img
                src={imglink}
                alt=""
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "fill",
                  backgroundRepeat: "no-repeat",
                  margin: "10px",
                }}
              />
              <span
                style={{ fontSize: "20px", fontWeight: "bold", margin: "8px" }}
              >
                Product Name
              </span>
              <span
                style={{ fontSize: "18px", fontWeight: 500, margin: "5px" }}
              >
                Price 500
              </span>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ProductSlider;
