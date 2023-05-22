import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navigation from "../../Components/Navigation/Navigation";
import Productdetail from "../../Components/Product/Productdetail";



const ProductdetailScreen = () => {
  return (
    <div>
      <Navigation/>
      <Productdetail />
      <Footer/>
    </div>
  );
};

export default ProductdetailScreen;
