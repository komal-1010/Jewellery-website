import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import bg from "../../img/women.jpg";
import men from "../../img/men.webp";
import kid from "../../img/kid.jpeg";
import { Category, Translate } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { Getcategorydata } from "../../API/Category/Category";
import { useEffect } from "react";
import { IMG_URL } from "../../MIS/Global";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
let tabledata = [];
const Cotegory = () => {
  const navigate = useNavigate();
  const navigateTocategory = () => {
    navigate("/category");
  };
  const [data, setData] = useState([]);

  const getData = async () => {
    tabledata = await Getcategorydata();
    // alert(JSON.stringify(tabledata))
    setData(tabledata);
  };

  useEffect(() => {
    getData();
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
              margin: "10px",
              color: "darkred",
            }}
          >
            Shop By Gender
          </span>
          <span style={{ fontSize: "15px", margin: "10px" }}>
            Browse through your favourite categories. We've got them all!
          </span>
          <div
            style={{ height: "2px", background: "black", width: "100%" }}
          ></div>
        </Grid>
        {/* <Grid item sx={1.8} md={0.9} style={{display:"flex",flexDirection:"column", justifyContent:"space-evenly",alignItems:"center", height:"100px", width:"150px",   margin:"10px", borderRadius:"10px", backgroundColor:"pink", marginTop:"-8px"}}><Category style={{fontSize:"40px"}} onClick={navigateTocategory} />
        <span style={{fontSize:"10px", fontWeight:"bold", margin:"5px"}}>All Category</span>
        </Grid>     */}
        {/* 
        { data.data?.map((element) => {
            let img = JSON.parse(element.imgdata);
            let imglink = IMG_URL+ img[0].imglink;
return( */}
        <Grid
          item
          xs={12}
          md={3.9}
          sm={12}
          sx={{
            margin: "5px",
            border: "1px solid lightgray",
            borderRadius: "5px",
            boxShadow: "0px 4px 6px 0px rgba(0, 0, 0, 0.3)",
          }}
        >
           <Link
            to="/product"
            state={{
              from:{gender:"female"}
                
            }} 
            style={{textDecoration:"none",color:"black"}}
          >
          <div
            style={{
              // backgroundColor: "thistle",
              height: "50vh",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderTopLeftRadius: "2px",
              borderTopRightRadius: "2px",
            }}
          >
            <img
              // src={imglink}
              src={bg}
              alt=""
              style={{
                height: "100%",
                width: "100% ",
                objectFit: "fill",
                backgroundRepeat: "no-repeat",
                margin: "15px",
                borderTopLeftRadius: "2px",
                borderTopRightRadius: "2px",
              }}
            />
          </div>
          <div
          className="gender"
            style={{
              backgroundColor: "#fff",
              height: "5vh",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomRightRadius: "2px",
              borderBottomLeftRadius: "2px",
            }}
          >
            <span
            className="gnspan"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                margin: "3px",
                color: "darkred",
              }}
            >
               Women
            </span>
            <div className="genspan"  style={{ fontSize: "16px", margin: "5px" }}>
              <span >Explore</span> 
               
                <ArrowForwardIosIcon  style={{ fontSize: "10px" }} /> 
            </div>
             
          </div>
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          md={3.9}
          sm={12}
          sx={{
            margin: "5px",
            border: "1px solid lightgray",
            borderRadius: "5px",
            boxShadow: "0px 4px 6px 0px rgba(0, 0, 0, 0.3)",
          }}
        >
           <Link
            to="/product"
            state={{
              from:{gender:"Male"}
                
            }} 
            style={{textDecoration:"none",color:"black"}}
          >
          <div
            style={{
              // backgroundColor: "thistle",
              height: "50vh",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderTopLeftRadius: "2px",
              borderTopRightRadius: "2px",
            }}
          >
            <img
              // src={imglink}
              src={men}
              alt=""
              style={{
                height: "100%",
                width: "100% ",
                objectFit: "fill",
                backgroundRepeat: "no-repeat",
                margin: "15px",
                borderTopLeftRadius: "2px",
                borderTopRightRadius: "2px",
              }}
            />
          </div>
          <div
          className="gender"
            style={{
              backgroundColor: "#fff",
              height: "5vh",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomRightRadius: "2px",
              borderBottomLeftRadius: "2px",
            }}
          >
            <span
            className="gnspan"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                margin: "3px",
                color: "darkred",
              }}
            >
               Men
            </span>
            <div className="genspan"  style={{ fontSize: "16px", margin: "5px" }}>
              <span >Explore</span> 
               
                <ArrowForwardIosIcon  style={{ fontSize: "10px" }} /> 
            </div>
             
          </div>
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          md={3.9}
          sm={12}
          sx={{
            margin: "5px",
            border: "1px solid lightgray",
            borderRadius: "5px",
            boxShadow: "0px 4px 6px 0px rgba(0, 0, 0, 0.3)",
          }}
        >
           <Link
            to="/product"
            state={{
              from:{gender:"kids"}
                
            }} 
            style={{textDecoration:"none",color:"black"}}
          >
          <div
            style={{
              // backgroundColor: "thistle",
              height: "50vh",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderTopLeftRadius: "2px",
              borderTopRightRadius: "2px",
            }}
          >
            <img
              // src={imglink}
              src={kid}
              alt=""
              style={{
                height: "100%",
                width: "100% ",
                objectFit: "fill",
                backgroundRepeat: "no-repeat",
                margin: "15px",
                borderTopLeftRadius: "2px",
                borderTopRightRadius: "2px",
              }}
            />
          </div>
          <div
          className="gender"
            style={{
              backgroundColor: "#fff",
              height: "5vh",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomRightRadius: "2px",
              borderBottomLeftRadius: "2px",
            }}
          >
            <span
            className="gnspan"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                margin: "3px",
                color: "darkred",
              }}
            >
               Kids
            </span>
            <div className="genspan"  style={{ fontSize: "16px", margin: "5px" }}>
              <span >Explore</span> 
               
                <ArrowForwardIosIcon  style={{ fontSize: "10px" }} /> 
            </div>
             
          </div>
          </Link>
        </Grid>
        {/* )
      })} */}
      </Grid>
    </div>
  );
};

export default Cotegory;
