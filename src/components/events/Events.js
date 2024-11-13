import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useNavigate } from "react-router-dom";
import { clubs, days, types } from "../../data/CategoryData";
import "../../styles/Background.css";
import "../../styles/Form.css";
import "../../styles/Global.css";
import "./Container.css";
import { publicApiClient } from "../../api/apiClient";
import Notif from "../register/Notif";
import { capitalizeFirstLetter, checkDay, dateToDay } from "../../utils/global";

const headingStyle =
	"font-blender-bold text-xl overflow-hidden whitespace-nowrap";
const subHeadingStyle =
	"font-blender-regular text-lg overflow-hidden whitespace-nowrap";

const EventItem = ({ event }) => {
	const navigate = useNavigate();
	return (
		<div
			className="cyberpunk-container cursor-pointer "
			onClick={() => navigate("/eventdetail", { state: event })}
		>
			<div className="flex relative ">
				<img className="" src={event.image} alt="Event" />
			</div>
			<div className="flex bg-black w-full relative">
				<div className="flex flex-col w-full py-4 px-2">
					<div className="flex flex-col text-white flex justify-between items-center px-4">
						<p className={headingStyle}>
							{event.name?.toUpperCase()}
						</p>
						<p className={subHeadingStyle}>
							{"By " + event.club.name}
						</p>
						<p className={subHeadingStyle}>
							{capitalizeFirstLetter(event.category) + " Event"}
						</p>

						<p className={subHeadingStyle}>{event.place}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

const dropdownStyle = "";

const Events = () => {
	const [eventData, setEventData] = useState([]);
	const [dayValue, setDayValue] = useState({ value: -1, label: "Day" });
	const [typeValue, setTypeValue] = useState({
		value: "All",
		label: "Category",
	});
	const [clubValue, setClubValue] = useState({ value: "All", label: "Club" });
	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState({ text: "", type: "success" });

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	const getEventList = async () => {
		let res;
		try {
			res = await publicApiClient.get("/event");
			// console.log(res?.data?.data);
			setEventData(res?.data?.data);
		} catch (err) {
			setEventData(res?.data?.data);
			// console.log(err);
			setMessage({ text: "Could not load events!", type: "error" });
			setOpen(true);
		} finally {
			window.scrollTo(0, 0);
		}
	};

	useEffect(() => {
		getEventList();
	}, []);

	// useEffect(() => {
	// 	console.log(
	// 		eventData.filter(
	// 			(item) =>
	// 				dayValue.value === -1 ||
	// 				dayValue.value ===
	// 					dateToDay(item.dates.day1.start, item.dates.day1.end) ||
	// 				dayValue.value ===
	// 					dateToDay(item.dates.day2.start, item.dates.day2.end) ||
	// 				dayValue.value ===
	// 					dateToDay(item.dates.day3.start, item.dates.day3.end)
	// 		)
	// 	);
	// }, [eventData, dayValue]);

	return (
		<>
			<div className="w-screen min-h-screen dotted-bg pt-12 pb-24 px-6 md:px-12 font-blender-regular ">
				<div className="flex flex-col md:flex-row w-full items-center justify-between mb-10 px-2">
					<p className="custom-heading-event text-[#a855f7] text-6xl pb-2 md:pb-0">
						Events
					</p>
					<div className="flex flex-row gap-2 pb-4 md:pb-0">
						<Dropdown
							className={dropdownStyle}
							options={days}
							value={dayValue}
							onChange={(value) => {
								if (value.value === -1)
									setDayValue({ value: -1, label: "All" });
								else
									setDayValue({
										value: value.value,
										label: value.value,
									});
							}}
						/>
						<Dropdown
							className={dropdownStyle}
							options={types}
							value={typeValue}
							onChange={(value) => {
								if (value.value === "All")
									setTypeValue({
										value: "All",
										label: "All",
									});
								else
									setTypeValue({
										value: value.value,
										label: value.value,
									});
							}}
						/>
						<Dropdown
							className={dropdownStyle}
							options={clubs}
							value={clubValue}
							onChange={(value) => {
								if (value.value === "All")
									setClubValue({
										value: "All",
										label: "All",
									});
								else
									setClubValue({
										value: value.value,
										label: value.value,
									});
							}}
						/>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 p-2">
					{eventData &&
						eventData
							.filter(
								(item) =>
									item.club.name === clubValue.value ||
									clubValue.value === "All"
							)
							.filter(
								(item) =>
									item.category === typeValue.value ||
									typeValue.value === "All"
							)
							.filter(
								(item) =>
									dayValue.value === -1 ||
									dayValue.value ===
										dateToDay(
											item.dates.day1.start,
											item.dates.day1.end
										) ||
									dayValue.value ===
										dateToDay(
											item.dates.day2.start,
											item.dates.day2.end
										) ||
									dayValue.value ===
										dateToDay(
											item.dates.day3.start,
											item.dates.day3.end
										)
							)
							.map((item, index) => {
								return <EventItem key={index} event={item} />;
							})}
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

export default Events;
