import { FileDownload } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const theme = useTheme();
  const isMediumWidth = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        marginY: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Head>
        <title>I&rsquo;m Aspen - CV</title>
      </Head>
      <Typography
        component="h1"
        variant={isMediumWidth ? "h2" : "h3"}
        align="center"
        gutterBottom
      >
        Curriculum Vitae
      </Typography>
      <Button
        variant="contained"
        href="/Curriculum_Vitae.pdf"
        target="_blank"
        referrerPolicy="no-referrer"
        startIcon={<FileDownload />}
        sx={{ marginBottom: 4 }}
      >
        Download PDF
      </Button>
      <Box maxWidth="md">
        <Typography component="h2" variant="h5" align="center" gutterBottom>
          About Me
        </Typography>
        <Typography paragraph>
          Software engineer specialising in web and mobile app development, with
          experience working remotely using Agile principles at both startup and
          enterprise level, where I have been progressing quickly.
        </Typography>
        <Typography paragraph>
          A high achiever during University, I obtained multiple awards,
          including first place at the Huddersfield Santander &amp; Enterprise
          Game Jam, two second place awards and one first place award at the
          Game Republic Student Showcase 2022, and the course Student of the
          Year award.
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Typography component="h2" variant="h5" align="center" gutterBottom>
          Previous Work
        </Typography>
        <Typography component="h3" variant="h6">
          Full Stack Developer, Post Office Ltd, 2022 - Present
        </Typography>
        <Typography component="h3" variant="h6">
          Web Developer, Beaconsoft Ltd, 2020 - 2022
        </Typography>
        <Typography component="h3" variant="h6">
          Apprentice Full Stack Web Developer, SNT Group, 2015 - 2016
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Typography component="h2" variant="h5" align="center" gutterBottom>
          Education
        </Typography>
        <Typography component="h3" variant="h6">
          University of Huddersfield, 2018 - 2022
        </Typography>
        <Typography>
          Studying Computer Science with Games Programming, BSc (Hons), 1st
          Class
        </Typography>
        <Typography marginBottom={2}>
          Course Best Student Award, Winner
        </Typography>
        <Typography component="h3" variant="h6">
          The Open University, 2017 - 2018
        </Typography>
        <Typography marginBottom={2}>Computing and IT, CertHE</Typography>
        <Typography component="h3" variant="h6">
          Heckmondwike Grammar School, 2009 - 2014
        </Typography>
        <Typography>13 GCSEs at A* to C</Typography>
        <Typography>A* Mathematics, A English Language</Typography>
        <Divider sx={{ marginY: 2 }} />
        <Typography component="h2" variant="h5" align="center" gutterBottom>
          Technical Skills
        </Typography>
        <Typography component="h3" variant="h6">
          Main Languages
        </Typography>
        <Typography marginBottom={2}>
          JavaScript, TypeScript, Swift, Java, C, C++, C#, Go, Python, PHP,
          HTML, CSS, SQL
        </Typography>
        <Typography component="h3" variant="h6">
          Frameworks
        </Typography>
        <Typography marginBottom={2}>
          React, React Native, Next.JS, Jest, Redux, SwiftUI, MySQL, GraphQL,
          JUnit
        </Typography>
        <Typography component="h3" variant="h6">
          Tools
        </Typography>
        <Typography>Git, Jira, Bash, Zsh, WSL</Typography>
        <Typography component="h3" variant="h6">
          Concepts
        </Typography>
        <Typography marginBottom={2}>
          Agile, Kanban, CI/CD, TDD, requirement analysis
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
