import * as dayjs from "dayjs";
import React, { useEffect } from "react";
import "react-dropdown/style.css";
import { useLocation } from "react-router-dom";
import { privateApiClient } from "../../api/apiClient";
import "../../styles/Background.css";
import "../../styles/Form.css";
import "../../styles/Global.css";
import Notif from "../register/Notif";
import "./Container.css";

const attributeContainer = "flex gap-1";
const attributeStyle = "text-blue font-blender-bold";
const attributeValueStyle = "font-blender-regular";

const EventDetail = () => {
	const { state: event } = useLocation();
	const [open, setOpen] = React.useState(false);
	const [message, setMessage] = React.useState({ text: "", type: "success" });

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	const handleParticipate = async () => {
		try {
			const res = await privateApiClient.patch(
				`/team/${event._id}/participate`
			);
			setMessage({
				text: "Registration Successful",
				type: "success",
			});
			if (event.registrationLink)
				window.open(event.registrationLink, "_blank");
		} catch (err) {
			setMessage({ text: err?.response?.data?.message, type: "error" });
		} finally {
			setOpen(true);
		}
	};

	const showDate = (start, end) => {
		if (start === end) return null;
		const day = dayjs(start).format("DD-MMM");
		const timeStart = dayjs(start).format("HH:mm A");
		const timeEnd = dayjs(end).format("hh:mm A");
		return `${day}, ${timeStart} - ${timeEnd}`;
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<div className="w-screen min-h-screen dotted-bg pt-12 pb-24 px-8 md:px-20 font-blender-regular text-xl mb-8">
				<div className="flex flex-col md:flex-row w-full items-center justify-start mb-4 lg:mb-6">
					<p className="custom-heading-event text-[#a855f7] text-6xl pb-2 md:pb-0">
						Event Details
					</p>
				</div>
				<div className="flex flex-col lg:flex-row items-start gap-6">
					<div className="flex flex-col gap-4 rounded-md overflow-hidden w-full lg:w-[30%]">
						<img src={event.image} />
						<div className="flex hidden lg:block">
							<button
								className="flex w-full h-full cyberpunk2077 font-blender-bold px-8 py-3"
								onClick={handleParticipate}
							>
								<p className="text-lg">Register</p>
							</button>
						</div>
					</div>
					<div className="flex flex-col w-full lg:w-[70%]">
						<div className={attributeContainer}>
							<p className={attributeStyle}>Event Name -</p>
							<p className={attributeValueStyle}>{event.name}</p>
						</div>
						<div className={attributeContainer}>
							<p className={attributeStyle}>Event Category -</p>
							<p className={attributeValueStyle}>
								{event.category}
							</p>
						</div>
						<div className={attributeContainer}>
							<p className={attributeStyle}>Organizing Club -</p>
							<p className={attributeValueStyle}>
								{event.club.name}
							</p>
						</div>

						<div className="flex flex-col w-full lg:w-[75%] whitespace-pre-wrap break-words">
							<p className={attributeStyle}>Description -</p>
							<p className={attributeValueStyle}>
								{event.description}
							</p>
						</div>
						<div className={attributeContainer}>
							<p className={attributeStyle}>Venue -</p>
							<p className={attributeValueStyle}>{event.place}</p>
						</div>
						<div className="flex flex-col">
							<p className={attributeStyle}>Timing -</p>
							<div className="font-blender-regular flex flex-col">
								<div>
									{showDate(
										event.dates.day1.start,
										event.dates.day1.end
									)}
								</div>
								<div>
									{showDate(
										event.dates.day2.start,
										event.dates.day2.end
									)}
								</div>
								<div>
									{showDate(
										event.dates.day3.start,
										event.dates.day3.end
									)}
								</div>
								{/* {checkDay(event.dates.day1)} */}
							</div>
						</div>
						{/* <div className={attributeContainer}>
							<p className={attributeStyle}>Contact -</p>
							<div className="flex gap-4">
								{event.contact.map((item, index) => {
									return (
										<div className="flex gap-1" key={index}>
											<p>{item.name + " - "}</p>
											<p>{item.number}</p>
										</div>
									);
								})}
							</div>
						</div> */}
						<div className="flex lg:hidden block mt-4">
							<button
								className="flex w-full h-full cyberpunk2077 font-blender-bold px-8 py-3"
								onClick={handleParticipate}
							>
								<p className=" text-lg">Register</p>
							</button>
						</div>
					</div>
				</div>
			</div>
			<Notif
				open={open}
				handleClose={handleClose}
				message={message.text}
				type={message.type}
			/>
		</>
	);
};

export default EventDetail;
