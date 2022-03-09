import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { ReactElement } from "react";

function ProjectCard(): ReactElement {
  return (
    <Card>
      <CardMedia sx={{ height: "10rem" }} title="Project Image">
        <Box position="relative" height="100%" width="100%">
          <Image
            src="/img/avatar.jpg"
            alt="Project Image"
            layout="fill"
            objectFit="cover"
          />
        </Box>
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h6" component="h4">
          Project
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description of project. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Justo donec enim diam vulputate ut pharetra sit amet.
          Lectus quam id leo in vitae turpis. Porttitor massa id neque aliquam
          vestibulum morbi. Amet dictum sit amet justo donec enim diam vulputate
          ut.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
