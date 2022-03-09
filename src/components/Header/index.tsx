import { Avatar, Box, Divider, Theme } from "@mui/material";
import type { ReactElement } from "react";
import { NextLinkComposed } from "../Link";

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
          src="/img/avatar.jpg"
          imgProps={{ sx: { zIndex: -1 } }}
          sx={{
            width: "10rem",
            height: "10rem",
            border: 2,
            borderColor: "text.secondary",
            boxShadow: (theme: Theme) =>
              `0 0 ${theme.spacing(1)} ${theme.palette.grey["900"]} inset`,
          }}
        />
      </NextLinkComposed>
      <Divider sx={{ flex: 1, borderColor: "text.primary" }} />
    </Box>
  );
}

export default Header;
