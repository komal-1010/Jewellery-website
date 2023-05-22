import { BASE_URL } from "../../MIS/Global";
import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";

export const Getsliderdata = async (data) => {
  let ret = {};
  var config = {
    method: "post",
    url: BASE_URL + "getbannermasterdata",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
   
    await axios(config)
    .then(function (response) {
      // ReactDOM.render(<Loader bal={false}></Loader>, document.getElementById("root1"));
      new Promise((resolve, reject) => {
        
      
      ret = response.data;
      resolve(ret)
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
    })
    .catch(function (error) {
      // ReactDOM.render(<Loader bal={false}></Loader>, document.getElementById("root1"));
      ret = { msg: "something went wrong! please try again ", code: 500 };
      return ret;
    });
    return ret;
};
