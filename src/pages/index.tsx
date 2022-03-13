import {
  Box,
  Button,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Link, { NextLinkComposed } from "../components/Link";
import ProjectCard from "../components/ProjectCard";
import { FavoriteProjects } from "../models/Project";

const Home: NextPage = () => {
  const theme = useTheme();
  const isMediumWidth = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginY: 4,
        gap: 4,
      }}
    >
      <Head>
        <title>I&rsquo;m Aspen - Home</title>
      </Head>
      <Box>
        <Typography
          component="h1"
          variant={isMediumWidth ? "h2" : "h3"}
          align="center"
        >
          Hi, I&rsquo;m Aspen
        </Typography>
        <Typography align="center" component="h2" variant="h5">
          Software Engineer{isMediumWidth ? " | " : <br />}Games Programmer
          {isMediumWidth ? " | " : <br />}Web Developer
        </Typography>
      </Box>
      <Box
        component="article"
        maxWidth="xl"
        sx={(theme: Theme) => ({
          marginX: 2,
          gap: 4,
          display: "grid",
          gridTemplateRows: "auto",
          gridTemplateColumns: "2fr 1fr",
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
        <Box
          component="section"
          gridArea="main"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography component="h3" variant="h6" gutterBottom>
            Top Projects
          </Typography>
          <Box
            sx={(theme: Theme) => ({
              gap: 2,
              display: "grid",
              gridTemplateRows: "auto",
              gridTemplateColumns: "1fr",
              [theme.breakpoints.between("sm", "md")]: {
                gridTemplateColumns: "repeat(2, 1fr)",
              },
              [theme.breakpoints.up("lg")]: {
                gridTemplateColumns: "repeat(2, 1fr)",
              },
            })}
          >
            {FavoriteProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Box>
          <Button
            variant="contained"
            component={NextLinkComposed}
            to="/projects"
            sx={{ alignSelf: "center" }}
          >
            See More
          </Button>
        </Box>
        <Box component="aside" gridArea="aside">
          <Typography component="h3" variant="h6">
            About Me
          </Typography>
          <Typography paragraph gutterBottom>
            Thanks for dropping by! I&rsquo;m a highly versatile developer
            currently based out of West Yorkshire, but with a willingness to
            relocate for the right role.
          </Typography>
          <Typography paragraph gutterBottom>
            Although I am profficient in a multitude of languages, from the
            likes of TypeScript through to C++ (full list available in{" "}
            <Link href="/cv">my CV</Link>), the specific language has never been
            my main concern. I&rsquo;m much more interested in the type of
            project.
          </Typography>
          <Typography paragraph gutterBottom>
            Whilst web development has been my primary interest for much of my
            development history, like many developers my age, I actually got
            started using Java to create Minecraft mods. Since then I have kept
            my passion for games, and soon will be graduating from the
            University of Huddersfield with a BSc (Hons) in Computer Science
            with Games Programming.
          </Typography>
          <Typography paragraph gutterBottom>
            I&rsquo;m open to roles in both the web development and gaming
            sectors, and have a substantial skillset to bring to both. For more
            information on my technical skills, please refer to{" "}
            <Link href="/cv">my CV</Link>.
          </Typography>
          <Typography paragraph marginBottom={0}>
            In my free time, I am a passionate sports fan and life long Wolves
            supporter, and I play as a goalie for our local hockey team. I can
            often be found playing video games, some of my favorites including
            Overwatch, Football Manager, and racing simulators.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
