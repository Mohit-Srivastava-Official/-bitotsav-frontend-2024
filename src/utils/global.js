import dayjs from "dayjs";

export const nameRegex = /^[a-zA-Z\s]+$/;
export const usernameRegex = /^[a-zA-Z0-9_]+$/;
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const capitalizeFirstLetter = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

export const checkDay = (dateB) => {
	const startDate = new Date(dateB.start).toLocaleTimeString("it-IT");
	const endDate = new Date(dateB.end).toLocaleTimeString("it-IT");
	return `${startDate} To ${endDate}`;
};

export const dateToDay = (start, end) => {
	if (start === end) return 0;
	const day = dayjs("2024-3-14");
	const d = dayjs(start).diff(day, "day");
	// console.log(d);
	return d;
};
