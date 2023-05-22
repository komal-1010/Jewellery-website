
import { BASE_URL } from "../../MIS/Global";
import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
// import Loader from "../Componants/Loader/Loader";



export const Enquiryinsert = async (data) => {
    //  alert(JSON.stringify(data))
    if (data.descr.length < 20) {
        return { msg: "Require Minimumn 20 Character Description", code: 100,id:"descr" };
      }
    let ret = {};
  
    var config = {
    method: "post",
    url:BASE_URL+"insertenquirydata",
    // url: "http://192.168.29.249:4000/api/" + "insertenquirydata",
 
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