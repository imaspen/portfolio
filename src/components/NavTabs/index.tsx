import { Close } from "@mui/icons-material";
import {
  Divider,
  IconButton,
  Menu,
  SwipeableDrawer,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { LinkProps } from "next/link";
import { useRouter } from "next/router";
import {
  Dispatch,
  ReactElement,
  SetStateAction,
  SyntheticEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { NextLinkComposed } from "../Link";

interface ILinkTabProps {
  to: LinkProps["href"];
  label?: string;
  alignStart?: boolean;
}
function LinkTab(props: ILinkTabProps): ReactElement {
  return (
    <Tab
      {...props}
      component={NextLinkComposed}
      sx={{ alignItems: props.alignStart ? "start" : null }}
    />
  );
}

const links: ILinkTabProps[] = [
  { label: "Home", to: "/" },
  { label: "Past Work", to: "/projects" },
  { label: "CV", to: "/cv" },
  { label: "Contact", to: "/contact" },
];

interface INavTabsProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function NavTabs({ open, setOpen }: INavTabsProps) {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  const [value, setValue] = useState(0);

  const handleChange = useCallback(
    (_event: SyntheticEvent<Element, Event>, newValue: number) => {
      setValue(newValue);
      setOpen(false);
    },
    [setOpen]
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

  if (!isSmall) {
    return (
      <Box
        component="nav"
        sx={{
          width: "100%",
          position: "sticky",
          top: (theme) => theme.spacing(-2),
          borderBottom: 1,
          borderBottomColor: "divider",
          backgroundColor: "background.default",
          zIndex: "appBar",
          paddingTop: 2,
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
  } else {
    return (
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        PaperProps={{
          sx: { maxWidth: "100%", width: 250 },
        }}
      >
        <Box
          padding={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography>Navigation</Typography>
          <IconButton onClick={() => setOpen(false)}>
            <Close fontSize="small" />
          </IconButton>
        </Box>
        <Divider />
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="navigation tabs"
          orientation="vertical"
          variant="fullWidth"
        >
          {links.map((link) => (
            <LinkTab key={link.label} {...link} alignStart />
          ))}
        </Tabs>
      </SwipeableDrawer>
    );
  }
}
