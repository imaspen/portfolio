import { Avatar, Box, Divider, Link, Theme, Typography } from "@mui/material";
import type { NextPage } from "next";
import NavTabs from "../components/NavTabs";

const Home: NextPage = () => {
  return (
    <div>
      <Typography component="h1" variant="h2" align="center">
        Hi, I&rsquo;m Aspen
      </Typography>
      <Typography align="center" component="h2" variant="h5">
        Software Engineer | Games Programmer | Web Developer
      </Typography>
    </div>
  );
};

export default Home;
