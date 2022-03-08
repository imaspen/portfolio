import { Waves } from "@mui/icons-material";
import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Box
        component="header"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 2,
          }}
        >
          <Divider sx={{ flex: 1, borderColor: "text.primary" }} />
          <Avatar
            src="/img/avatar.jpg"
            sx={{
              width: 256,
              height: 256,
              border: 1,
              borderColor: "text.primary",
            }}
          />
          <Divider sx={{ flex: 1, borderColor: "text.primary" }} />
        </Box>
        <Typography variant="h2" align="center">
          Hi, I&rsquo;m Aspen
        </Typography>
        <Typography variant="h6" align="center">
          Software Engineer | Gameplay Programmer | Web Developer
        </Typography>
      </Box>
    </div>
  );
};

export default Home;
