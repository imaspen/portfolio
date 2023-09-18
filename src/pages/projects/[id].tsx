import {
  alpha,
  Box,
  Button,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { ReactElement } from "react";
import ReactMarkdown from "react-markdown";
import Carousel from "../../components/Carousel";
import StringIcon from "../../components/StringIcon";
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
        marginBottom: 4,
        [theme.breakpoints.down("md")]: {
          marginTop: `min(calc(-10vmin - ${theme.spacing(
            2
          )}), calc(${theme.spacing(-4)} - ${
            24 * (theme.typography.fontSize / 14)
          }px))`,
        },
      }}
    >
      <Head>
        <title>I&rsquo;m Aspen - Projects - {project.name}</title>
      </Head>
      <Box
        component="div"
        sx={{
          width: "100%",
          minHeight: "20vw",
          position: "relative",
          display: "grid",
          gridTemplate: "1fr / 1fr",
          background: (theme: Theme) =>
            `linear-gradient(to top, ${alpha(
              theme.palette.background.default,
              1
            )}, ${alpha(theme.palette.background.default, 0)})`,
        }}
      >
        <Box
          sx={{
            zIndex: -1,
            position: "relative",
            height: "100%",
            width: "100%",
            gridRow: 1,
            gridColumn: 1,
          }}
        >
          <Image
            src={project.headerImage}
            alt={`${project.name} Header`}
            layout="fill"
            objectFit={project.headerFit ?? "cover"}
            objectPosition={project.headerPosition ?? "center center"}
          />
        </Box>
        <Box
          sx={{
            marginBottom: 2,
            marginTop: 24,
            alignSelf: "end",
            justifySelf: "center",
            gridRow: 1,
            gridColumn: 1,
          }}
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
            marginX={2}
          >
            {project.shortDescription}
          </Typography>
        </Box>
      </Box>
      {project.projectLinks instanceof Array &&
        project.projectLinks.length > 0 && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingX: 2,
              gap: 2,
            }}
          >
            {project.projectLinks.map((link) => (
              <Button
                variant="contained"
                key={link.label}
                startIcon={<StringIcon iconName={link.icon} />}
                href={link.href}
                download={link.download}
                target={link.download ? "_self" : "_blank"}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        )}
      {typeof project.longDescription === "string" &&
        project.longDescription.length > 0 && (
          <Box maxWidth="md" width="100%" paddingX={2}>
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
                h2: ({ node, ...props }) => (
                  <Typography
                    component="h3"
                    variant="h6"
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
      <Box maxWidth="md" width="100%" paddingX={2}>
        <Carousel entries={project.carouselEntries} />
      </Box>
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
