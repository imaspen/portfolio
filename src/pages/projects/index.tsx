import { Box, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";
import Head from "next/head";
import { ReactElement } from "react";
import ProjectCard from "../../components/ProjectCard";
import { Projects as ProjectsList } from "../../models/Project";

function Projects(): ReactElement {
  const theme = useTheme();
  const isMediumWidth = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        marginY: 4,
      }}
    >
      <Head>
        <title>I&rsquo;m Aspen - Projects</title>
      </Head>
      <Box>
        <Typography
          component="h1"
          variant={isMediumWidth ? "h2" : "h3"}
          align="center"
        >
          Past Work
        </Typography>
        <Typography align="center" component="h2" variant="h5" maxWidth="lg">
          A selection of my favorite projects.
        </Typography>
      </Box>
      <Box
        component="article"
        sx={(theme: Theme) => ({
          paddingX: 4,
          gap: 4,
          maxWidth: "xl",
          width: "100%",
          display: "grid",
          gridTemplateRows: "auto",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateAreas: '"main aside"',
          [theme.breakpoints.down("lg")]: {
            gridTemplateColumns: "1fr 1fr",
          },
          [theme.breakpoints.down("md")]: {
            gridTemplateColumns: "1fr",
            gridTemplateAreas: '"main" "aside"',
          },
        })}
      >
        {ProjectsList.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Box>
    </Box>
  );
}

export default Projects;
