import { mdiGitlab } from "@mdi/js";
import Icon from "@mdi/react";
import { Email, GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";
import type { ReactElement, ReactNode } from "react";
import IconLink, { IIconLinkProps } from "../IconLink";

const links: IIconLinkProps[] = [
  {
    name: "Twitter",
    href: "https://twitter.com/im_aspen",
    children: <Twitter />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aspen-thompson/",
    children: <LinkedIn />,
  },
  {
    name: "GitHub",
    href: "https://github.com/imaspen",
    children: <GitHub />,
  },
  {
    name: "GitLab",
    href: "https://gitlab.com/imaspen",
    children: <Icon path={mdiGitlab} size={1} />,
  },
  // {
  //   name: "Email",
  //   href: "mailto:hi@imaspen.dev",
  //   children: <Email />,
  // },
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
            <IconLink key={props.name} {...props} />
          ))}
        </Box>
        <Typography variant="button">&copy; Aspen Thompson, 2022</Typography>
      </Box>
    </Box>
  );
}

export default Footer;
