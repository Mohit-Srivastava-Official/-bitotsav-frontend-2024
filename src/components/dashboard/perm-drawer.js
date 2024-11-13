import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import InfoIcon from "@mui/icons-material/Info";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import DashTempDrawer from "./dash-temp-drawer";

const drawerWidth = 300;

export default function DashboardDrawer(props) {
  const navigate = useNavigate();
  return (
    <>
      <DashTempDrawer className="mobile-dash md:hidden" />
      <Drawer
        className="web-drawer"
        sx={{
          mr: 5,
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
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
            <h1 className="custom-heading-dashboard text-black text-4xl tracking-wide">
              BITOTSAV'24
            </h1>
          </ListItem>
          <ListItem
            key="info"
            disablePadding
            onClick={() => navigate("/dashboard")}
          >
            <ListItemButton>
              {/* <ListItemIcon>
									<InfoIcon sx={{ color: "#ccc9e7" }} />
								</ListItemIcon> */}
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem
            key="events-home"
            disablePadding
            onClick={() => navigate("/events")}
          >
            <ListItemButton>
              {/* <ListItemIcon>
									<InfoIcon sx={{ color: "#ccc9e7" }} />
								</ListItemIcon> */}
              <ListItemText primary="Events" />
            </ListItemButton>
          </ListItem>
          <ListItem
            key="events-home"
            disablePadding
            onClick={() => navigate("/dashboard/team")}
          >
            <ListItemButton>
              {/* <ListItemIcon>
									<InfoIcon sx={{ color: "#ccc9e7" }} />
								</ListItemIcon> */}
              <ListItemText primary="Your Team" />
            </ListItemButton>
          </ListItem>
          <ListItem
            key="pass"
            disablePadding
            onClick={() => navigate("/dashboard/pass")}
          >
            <ListItemButton>
              {/* <ListItemIcon>
									<QrCode2Icon sx={{ color: "#ccc9e7" }} />
								</ListItemIcon> */}
              <ListItemText primary="Event Pass" />
            </ListItemButton>
          </ListItem>

          {/* <ListItem
						key="event"
						disablePadding
						style={{
							alignItems: "center",
						}}
						// sx={{ width: "50%", margin: "auto" }}
					>
						<ListItemButton>
							<NavLink
								className="dashboard-link"
								to="/dashboard/events"
							>
								<ListItemIcon>
									<EmojiEventsIcon
										sx={{ color: "#ccc9e7" }}
									/>
								</ListItemIcon>
								<ListItemText primary="Registered Events" />
							</NavLink>
						</ListItemButton>
					</ListItem> */}
          {/* <ListItem
						key="team"
						disablePadding
						style={{
							alignItems: "center",
						}}
						// sx={{ width: "100%", margin: "auto" }}
					>
						<ListItemButton>
							<NavLink
								className="dashboard-link"
								to="/dashboard/team"
							>
								<ListItemIcon>
									<GroupsIcon sx={{ color: "#ccc9e7" }} />
								</ListItemIcon>
								<ListItemText primary="Your Team" />
							</NavLink>
						</ListItemButton>
					</ListItem> */}
          <ListItem key="home" disablePadding onClick={() => navigate("/")}>
            <ListItemButton>
              {/* <ListItemIcon>
									<HomeIcon sx={{ color: "#ccc9e7" }} />
								</ListItemIcon> */}
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Outlet />
    </>
  );
}
