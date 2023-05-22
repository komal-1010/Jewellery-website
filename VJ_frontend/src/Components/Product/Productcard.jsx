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
const Productcard = ({ data }) => {
  // alert(JSON.stringify(data));
  let img = JSON.parse(data?.imgdata);
  let price = JSON.parse(data?.pricedetail);
  price = price[0]?.fromprice;
  let imglink = IMG_URL + img[0].imgpath;
  // let imglink = "http://192.168.29.140:4000/" + img[0].imglink;

  return (
    <div 
    style={{position:"relative"}}>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "2px 4px 6px 2px rgba(0, 0, 0, 0.3)",
        // margin: 2,
        border: 0.5,
        borderColor: "#DAD9D8",
        borderRadius: 3,
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <Link
        to="/productdetail"
        state={{
          from: { prodid: data?.prodid },
        }}
        style={{ textDecoration: "none", color: "black" }}
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
              objectFit: "contain",
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
              {data?.title}
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
              {data?.gender} | {data.flag} | {data.catgname}
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
        
      </Link>
      
    </div>
    <div
          className="tag"
          style={{
            width: "auto",
            display: data?.flag == "Regular" ? "none" : "flex",

            alignItems: "center",
            position: "absolute",
            top: 0,
            height: 40,
            width: 170,
            backgroundColor: "darkred",

            // marginLeft: 5,
            // zIndex: 999,
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
                        {data?.flag}

          </span>
        </div></div>

  );
};
export default Productcard;
