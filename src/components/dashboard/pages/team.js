import React, { useEffect, useState } from "react";
import "../dashboard.css";
import { useCookies } from "react-cookie";
import AddIcon from "@mui/icons-material/Add";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { Button, IconButton, TextField, AlertTitle } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { privateApiClient } from "../../../api/apiClient";

const vertical = "top";
const horizontal = "center";
const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function Team() {
	const userID = localStorage.getItem("userID");
	const [open, setOpen] = React.useState(false);
	const [data, setData] = useState();
	const [msg, setMsg] = React.useState({
		status: "",
		title: "",
		body: "",
	});
	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	};

	const getTeamDetails = async () => {
		const res = await privateApiClient.get("users/getuserdetail/");
		setData(res?.data?.user);
		// console.log(res);
	};

	useEffect(() => {
		getTeamDetails();
	}, []);

	return <div className="team dashboard px-6 dotted-bg font-blender-regular">
		{data ? <div id="team-details" className="text-xl mt-5">
			<div className="mb-10">
				{data?.teamId?.members.map((member, index) => {
					return (
						<div key={index}>
							<div className="font-bold text-2xl">

								{index === 0 ? "Team Members" : ""}
							</div>
							<div>
								<p>
									<li style={{ listStyleType: "none" }}>
										{member?._id === data?.teamId?.teamLeader ? <div className="font-bold text-purple-300">
											{index + 1 + ". "}	{member?.name} - {member?.bitotsavId.split('#')[0]} <br />
										</div> : <div> {index + 1 + ". "}{member?.name} - {member?.bitotsavId.split('#')[0]}</div>}
									</li>
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div> : "Loading..."}
	</div>;
}
