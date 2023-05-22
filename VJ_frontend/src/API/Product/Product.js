
import { BASE_URL } from "../../MIS/Global";
import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
// import Loader from "../Componants/Loader/Loader";



export const Getproductdata = async (data) => {
    let ret = {};
    var config = {
    method: "post",
    url:BASE_URL+"getproductdata",
    // url: "http://192.168.29.140:4000/api/getproductdata" ,
    headers: {
    "Content-Type": "application/json",
    },
    data: data,
    };
    await axios(config)
    .then(function(response) {
    // ReactDOM.render(<Loader bal={false}></Loader>, document.getElementById("root1"));
    ret = response.data;
    if (ret.code == 200) {
    ret = { msg: ret.msg, code: 200, data: ret.data };
    return ret;
    } else if (ret.code == 400) {
    ret = { msg: ret.msg, code: 400 };
    return ret;
    } else {
    ret = { msg: "something went wrong! please try again ", code: 500 };
    return ret;
    }
    })
    .catch(function(error) {
    // ReactDOM.render(<Loader bal={false}></Loader>, document.getElementById("root1"));
    ret = { msg: "something went wrong! please try again ", code: 500 };
    return ret;
    });
    return ret;
    };
    
export const signindata = async (data) => {
      // alert(JSON.stringify(data))
      if (data.mob.length < 10) {
          return { msg: "Enter Valid Mobile Number", code: 100,id:"mob" };
        }
      if (data.passwd.length <= 0) {
          return { msg: "Enter Valid Password", code: 100,id:"passwd" };
        }
      let ret = {};
      var config = {
      method: "post",
      url: BASE_URL + "singin",
   
      headers: {
      "Content-Type": "application/json",
      },
      data: data,
      };
      await axios(config)
      .then(function(response) {
      // ReactDOM.render(<Loader bal={false}></Loader>, document.getElementById("root1"));
      ret = response.data;
      if (ret.code == 200) {
      ret = { msg: ret.msg, code: 200, data: ret.data };
      return ret;
      } else if (ret.code == 400) {
      ret = { msg: ret.msg, code: 400 };
      return ret;
      } else {
      ret = { msg: "something went wrong! please try again ", code: 500 };
      return ret;
      }
      })
      .catch(function(error) {
      // ReactDOM.render(<Loader bal={false}></Loader>, document.getElementById("root1"));
      ret = { msg: "something went wrong! please try again ", code: 500 };
      return ret;
      });
      return ret;
      };
    