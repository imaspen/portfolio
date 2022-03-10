import { Avatar, Box, Divider, Theme } from "@mui/material";
import Image from "next/image";
import type { ReactElement } from "react";
import { NextLinkComposed } from "../Link";
import AvatarImage from "../../../public/img/avatar.jpg";

function Header(): ReactElement {
  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginY: 2,
        width: "100%",
      }}
    >
      <Divider sx={{ flex: 1, borderColor: "text.primary" }} />
      <NextLinkComposed to="/">
        <Avatar
          imgProps={{ sx: { zIndex: -2 } }}
          sx={{
            width: "20vmin",
            height: "20vmin",
            border: 2,
            borderColor: "text.primary",
            backgroundColor: "transparent",
            boxShadow: (theme: Theme) =>
              `0 0 ${theme.spacing(1)} ${theme.palette.grey["900"]} inset`,
          }}
        >
          <Box
            component="span"
            zIndex={-1}
            position="relative"
            width="100%"
            height="100%"
          >
            <Image src={AvatarImage} alt="Profile Picture" layout="fill" />
          </Box>
        </Avatar>
      </NextLinkComposed>
      <Divider sx={{ flex: 1, borderColor: "text.primary" }} />
    </Box>
  );
}

export default Header;
