import React, { useEffect, useState } from "react";
import { privateApiClient } from "../../api/apiClient";
import Notif from "./Notif";
import { useForm, errorStyle } from "./utils";
import { HashLink as NavLink } from "react-router-hash-link";

const formData = {
	teamname: "",
	id_1: "",
	id_2: "",
	id_3: "",
	id_4: "",
	id_5: "",
	id_6: "",
	id_7: "",
	id_8: "",
};

export default function TeamRegister() {
	const [open, setOpen] = React.useState(false);
	const [message, setMessage] = React.useState({ text: "", type: "success" });
	const [teamTimeout, setTeamTimeout] = useState(false);

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};
	const validate = (fieldValues = values) => {
		let temp = { ...errors };
		if ("teamname" in fieldValues)
			temp.teamname = fieldValues.teamname
				? ""
				: "This field is required.";
		if ("id_1" in fieldValues) {
			const isEmail = /$^|.+@.+..+/.test(fieldValues.id_1);
			const isFill = fieldValues.id_1 ? true : false;
			if (!isEmail) {
				temp.id_1 = "Not a valid email";
			} else if (!isFill) {
				temp.id_1 = "This field is required";
			} else {
				temp.id_1 = "";
			}
		}
		if ("id_2" in fieldValues) {
			const isEmail = /$^|.+@.+..+/.test(fieldValues.id_2);
			const isFill = fieldValues.id_2 ? true : false;
			if (!isEmail) {
				temp.id_2 = "Not a valid email";
			} else if (!isFill) {
				temp.id_2 = "This field is required";
			} else {
				temp.id_2 = "";
			}
		}
		if ("id_3" in fieldValues) {
			const isEmail = /$^|.+@.+..+/.test(fieldValues.id_3);
			const isFill = fieldValues.id_3 ? true : false;
			if (!isEmail) {
				temp.id_3 = "Not a valid email";
			} else if (!isFill) {
				temp.id_3 = "This field is required";
			} else {
				temp.id_3 = "";
			}
		}
		if ("id_4" in fieldValues) {
			temp.id_4 = /$^|.+@.+..+/.test(fieldValues.id_4)
				? ""
				: "Not a valid email";
		}
		if ("id_5" in fieldValues) {
			temp.id_5 = /$^|.+@.+..+/.test(fieldValues.id_5)
				? ""
				: "Not a valid email";
		}
		if ("id_6" in fieldValues) {
			temp.id_5 = /$^|.+@.+..+/.test(fieldValues.id_6)
				? ""
				: "Not a valid email";
		}
		if ("id_7" in fieldValues) {
			temp.id_5 = /$^|.+@.+..+/.test(fieldValues.id_7)
				? ""
				: "Not a valid email";
		}
		if ("id_8" in fieldValues) {
			temp.id_5 = /$^|.+@.+..+/.test(fieldValues.id_8)
				? ""
				: "Not a valid email";
		}
		setErrors({
			...temp,
		});

		if (fieldValues === values)
			return Object.values(temp).every((x) => x === "");
	};

	const {
		values,
		setValues,
		errors,
		setErrors,
		handleInputChange,
		resetForm,
	} = useForm(formData, true, validate);

	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.log(errors);
		if (validate()) {
			// console.log(values);
			try {
				setTeamTimeout(true);
				const emails = [values.id_1, values.id_2, values.id_3];
				if (values.id_4 !== "") emails.push(values.id_4);
				if (values.id_5 !== "") emails.push(values.id_5);
				if (values.id_6 !== "") emails.push(values.id_6);
				if (values.id_7 !== "") emails.push(values.id_7);
				if (values.id_8 !== "") emails.push(values.id_8);
				const res = await privateApiClient.post("/team/register", {
					name: values.teamname,
					email: emails,
				});
				// console.log(res?.data);
				if (res?.data?.status === "success") {
					setMessage({
						text: "Team Created. Now you can register for events",
						type: "success",
					});
				} else {
					setMessage({
						text: res?.message || "Something went wrong",
						type: "error",
					});
				}
				resetForm();
			} catch (err) {
				// console.log(err);
				setMessage({ text: err.response.data.message, type: "error" });
			} finally {
				setOpen(true);
				setTeamTimeout(false);
			}
		}
	};
	return (
		<>
			<div className="form !w-full">
				<div className="font-blender-regular text-lg text-center text-white mb-4 mt-0 md:mt-7">
					Read guidelines from{" "}
					<NavLink
						to="/about/#faq-about"
						className="text-blue font-blender-medium"
						smooth
					>
						FAQ
					</NavLink>
				</div>
				<form onSubmit={handleSubmit} className="form-struct ">
					<div className="mb-4">
						<input
							placeholder="Team Name"
							label="Team Name"
							id="teamname"
							className={
								"custom-input w-full " +
								(errors.teamname ? "!border-red-700" : "")
							}
							value={values.teamname}
							onChange={handleInputChange}
							{...(errors.teamname && {
								error: true,
								helperText: errors.teamname,
							})}
							required
						/>
						{errors.teamname ? (
							<div className={errorStyle}>{errors.teamname}</div>
						) : (
							""
						)}
					</div>
					<div className="mb-4">
						<input
							// sx={{ mb: 2 }}
							// variant="outlined"
							placeholder="Team Leader Email"
							label="Team Leader ID"
							autoComplete="off"
							type="email"
							id="id_1"
							className={
								"custom-input w-full " +
								(errors.id_1 ? "!border-red-700" : "")
							}
							value={values.id_1}
							onChange={handleInputChange}
							required
						/>
						{errors.id_1 ? (
							<div className={errorStyle}>{errors.id_1}</div>
						) : (
							""
						)}
					</div>
					<div className="mb-4">
						<input
							placeholder="Member Email"
							sx={{ mb: 2 }}
							variant="outlined"
							label="Member ID"
							type="email"
							className={
								"custom-input w-full " +
								(errors.id_2 ? "!border-red-700" : "")
							}
							autoComplete="off"
							id="id_2"
							value={values.id_2}
							onChange={handleInputChange}
							required
						/>
						{errors.id_2 ? (
							<div className={errorStyle}>{errors.id_2}</div>
						) : (
							""
						)}
					</div>
					<div className="mb-4">
						<input
							placeholder="Member Email"
							label="Member ID"
							type="email"
							id="id_3"
							className={
								"custom-input w-full " +
								(errors.id_3 ? "!border-red-700" : "")
							}
							autoComplete="off"
							value={values.id_3}
							onChange={handleInputChange}
							required
						/>
						{errors.id_3 ? (
							<div className={errorStyle}>{errors.id_3}</div>
						) : (
							""
						)}
					</div>
					<div className="mb-4">
						<input
							placeholder="Member Email (optional)"
							label="Member ID (optional)"
							type="email"
							className={
								"custom-input w-full " +
								(errors.id_4 ? "!border-red-700" : "")
							}
							id="id_4"
							autoComplete="off"
							value={values.id_4}
							onChange={handleInputChange}
						/>
						{errors.id_4 ? (
							<div className={errorStyle}>{errors.id_4}</div>
						) : (
							""
						)}
					</div>
					<div className="mb-4">
						<input
							placeholder="Member Email (optional)"
							label="Member ID (optional)"
							id="id_5"
							type="email"
							className={
								"custom-input w-full " +
								(errors.id_5 ? "!border-red-700" : "")
							}
							autoComplete="off"
							value={values.id_5}
							onChange={handleInputChange}
						/>
						{errors.id_5 ? (
							<div className={errorStyle}>{errors.id_5}</div>
						) : (
							""
						)}
					</div>
					<div className="mb-4">
						<input
							placeholder="Member Email (optional)"
							label="Member ID (optional)"
							type="email"
							className={
								"custom-input w-full " +
								(errors.id_6 ? "!border-red-700" : "")
							}
							id="id_6"
							autoComplete="off"
							value={values.id_6}
							onChange={handleInputChange}
						/>
						{errors.id_6 ? (
							<div className="text-sm -mt-2 text-red-700">
								{errors.id_6}
							</div>
						) : (
							""
						)}
					</div>
					<div className="mb-4">
						<input
							placeholder="Member Email (optional)"
							label="Member ID (optional)"
							type="email"
							className={
								"custom-input w-full " +
								(errors.id_7 ? "!border-red-700" : "")
							}
							id="id_7"
							autoComplete="off"
							value={values.id_7}
							onChange={handleInputChange}
						/>
						{errors.id_7 ? (
							<div className="text-sm -mt-2 text-red-700">
								{errors.id_7}
							</div>
						) : (
							""
						)}
					</div>
					<div className="mb-4">
						<input
							placeholder="Member Email (optional)"
							label="Member ID (optional)"
							type="email"
							className={
								"custom-input w-full " +
								(errors.id_8 ? "!border-red-700" : "")
							}
							id="id_8"
							autoComplete="off"
							value={values.id_8}
							onChange={handleInputChange}
						/>
						{errors.id_8 ? (
							<div className="text-sm -mt-2 text-red-700">
								{errors.id_8}
							</div>
						) : (
							""
						)}
					</div>
					<button
						className="cyberpunk2077 !mr-8 !p-2 blue font-blender-bold !text-2xl"
						type="submit"
						disabled={teamTimeout}
					>
						{teamTimeout ? "Loading" : "Register"}
					</button>
				</form>
				<Notif
					open={open}
					handleClose={handleClose}
					message={message.text}
					type={message.type}
				/>
			</div>
		</>
	);
}
