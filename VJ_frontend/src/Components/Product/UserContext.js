import React, { createContext, useEffect, useState } from "react";
import { Getsliderdata } from "../../API/Slider/Slider";
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  let tabledata=[];
     const [search, setSearch] = useState("");
    const [bannerdata, setBannerdata] = useState([]);
    const [logindata, setLogindata] = useState([]);
    const [chathide, setChathide] = useState("none");
    const getBanner = async () => {
        tabledata =   await Getsliderdata({btype:"Banner"});
        // alert(JSON.stringify(tabledata))
        setBannerdata(tabledata);
   
    };
    useEffect(() => {
      getBanner();
    
    }, [])
    
    const values={
      search,setSearch,bannerdata,setBannerdata,logindata,setLogindata,chathide,setChathide
    }
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
export default UserContextProvider;

