import React, { useEffect, useState } from "react";
import DashCard from "../dash-card";
import "../dashboard.css";
import { privateApiClient } from "../../../api/apiClient";

// TODO: fix this page, API not made yet!!

const eve = [
	{
		title: "",
		place: "",
		score: "",
		imageURL: "",
		day1: "",
		day2: "",
		day3: "",
	},
];
export default function Events() {
	const [detail, setDetail] = useState([]);
	const getData = async () => {
		const res = await privateApiClient.get("/leaderBoard/team");
		if (res?.data?.status == "success") {
			setDetail([]);
			res?.data?.data?.forEach((el) => {
				setDetail((elem) => {
					return [
						...elem,
						{
							title: el.event.name,
							day1: el.event.dates.day1
								? new Date(el.event.dates.day1).toLocaleString(
										"en-GB",
										{
											timeZone: "UTC",
										}
								  )
								: "",
							day2: el.event.dates.day2
								? new Date(el.event.dates.day2).toLocaleString(
										"en-GB",
										{
											timeZone: "UTC",
										}
								  )
								: "",
							day3: el.event.dates.day3
								? new Date(el.event.dates.day3).toLocaleString(
										"en-GB",
										{
											timeZone: "UTC",
										}
								  )
								: "",
							score: el.score.point || "NIL",
							imageURL: el.event.image,
							place: el.event.place,
						},
					];
				});
			});
		}
	};
	useEffect(() => {
		setDetail([]);
		getData();
	}, []);
	// console.log(detail);
	return (
		<div className="dashboard px-12 dotted-bg font-blender-regular">
			<h1 className="custom-heading-dashboard text-[#a855f7] user-name">
				Your Events
			</h1>
			<div
				className=""
				style={{
					display: "flex",
					justifyContent: "space-evenly",
					flexWrap: "wrap",
				}}
			>
				{detail.length
					? detail.map((element) => (
							<DashCard
								style={{ margin: "10px" }}
								detail={element}
							/>
					  ))
					: ""}
			</div>
		</div>
	);
}
