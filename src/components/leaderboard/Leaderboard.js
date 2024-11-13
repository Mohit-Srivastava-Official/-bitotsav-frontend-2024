import React from "react";
import WebStepper from "./web-stepper";
import "./leaderboard.css";
import MobileTabs from "./mobile-stepper";
import toast, { Toaster } from "react-hot-toast";

export default function Schedule() {
	return (
		<>
			<div className="w-screen min-h-screen dotted-bg pt-8 pb-16 px-6 font-blender-regular">
				<div id="schedule" className="schedule contain ">
					<p className="custom-heading-event text-[#a855f7] mt-12 md:mt-0 text-5xl md:text-6xl  mb-8">
						LeaderBoard
					</p>
					<div className="web-stepper">
						<WebStepper />
					</div>
					<div className="mobile-stepper">
						<MobileTabs />
					</div>
				</div>
				<Toaster />
			</div>
		</>
	);
}
