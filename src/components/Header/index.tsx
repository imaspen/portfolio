import { Menu } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Theme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { ReactElement, useState } from "react";
import AvatarImage from "../../../public/img/avatar.jpg";
import { NextLinkComposed } from "../Link";
import NavTabs from "../NavTabs";
import SettingsMenu from "../SettingsMenu";

function Header(): ReactElement {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <Box
        component="header"
        sx={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          display: "grid",
          gridTemplateRows: "1fr auto 1fr",
          gridTemplateColumns: "1fr auto 1fr",
          position: isSmall ? "sticky" : null,
          top: 0,
          zIndex: (theme: Theme) => theme.zIndex.appBar + 1,
        }}
      >
        <Box
          sx={{
            alignSelf: "stretch",
            gridRow: 1,
            gridColumn: "1 / 4",
            bgcolor: "background.default",
            marginTop: -2,
            zIndex: -3,
          }}
        />
        <Divider
          sx={{
            borderColor: "text.primary",
            gridRow: 2,
            gridColumn: "1 / 4",
            zIndex: -2,
          }}
        />
        <Box sx={{ gridRow: "1 / 4", gridColumn: 2, padding: 2 }}>
          <NextLinkComposed to="/">
            <Avatar
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
                position="relative"
                width="100%"
                height="100%"
                zIndex={-1}
              >
                <Image
                  src={AvatarImage}
                  alt="Profile Picture"
                  layout="fill"
                  priority
                />
              </Box>
            </Avatar>
          </NextLinkComposed>
        </Box>
        <Box
          sx={{
            gridRow: 1,
            gridColumn: 1,
            justifySelf: "start",
            margin: 1,
            display: isSmall ? null : "none",
          }}
        >
          <IconButton onClick={() => setNavOpen(true)}>
            <Menu />
          </IconButton>
        </Box>
        <Box
          sx={{
            gridRow: 1,
            gridColumn: 3,
            justifySelf: "end",
            margin: 1,
          }}
        >
          <SettingsMenu />
        </Box>
      </Box>
      <NavTabs open={navOpen} setOpen={setNavOpen} />
    </>
  );
}

export default Header;
