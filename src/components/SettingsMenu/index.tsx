import {
  Close,
  DarkMode,
  LightMode,
  Replay,
  Settings,
  SettingsBrightness,
  TextDecrease,
  TextIncrease,
} from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Theme,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ReactElement, useCallback, useContext, useState } from "react";
import ThemeContext, { DisplayMode } from "../../contexts/ThemeContext";

function SettingsMenu(): ReactElement {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const themeContext = useContext(ThemeContext);

  const [open, setOpen] = useState<boolean>(false);

  const toggleOpen = useCallback(() => {
    setOpen((curr) => !curr);
  }, []);
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleChangeDisplayMode = useCallback(
    (_event, newValue: DisplayMode | null) => {
      if (newValue === null) return;
      themeContext.setDisplayMode(newValue);
    },
    [themeContext]
  );

  return (
    <Box sx={{ position: "absolute", top: 0, right: 0, margin: 1 }}>
      <IconButton onClick={toggleOpen}>
        <Settings id="settings-button" />
      </IconButton>
      <Drawer
        anchor="right"
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: { maxWidth: "100%", width: theme.breakpoints.values["sm"] },
        }}
      >
        <Box>
          <Box
            padding={2}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>Settings</Typography>
            <IconButton onClick={handleClose}>
              <Close fontSize="small" />
            </IconButton>
          </Box>
          <Divider />
          <Box marginX={2}>
            <Typography
              variant="button"
              component="h1"
              marginTop={2}
              gutterBottom
            >
              Display Mode
            </Typography>
            <ToggleButtonGroup
              fullWidth
              exclusive
              aria-label="display mode"
              size="small"
              color="primary"
              value={themeContext.displayMode}
              onChange={handleChangeDisplayMode}
              orientation={isSmall ? "vertical" : "horizontal"}
            >
              <ToggleButton value="Light" aria-label="light mode">
                <LightMode fontSize="small" sx={{ marginRight: 1 }} /> Light
              </ToggleButton>
              <ToggleButton value="System" aria-label="match system">
                <SettingsBrightness fontSize="small" sx={{ marginRight: 1 }} />{" "}
                System
              </ToggleButton>
              <ToggleButton value="Dark" aria-label="dark mode">
                <DarkMode fontSize="small" sx={{ marginRight: 1 }} /> Dark
              </ToggleButton>
            </ToggleButtonGroup>
            <Typography
              variant="button"
              component="h1"
              marginTop={2}
              gutterBottom
            >
              Font Size
            </Typography>
            <ButtonGroup
              fullWidth
              aria-label="font size"
              variant="contained"
              orientation={isSmall ? "vertical" : "horizontal"}
            >
              <Button
                aria-label="decrease text size"
                onClick={themeContext.decreaseFontSize}
              >
                <TextDecrease fontSize="small" sx={{ marginRight: 1 }} />{" "}
                Decrease
              </Button>
              <Button
                aria-label="reset text size"
                onClick={() => themeContext.setFontSize(14)}
              >
                <Replay fontSize="small" sx={{ marginRight: 1 }} /> Default
              </Button>
              <Button
                aria-label="increase text size"
                onClick={themeContext.increaseFontSize}
              >
                <TextIncrease fontSize="small" sx={{ marginRight: 1 }} />{" "}
                Increase
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}

export default SettingsMenu;
