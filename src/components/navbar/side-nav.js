import * as React from "react";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button, IconButton } from "@mui/material";

export default function SideNav() {
  return (
    <div className="side-wrap">
      <div className="side-nav">
        <Button>
          <IconButton>
            <a href="https://www.google.com/">
              <TwitterIcon />
            </a>
          </IconButton>
        </Button>
        <Button>
          <IconButton>
            <a href="https://www.google.com/">
              <InstagramIcon />
            </a>
          </IconButton>
        </Button>
        <Button>
          <IconButton>
            <a href="https://www.google.com/">
              <FacebookIcon />
            </a>
          </IconButton>
        </Button>
        <Button>
          <IconButton>
            <a href="https://www.google.com/">
              <LinkedInIcon />
            </a>
          </IconButton>
        </Button>
        <Button>
          <IconButton>
            <a href="https://www.google.com/">
              <YouTubeIcon />
            </a>
          </IconButton>
        </Button>
        <Button>
          <IconButton>
            <a href="https://www.google.com/">
              <EmailIcon />
            </a>
          </IconButton>
        </Button>
      </div>
    </div>
  );
}
