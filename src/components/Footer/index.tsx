import { mdiGitlab } from "@mdi/js";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, SvgIcon, Typography } from "@mui/material";
import type { ReactElement, ReactNode } from "react";
import IconLink from "../IconLink";

interface ILink {
  name: string;
  label: string;
  href: string;
  children: ReactNode;
}

export const links: ILink[] = [
  {
    name: "LinkedIn",
    label: "Aspen Thompson",
    href: "https://www.linkedin.com/in/aspen-thompson/",
    children: <LinkedIn />,
  },
  {
    name: "GitHub",
    label: "imaspen",
    href: "https://github.com/imaspen",
    children: <GitHub />,
  },
  {
    name: "GitLab",
    label: "imaspen",
    href: "https://gitlab.com/imaspen",
    children: (
      <SvgIcon>
        <path d={mdiGitlab} />
      </SvgIcon>
    ),
  },
];

function Footer(): ReactElement {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: 1,
        borderTopColor: "divider",
        padding: 2,
        width: "100%",
      }}
    >
      <Box
        sx={{
          maxWidth: "xl",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          {links.map((props) => (
            <IconLink key={props.name} name={props.name} href={props.href}>
              {props.children}
            </IconLink>
          ))}
        </Box>
        <Typography variant="button">&copy; Aspen Thompson, 2022</Typography>
      </Box>
    </Box>
  );
}

export default Footer;
