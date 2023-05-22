import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import bg from "../../img/Jwellary/4.png";
import { Category, Translate } from "@mui/icons-material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Getcategorydata } from "../../API/Category/Category";
import { useEffect } from "react";
import { IMG_URL } from "../../MIS/Global";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Getproductdata } from "../../API/Product/Product";

let tabledata = [];
const Globalproduct = ({ data }) => {
  const navigate = useNavigate();
  const navigateTocategory = () => {
    navigate("/category");
  };

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
        {/* <span
            style={{ fontSize: "15px", margin: "10px" }}
          >
            Browse through your favourite categories. We've got them all!
          </span> */}

        {/* <Grid item sx={1.8} md={0.9} style={{display:"flex",flexDirection:"column", justifyContent:"space-evenly",alignItems:"center", height:"100px", width:"150px",   margin:"10px", borderRadius:"10px", backgroundColor:"pink", marginTop:"-8px"}}><Category style={{fontSize:"40px"}} onClick={navigateTocategory} />
        <span style={{fontSize:"10px", fontWeight:"bold", margin:"5px"}}>All Category</span>
        </Grid>     */}

        {data.data?.map((element) => {
          let img = JSON.parse(element.imgdata);
          let price = JSON.parse(element.pricedetail);
          price = price[0].fromprice;
          // let imglink = IMG_URL + img[0].imglink;
          let imglink = "http://192.168.29.140:4000/" + img[0].imglink;
          return (
            <Grid
              item
              md={2.5}
              fullWidth
              sx={{
                //   // marginBottom: "10px",
                // border: "1px solid lightgray",
                // borderRadius: "5px",
                boxShadow: "0px 4px 6px 0px rgba(0, 0, 0, 0.3)",
                width: "80%",
                margin: 2,
                
                // cursor: "pointer",
                //  box-shadow: 0 0 15px #bebebe24;
                // overflow: "hidden",
                border: 0.5,
                borderColor: "#DAD9D8",
                borderRadius: 3,
                position: "relative",
                overflow:"hidden",
                cursor:"pointer"
              }}
              className="productdiv"             
            >
              <Link
                to="/productdetail"
                state={{
                  from: { prodid: element.prodid },
                }}
                style={{ textDecoration: "none", color: "black"}}
              
              >
                <div
                  style={{
                    backgroundColor: "#fff",
                    height: 300,
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderTopLeftRadius: "5px",
                    borderTopRightRadius: "5px",
                  }}
                >
                  <img
                    src={imglink}
                    alt=""
                    style={{
                      height: 300,
                      width: "100% ",
                      objectFit: "cover",
                      backgroundRepeat: "no-repeat",
                      // margin: "10px",
                      // borderTopLeftRadius: "5px",
                      // borderTopRightRadius: "5px",
                    }}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: "#fff",
                    marginBottom: 10,
                    padding: 10,

                    // height: "auto",
                    // width: "100%",
                    // display: "flex",
                    // justifyContent: "center",
                    // alignItems: "left",
                    // flexDirection: "column",
                  }}
                  className="productdetail"
                >
                  <div
                    style={{
                      marginBottom: 10,
                      height: 50,
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      width: "80%",
                    }}
                  >
                    <span
                      style={{
                        color: "#000000",
                        fontSize: 18,
                        fontWeight: "bold",
                      }}
                    >
                      {element.title}
                    </span>
                  </div>
                  <div style={{ marginBottom: 10, borderTop: "" }}>
                    <span
                      style={{
                        fontSize: "15px",
                        fontWeight: "500",
                        marginBottom: 10,
                      }}
                    >
                      Start from ₹{price}
                    </span>
                  </div>
                  <div style={{ marginBottom: 10 }}>
                    <span
                      style={{
                        fontSize: "15px",
                        // margin: "3px",

                        color: "darkred",
                      }}
                    >
                      {element.gender} | {element.flag} | {element.catgname}
                    </span>
                  </div>
                  <Button
                  className="btn"
                    variant="outlined"
                    style={{
                      border: "1px solid darkred",
                      color: "black",
                      // backgroundColor: "white",
                      textAlign: "center",
                      width: "100%",
                      margin: "auto",
                      // marginBottom:"5px"
                    }}
                  >
                    Explore More
                  </Button>
                </div>
                <div
                  className="tag"
                  style={{
                    width: "auto",
                    display: "flex",

                    alignItems: "center",
                    position: "absolute",
                    top: 0,
                    height: 40,
                    width: 170,
                    backgroundColor: "red",

                    // marginLeft: 5,
                    zIndex: 999,
                    marginTop: 20,
                    clipPath:
                      "polygon(100% 0%, 90% 50%, 100% 100%, 0 100%, 0 50%, 0 2%)",
                  }}
                >
                  <span
                    className="tagheading"
                    style={{
                      padding: 15,
                      color: "white",
                      textTransform: "uppercase",
                    }}
                  >
                    {element.flag == "Regular" ? "" : element.flag}
                  </span>
                </div>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
export default Globalproduct;
