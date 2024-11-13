import React, { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Fab,
  Popover,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PersonIcon from "@mui/icons-material/Person";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { useNavigate } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import PaidSharpIcon from "@mui/icons-material/PaidSharp";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CodeIcon from "@mui/icons-material/Code";

const BottomNav = () => {
  const nav = useNavigate();
  const [value, setValue] = useState("recents");
  const [anchorEl, setAnchorEl] = useState(null);
  const [showMoreTabs, setShowMoreTabs] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMoreTabsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMoreItemClick = (path) => {
    handleClose();
    nav(path);
  };

  return (
    <div>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: -12,
          right: 0,
          zIndex: 99,
        }}
        elevation={3}
      >
        <BottomNavigation
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction
            label="Schedule"
            value="schedule"
            showLabel={true}
            className="text-black font-semibold"
            sx={{ fontStyle: "!Blender-Regular" }}
            onClick={() => {
              nav("/Schedule");
            }}
            icon={<ScheduleIcon />}
          />
          <BottomNavigationAction
            label="Events"
            value="events"
            showLabel={true}
            className="text-black font-semibold"
            sx={{ fontStyle: "!Blender-Regular" }}
            icon={<EmojiEventsIcon />}
            onClick={() => {
              nav("/events");
            }}
          />
          <BottomNavigationAction
            label="Home"
            value="home"
            showLabel={true}
            className="text-black font-semibold"
            sx={{ fontStyle: "!Blender-Regular" }}
            icon={<HomeIcon />}
            onClick={() => {
              nav("/");
            }}
          />
          <BottomNavigationAction
            label="Register"
            value="register"
            showLabel={true}
            className="text-black font-semibold"
            sx={{ fontStyle: "!Blender-Regular" }}
            icon={<PersonIcon />}
            onClick={(e) => {
              nav("/register");
            }}
          />
          <BottomNavigationAction
            label="MORE"
            value="more"
            showLabel={true}
            className="text-black font-semibold"
            sx={{ fontStyle: "!Blender-Regular" }}
            icon={<AddCircleIcon />}
            onClick={handleMoreTabsClick}
          />
        </BottomNavigation>
      </Paper>

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <BottomNavigation
          sx={{ width: 85, height: 300 }}
          value={value}
          onChange={handleChange}
          className="flex flex-col justify-center items-center"
        >
          <BottomNavigationAction
            label="About"
            value="about"
            showLabel={true}
            icon={<InfoIcon />}
            className="text-black font-semibold"
            sx={{ fontStyle: "!Blender-Regular" }}
            onClick={() => handleMoreItemClick("/About")}
          />
          <BottomNavigationAction
            label="Sponsors"
            value="sponsors"
            showLabel={true}
            icon={<PaidSharpIcon />}
            className="text-black font-semibold"
            sx={{ fontStyle: "!Blender-Regular" }}
            onClick={() => handleMoreItemClick("/Sponsors")}
          />
          <BottomNavigationAction
            label="Developers"
            value="developers"
            showLabel={true}
            icon={<CodeIcon />}
            className="text-black font-semibold"
            sx={{ fontStyle: "!Blender-Regular" }}
            onClick={() => handleMoreItemClick("/Team")}
          />
          <BottomNavigationAction
            label="Dashboard"
            value="dashboard"
            showLabel={true}
            icon={<DashboardIcon />}
            className="text-black font-semibold"
            sx={{ fontStyle: "!Blender-Regular" }}
            onClick={() => handleMoreItemClick("/Dashboard")}
          />
          <BottomNavigationAction
            label="Leaderboard"
            value="leaderboard"
            showLabel={true}
            icon={<SportsScoreIcon />}
            className="text-black font-semibold"
            sx={{ fontStyle: "!Blender-Regular" }}
            onClick={() => handleMoreItemClick("/Leaderboard")}
          />
          <BottomNavigationAction
            label="Contact"
            value="Contact"
            showLabel={true}
            icon={<RecentActorsIcon />}
            className="text-black font-semibold"
            sx={{ fontStyle: "!Blender-Regular" }}
            onClick={() => handleMoreItemClick("/Contact")}
          />
        </BottomNavigation>
      </Popover>
    </div>
  );
};

export default BottomNav;
