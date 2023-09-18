import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { ReactElement } from "react";
import IProject from "../../models/Project";
import { NextLinkComposed } from "../Link";

export interface IProjectCardProps {
  project: IProject;
}

function ProjectCard({ project }: IProjectCardProps): ReactElement {
  return (
    <Card>
      <CardActionArea
        LinkComponent={(props) => (
          <NextLinkComposed to={props.href} {...props} />
        )}
        href={`/projects/${project.id}`}
      >
        <CardMedia sx={{ height: "10rem" }} title="Project Image">
          <Box position="relative" height="100%" width="100%">
            <Image
              src={project.headerImage}
              alt={`${project.name} Header`}
              layout="fill"
              objectFit={project.headerFit ?? "cover"}
              objectPosition={project.headerPosition ?? "center center"}
            />
          </Box>
        </CardMedia>
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h6" component="h4">
          {project.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          whiteSpace="pre-line"
        >
          {project.shortDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          component={NextLinkComposed}
          to={`/projects/${project.id}`}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
