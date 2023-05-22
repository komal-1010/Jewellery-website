import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Getsliderdata } from "../../API/Slider/Slider";
import { useEffect } from "react";
import { useState } from "react";
import { IMG_URL } from "../../MIS/Global";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function ImageSlider() {
  let tabledata = [];
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [maxSteps, setMaxsteps] = useState(0);

  const [data, setData] = useState([]);

  const getData = async () => {
    tabledata = await Getsliderdata({ btype: "Slider" });
    // alert(JSON.stringify(tabledata))
    setData(tabledata);
    setMaxsteps(tabledata?.data.length);
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
  const width = window.innerWidth;
  return (
    <Box sx={{ flexGrow: 1, }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {data.data?.map((step, index) => {
          let img = JSON.parse(step.imgdata);
          let imglink = IMG_URL + img[0].imglink;

          return (
            <div key={step.bid}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  className="sliderheight"
                  component="img"
                  sx={{
                    // height: "30vh",
                    display: "cover",
                    objectFit: "fill",
                    width: "100%",
                  }}
                  src={imglink}
                  // alt={step.label}
                />
              ) : null}
            </div>
          );
        })}
      </AutoPlaySwipeableViews>
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
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
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

export default ImageSlider;
