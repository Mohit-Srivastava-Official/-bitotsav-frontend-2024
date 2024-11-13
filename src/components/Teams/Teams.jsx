import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TeamsData } from "../../data/TeamsData";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Teams.css";
const headingStyle = "font-blender-medium text-2xl";
const subHeadingStyle = "font-blender-regular text-xl";

const TeamItem = ({ event }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="cyberpunk-container cursor-pointer heyy-div">
      <div className="flex relative justify-center items-center mt-2 mb-4 !rounded-3xl">
        <img
          className="!rounded-3xl px-2 hey-div5"
          src={event.imageURL}
          style={{
            height: "320px",
            width: "320px",
          }}
        />
      </div>
      <div
        className="flex bg-black w-full relative hey-div2"
        style={{ height: "fit-content", padding: "20px" }}
      >
        <div className="flex flex-col">
          <div className="flex flex-col w-full py-4 px-2">
            <div className="text-white flex justify-between items-center hey-div">
              <p className={headingStyle}>{event.leadName}</p>
              <p className={headingStyle}>{event.teamName}</p>
            </div>
          </div>
          <div className="font-blender-regular p-2 text-lg hey-div3">
            {event.description}
          </div>
          <div className="flex flex-row justify-center items-center gap-10 hey-div4">
            <a href={`${event.insta}`}>
              <InstagramIcon
                sx={{
                  color: "white",
                  fontSize: "35px",
                }}
              ></InstagramIcon>
            </a>
            <a href={`${event.linkedin}`}>
              <LinkedInIcon
                sx={{
                  color: "white",
                  fontSize: "37px",
                }}
              ></LinkedInIcon>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Teams = () => {
  return (
    <div className="dotted-bg text-white pb-16 mt-12 md:mt-0 !mb-24 px-6 md:px-0">
      <div className="container">
        <h1 className="custom-heading-event text-[#a855f7] text-6xl mb-10">
          Developers
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TeamsData.map((item, index) => {
            return <TeamItem key={index} event={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Teams;
