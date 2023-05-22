import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import bg from "../../img/Jwellary/132423_gold-chain-light-weight-gold-necklace-sets-with.png";
import { Category, Translate } from "@mui/icons-material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Getcategorydata } from "../../API/Category/Category";
import { useEffect } from "react";
import { IMG_URL } from "../../MIS/Global";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";
import { Getproductdata } from "../../API/Product/Product";
import Globalproduct from "../GlobalProduct/Globalproduct";
let tabledata = [];
const Cotegory = () => {
  const navigate = useNavigate();
  const navigateTocategory = () => {
    navigate("/category");
  };
  const [data, setData] = useState([]);
  const location=useLocation();
  const from=location?.state;
  const getData = async (data) => {
    tabledata = await Getproductdata(data);
    // alert(JSON.stringify(tabledata))
    setData(tabledata);
  };

  useEffect(() => {
    let res=from;
    // alert(JSON.stringify(res));
     
        getData({flag:"Trending",limit:6});
    
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        spacing={0}
        sx={{
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "20px",
          marginBottom: "20px",
          width: "90vw",
        }}
      >
        <Grid
          item
          sx={12}
          md={12}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            marginBottom: "15px",
          }}
        >
          <span
            style={{
              fontSize: "35px",
              fontWeight: "bold",
              margin: "5px",
              color: "darkred",
            }}
          >
            Trending Product
          </span>
          <span style={{ fontSize: "15px", margin: "5px" }}>
            Browse through your favourite categories. We've got them all!
          </span>
          <div
            style={{ height: "2px", background: "black", width: "100%" }}
          ></div>
        </Grid>
        <Globalproduct data={data}/>
        {/* <Grid item sx={1.8} md={0.9} style={{display:"flex",flexDirection:"column", justifyContent:"space-evenly",alignItems:"center", height:"100px", width:"150px",   margin:"10px", borderRadius:"10px", backgroundColor:"pink", marginTop:"-8px"}}><Category style={{fontSize:"40px"}} onClick={navigateTocategory} />
        <span style={{fontSize:"10px", fontWeight:"bold", margin:"5px"}}>All Category</span>
        </Grid>     */}

        
      </Grid>
    </div>
  );
};

export default Cotegory;
