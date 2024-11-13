import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { privateApiClient } from "../../api/apiClient";
import "./dashboard.css";
import Notif from "../register/Notif";

export default function Dashboard(props) {
	const userID = localStorage.getItem("userID");
	const [data, setData] = useState();
	const [loading, setLoading] = useState(true);
	const [open, setOpen] = React.useState(false);
	const [message, setMessage] = React.useState({ text: "", type: "success" });

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	const getUserDetails = async () => {
		try {
			const res = await privateApiClient.get("/users/getuserdetail");
			if (res?.data?.status == "success") {
				setData(res?.data?.user);
			}
		} catch (err) {
			setMessage({
				text: err?.response?.data?.message || "Something went wrong",
				type: "error",
			});
			setOpen(true);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		getUserDetails();
	}, []);
	return (
		<div className="dashboard px-12 dotted-bg font-blender-regular">
			{!loading && data ? (
				<div className="info">
					<p className="user-name custom-heading-dashboard">
						Hello{" "}
						<span className="text-[#a855f7]">{data?.name}</span>
					</p>
					<div className="text-xl">
						<h1>
							<span className="font-blender-bold text-blue">
								BitotsavID:{" "}
							</span>
							{data?.bitotsavId.split('#')[0]}
						</h1>
						<h1>
							<span className="font-blender-bold text-blue">
								Team Name:{" "}
							</span>

							{data?.teamId?.name ||
								"You don't belong to any team"}
						</h1>
					</div>

					{data.transaction_status !== "locked" ? (
						<div id="non-bitMainCampus" className="text-xl mt-5">
							<div className="font-bold text-3xl">Please pay Rs 1500 to continue</div>
							<div>
								<div className="font-bold text-2xl">How to pay :</div>
								<div>
									<p>
										<li style={{ listStyleType: "none" }}>1. You need to pay Rs 1500 from this{" "}
											<a
												className="text-blue font-blender-medium"
												href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=322526"
												target="_blank"
											>
												link
											</a>{" "}
											to continue.</li>
										<li style={{ listStyleType: "none" }}>2. Select "bitotsav 2024"</li>
										<li style={{ listStyleType: "none" }}>3. Make payment</li>
										<li style={{ listStyleType: "none" }}>4. Contact helpdesk on 14th with payment proof</li>
										<div className="font-bold mt-3">Mayukh Pankaj</div>
										<div>9024175580</div>
										<div className="font-bold mt-2">Ankit Kashyap</div>
										<div>7903735061</div>
									</p>
								</div>
							</div>
						</div>
					) : ("")}
				</div>
			) : (
				<h3>Loading...</h3>
			)}
			{!loading && !data && <h3>Looks like You are not logged in</h3>}
			<Notif
				open={open}
				handleClose={handleClose}
				message={message.text}
				type={message.type}
			/>
			<Outlet />
		</div>
	);
}
