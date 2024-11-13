import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import { NavLink } from "react-router-dom";
import { NavHashLink as NavLink } from "react-router-hash-link";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : "80vw" }}
      role="presentation"
    >
      <List className="drawer-list">
        <ListItem
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>BITOTSAV</h1>
        </ListItem>
        {[
          "Home",
          "About",
          "Event",
          "Schedule",
          "Register",
          "TEAMS",
          "Contact",
        ].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={toggleDrawer("left", false)}
              sx={{ justifyContent: "center", m: 2 }}
            >
              <NavLink
                to={
                  text === "Register" ? "/register" : `/#${text.toLowerCase()}`
                }
                className="nav-link-drawer"
                smooth
              >
                {text}
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key="left">
        <Button onClick={toggleDrawer("left", true)}>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Button>
        <Drawer
          anchor="left"
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          style={{ zIndex: "3" }}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
