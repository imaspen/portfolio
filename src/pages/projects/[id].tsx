import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { ReactElement } from "react";
import ReactMarkdown from "react-markdown";
import Project, { Projects } from "../../models/Project";

interface IProjectProps {
  project: Project;
}

function Project({ project }: IProjectProps): ReactElement {
  const theme = useTheme();
  const isMediumWidth = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      component="article"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
      }}
    >
      <Box
        component="div"
        sx={{
          width: "100%",
          minHeight: "20vw",
          position: "relative",
          display: "grid",
          gridTemplate: "1fr / 1fr",
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
        }}
      >
        <Box zIndex={-1}>
          <Image
            src={project.headerImage}
            alt={`${project.name} Header`}
            layout="fill"
            objectFit="cover"
            objectPosition={project.headerPosition ?? "center center"}
          />
        </Box>
        <Box
          marginBottom={2}
          marginTop={4}
          alignSelf="end"
          justifySelf="center"
        >
          <Typography
            component="h1"
            variant={isMediumWidth ? "h2" : "h3"}
            align="center"
          >
            {project.name}
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            whiteSpace="pre-line"
            marginX={4}
          >
            {project.shortDescription}
          </Typography>
        </Box>
      </Box>
      {typeof project.longDescription === "string" &&
        project.longDescription.length > 0 && (
          <Box maxWidth="md" width="100%" marginX={4} marginBottom={4}>
            <ReactMarkdown
              components={{
                h1: ({ node, ...props }) => (
                  <Typography
                    component="h2"
                    variant="h5"
                    gutterBottom
                    {...props}
                  />
                ),
                p: ({ node, ...props }) => <Typography paragraph {...props} />,
              }}
            >
              {project.longDescription}
            </ReactMarkdown>
          </Box>
        )}
    </Box>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = Projects.map((project) => ({ params: { id: project.id } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = (context) => {
  return {
    props: { project: Projects.find(({ id }) => context.params?.id === id) },
  };
};

export default Project;
