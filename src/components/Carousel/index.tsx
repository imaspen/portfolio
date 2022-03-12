import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Card, CardMedia } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MobileStepper from "@mui/material/MobileStepper";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { ReactElement, useState } from "react";
import SwipeableViews from "react-swipeable-views";

export interface ICarouselEntry {
  label: string;
  path: string;
  type: "image" | "video";
}

export interface ICarouselProps {
  entries: ICarouselEntry[];
}

function Carousel({ entries }: ICarouselProps): ReactElement {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = entries.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  if (entries.length === 0) return <></>;

  return (
    <Card sx={{ flexGrow: 1 }}>
      <CardMedia
        sx={{
          display: "block",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          style={{ height: "100%" }}
          containerStyle={{ height: "100%" }}
        >
          {entries.map((step, index) => (
            <div key={step.label} style={{ width: "100%", height: "100%" }}>
              {Math.abs(activeStep - index) <= 2 ? (
                <div>
                  {step.type === "image" && (
                    <Box
                      component="img"
                      src={step.path}
                      alt={step.label}
                      sx={{
                        objectFit: "cover",
                        height: "100%",
                        width: "100%",
                        aspectRatio: "16 / 9",
                      }}
                    />
                  )}
                  {step.type === "video" && (
                    <Box sx={{ aspectRatio: "16 / 9" }}>
                      <iframe
                        width="100%"
                        height="100%"
                        src={step.path}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </Box>
                  )}
                  <Typography
                    component="div"
                    variant="caption"
                    align="center"
                    padding={1}
                    width="100%"
                  >
                    {step.label}
                  </Typography>
                </div>
              ) : null}
            </div>
          ))}
        </SwipeableViews>
      </CardMedia>
      {entries.length > 1 && (
        <MobileStepper
          sx={{ backgroundColor: "transparent" }}
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
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      )}
    </Card>
  );
}

export default Carousel;
