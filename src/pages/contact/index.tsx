import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ReactElement } from "react";
import { links } from "../../components/Footer";
import Link from "../../components/Link";

function Contact(): ReactElement {
  const theme = useTheme();
  const isMediumWidth = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        gap: 4,
        marginY: 4,
        marginX: "auto",
        width: "100%",
        maxWidth: "sm",
      }}
    >
      <Typography
        component="h1"
        variant={isMediumWidth ? "h2" : "h3"}
        align="center"
      >
        Get in touch
      </Typography>
      <form action="https://formspree.io/f/xayvjzae" method="POST">
        <Typography component="h2" variant={"h5"} gutterBottom>
          Send me a message
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "stretch",
          }}
        >
          <TextField
            id="email-input"
            name="email"
            label="Your Email"
            type="email"
          />
          <TextField
            id="message-input"
            name="message"
            label="Message"
            multiline
            minRows={4}
          />
          <Button variant="contained" type="submit">
            Send
          </Button>
        </Box>
      </form>
      <Box>
        <Typography component="h2" variant={"h5"} gutterBottom>
          Find me elsewhere
        </Typography>
        {links.map((link) => (
          <Typography key={link.name}>
            <Box component="span" sx={{ display: "inline-flex", gap: 1 }}>
              {link.children} {link.name}:{" "}
              <Link href={link.href}>{link.label}</Link>
            </Box>
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

export default Contact;
