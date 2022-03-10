import Link, { NextLinkComposed } from "../Link";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import {
  MouseEvent as ReactMouseEvent,
  ReactElement,
  SyntheticEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { LinkProps } from "next/link";
import { useRouter } from "next/router";

interface ILinkTabProps {
  to: LinkProps["href"];
  label?: string;
}
function LinkTab(props: ILinkTabProps): ReactElement {
  return (
    <Tab {...props} component={NextLinkComposed} sx={{ minWidth: "12ch" }} />
  );
}

const links: ILinkTabProps[] = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  // { label: "CV", to: "/cv" },
  { label: "Contact", to: "/contact" },
];

export default function NavTabs() {
  const [value, setValue] = useState(0);

  const handleChange = useCallback(
    (_event: SyntheticEvent<Element, Event>, newValue: number) => {
      setValue(newValue);
    },
    []
  );

  const router = useRouter();
  useEffect(() => {
    setValue(
      links.findIndex(
        ({ to }) =>
          router.pathname.split("/")[1] === to.toString().split("/")[1]
      )
    );
  }, [router.pathname]);

  return (
    <Box
      component="nav"
      sx={{
        width: "100%",
        position: "sticky",
        top: 0,
        borderBottom: 1,
        borderBottomColor: "divider",
        backgroundColor: "background.default",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="navigation tabs"
        centered
      >
        {links.map((link) => (
          <LinkTab key={link.label} {...link} />
        ))}
      </Tabs>
    </Box>
  );
}
