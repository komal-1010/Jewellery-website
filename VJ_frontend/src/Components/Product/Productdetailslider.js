import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Getsliderdata } from '../../API/Slider/Slider';
import { useEffect } from 'react';
import { useState } from 'react';
import { IMG_URL } from '../../MIS/Global';
import { Getproductdata } from '../../API/Product/Product';
import ImageZoom  from "react-image-zooom";
import Base from "../../CSS/Base.css"
// import ReactImageZoom from "react-image-zoom";


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



function Productdetailslider(props) {
  let tabledata=[];
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [maxSteps,setMaxsteps] = useState(0);

  const [data, setData] = useState([]);
  const[imgdata,setImgdata]=useState([]);
  const getData = async () => {
    
      tabledata = await Getproductdata({prodid:props.prodid});
      // alert(JSON.stringify(tabledata))
      setData(tabledata)
      
      setImgdata(JSON.parse(tabledata.data[0].imgdata));
      setMaxsteps(JSON.parse(tabledata.data[0].imgdata).length);
    };
  
    useEffect(() => {
      getData();
    }, []);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  
  const width=window.innerWidth;
  const props1 = {
       
     
      
     };
  return (
    <Box sx={{ flexGrow: 1 }}>
     
    <SwipeableViews
      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
      index={activeStep}
      onChangeIndex={handleStepChange}
      enableMouseEvents
      autoPlay={false}

    >
      
      {imgdata?.map((step, index) => {
                    
          // let img = JSON.parse(step.imglink);
          // let imglink = "http://192.168.29.140:4000/"+ step.imglink;
          let imglink = IMG_URL + step.imgpath;

         
       return(
       
       <div key={step.prodid}>
          
          {Math.abs(activeStep - index) <= 2 ? (       
        
            <Box
               sx={{
                 display:"cover",
                objectFit:"fill",
                width:"90%" ,
                      
               }}
              >
                <ImageZoom
                {...props1}  
              src={imglink}
            >
           </ImageZoom>
              </Box>
          ) : null}
        </div>
)})}
    </SwipeableViews>
    <MobileStepper
      steps={maxSteps}
      position="static"
      activeStep={activeStep}
      nextButton={
        <Button
          size="small"
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
        >
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
   </Box>
  );
}

export default Productdetailslider;
