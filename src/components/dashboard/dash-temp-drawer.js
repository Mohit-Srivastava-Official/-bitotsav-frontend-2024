import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ListItemIcon } from "@mui/material";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import InfoIcon from "@mui/icons-material/Info";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";

export default function DashTempDrawer() {
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
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : "80vw",
      }}
      role="presentation"
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ListItem
          key="logo"
          sx={{
            mt: 10,
            justifyContent: "center",
            alignItems: "center",
            color: "#ccc9e7",
          }}
        >
          <h1 className="custom-heading-dashboard text-black text-3xl tracking-wide">
            BITOTSAV'24
          </h1>
        </ListItem>
        <ListItem
          key="info"
          disablePadding
          onClick={toggleDrawer("left", false)}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ListItemButton sx={{ justifyContent: "center" }}>
            <NavLink
              className="dashboard-link"
              to="/dashboard"
              sx={{ color: "black" }}
            >
              <ListItemIcon>
                <InfoIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Your Info" />
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem
          key="pass"
          disablePadding
          onClick={toggleDrawer("left", false)}
        >
          <ListItemButton sx={{ justifyContent: "center" }}>
            <NavLink className="dashboard-link" to="/dashboard/pass">
              <ListItemIcon>
                <QrCode2Icon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Your Pass" />
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem
          key="event"
          disablePadding
          onClick={toggleDrawer("left", false)}
        >
          <ListItemButton sx={{ justifyContent: "center" }}>
            <NavLink className="dashboard-link" to="/dashboard/events">
              <ListItemIcon>
                <EmojiEventsIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Your Events" />
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem
          key="team"
          disablePadding
          onClick={toggleDrawer("left", false)}
        >
          <ListItemButton sx={{ justifyContent: "center" }}>
            <NavLink className="dashboard-link" to="/dashboard/team">
              <ListItemIcon>
                <GroupsIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Your Team" />
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem
          key="home"
          disablePadding
          onClick={toggleDrawer("left", false)}
        >
          <ListItemButton sx={{ justifyContent: "center" }}>
            <NavLink className="dashboard-link" to="/">
              <ListItemIcon>
                <HomeIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </NavLink>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key="left">
        <Button onClick={toggleDrawer("left", true)}>
          <IconButton style={{ background: "white", borderRadius: "50%" }}>
            <MenuIcon color="white" />
          </IconButton>
        </Button>
        <Drawer
          anchor="left"
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
