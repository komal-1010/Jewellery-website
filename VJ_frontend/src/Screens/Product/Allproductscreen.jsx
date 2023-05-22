import React from "react";
import { useContext } from "react";
import Footer from "../../Components/Footer/Footer";
import Navigation from "../../Components/Navigation/Navigation";
import Allproduct from "../../Components/Product/Allproduct";
import { UserContext } from "../../Components/Product/UserContext";
 

const AllproductScreen = () => {
  
  return (               
      <div>
        <Navigation/>
        <Allproduct />
        <Footer/>
      </div>  
     
  );
};

export default AllproductScreen;
