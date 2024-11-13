import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { publicApiClient } from "../../api/apiClient";
import "../../styles/Button.css";
import "../../styles/Form.css";
import Notif from "./Notif";
import { useForm, errorStyle } from "./utils";
import { HashLink as NavLink } from "react-router-hash-link";

const formData = {
	fullname: "",
	collegename: "",
	email: "",
	password: "",
	conpass: "",
};
let p = "";

export default function UserSignup() {
	const navigate = useNavigate();
	const [open, setOpen] = React.useState(false);
	const [message, setMessage] = React.useState({ text: "", type: "success" });
	const [otpSent, setOtpSent] = useState(false);
	const [stateOTP, setStateOTP] = React.useState({
		value: "",
		state: false,
	});
	const [otpTimeout, setOtpTimeout] = useState(false);
	const [showSpam, setShowSpam] = useState(false);
	const [emailType, setEmailType] = useState("BIT");

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	// this is temporary storage of the otp token, not the actual user token
	const [token, setToken] = useState();
	const submitOtp = async (e) => {
		e.preventDefault();
		try {
			const res = await publicApiClient.post("/users/signup/" + token, {
				otp: stateOTP.value,
			});
			localStorage.setItem("accessToken", res?.data?.token);
			localStorage.setItem("userID", res?.data?.user?.id);
			navigate("/dashboard");
		} catch (err) {
			// console.log(e.response.data.message);
			setMessage({ text: err?.response?.data?.message, type: "error" });
			setOpen(true);
		}
	};
	/////////////////////////////////////////////
	const triggerOTP = () => {
		setStateOTP((prev) => {
			return {
				...prev,
				state: !prev.state,
			};
		});
	};

	const handleChange = (e) => {
		const { id, value } = e.target;
		setStateOTP((prev) => {
			return {
				...prev,
				[id]: value,
			};
		});
	};

	const validateOTPInput = (val) => {
		let isNum = /^\d+$/.test(val);
		let isSix = val.length === 4;

		let error = false;
		let msg = "";
		if (!isNum) {
			msg = "OTP should be a number";
			error = true;
		} else if (!isSix) {
			msg = "OTP should be a four digit long";
			error = true;
		}
		return { error, msg };
	};

	const validate = (fieldValues = values) => {
		let temp = { ...errors };
		if ("fullname" in fieldValues)
			temp.fullname = fieldValues.fullname
				? ""
				: "This field is required.";
		if ("email" in fieldValues) {
			let isEmail;
			if (emailType === "BIT") {
				isEmail = /$^|.+@.+..+/.test(fieldValues.email);
			} else {
				isEmail = /$^|.+@.+..+/.test(fieldValues.email);
			}
			const isFill = fieldValues.email ? true : false;
			if (!isEmail) {
				temp.email = "Not a valid email";
			} else if (!isFill) {
				temp.email = "This field is required";
			} else {
				temp.email = "";
			}
		}
		if ("collegename" in fieldValues)
			temp.collegename = fieldValues.collegename.length
				? ""
				: "This field is required";
		if ("password" in fieldValues)
			temp.password =
				fieldValues.password.length >= 8
					? ""
					: "Password should have atleast 8 characters";
		p = values.password;
		if ("conpass" in fieldValues)
			temp.conpass =
				fieldValues.conpass === p
					? ""
					: "Password and Confirm Password should be same";
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
				setOtpTimeout(true);
				const res = await publicApiClient.post("/users/signup", {
					name: values.fullname,
					email: values.email,
					password: values.password,
					college: values.collegename,
					confirmpassword: values.conpass,
				});
				setToken(res?.data?.token);
				setShowSpam(true);
				setOtpSent(true);
				setMessage({ text: "OTP Sent to Mail", type: "success" });
				// resetForm();
			} catch (err) {
				setMessage({
					text:
						err?.response?.data?.message || "Something went wrong",
					type: "error",
				});
			} finally {
				setOtpTimeout(false);
				setOpen(true);
			}
		}
	};
	return (
		<>
			<div className="form !w-full !font-blender-regular !p-0 md:!p-6 lg:!px-12">
				<div className="font-blender-regular text-lg text-center text-white mb-4">
					<p>
						Read guidelines from{" "}
						<NavLink
							to="/about/#faq-about"
							className="text-blue font-blender-medium"
							smooth
						>
							FAQ
						</NavLink>
					</p>
					<p className="bg-red-600 p-2 font-blender-bold rounded-md mt-2">
						Only students from BIT MESRA main campus and Lalpur
						campus are allowed. <br /> Please carry your ID cards.
					</p>
				</div>
				<form onSubmit={handleSubmit} className="form-struct ">
					<div className="mb-2">
						<input
							type="text"
							className={
								"custom-input w-full " +
								(errors.fullname ? "!border-red-700" : "")
							}
							placeholder="Full Name"
							label="Full Name"
							id="fullname"
							value={values.fullname}
							onChange={handleInputChange}
							autoComplete="off"
							required
						/>
						{errors.fullname ? (
							<div className={errorStyle}>{errors.fullname}</div>
						) : (
							""
						)}
					</div>
					<div className="mt-2">
						<input
							type="text"
							className={
								"custom-input w-full " +
								(errors.collegename ? "!border-red-700" : "")
							}
							placeholder="College Name"
							label="College Name"
							id="collegename"
							value={values.collegename}
							autoComplete="off"
							onChange={handleInputChange}
							required
						/>
						{errors.collegename ? (
							<div className={errorStyle}>
								{errors.collegename}
							</div>
						) : (
							""
						)}
					</div>

					<div className="flex flex-col w-full md:flex-row items-start justify-start">
						<div className="mb-3 -mt-4 w-full">
							<select
								className="bg-[#663399] !mr-0 md:!mr-8 !p-3 blue font-blender-medium !text-xl mt-8 flex w-[15rem] justify-center cursor-pointer rounded-md w-full"
								onChange={(e) => setEmailType(e.target.value)}
								value={emailType}
							>
								<option value="BIT">BIT MESRA main campus</option>
								<option value="OTHER">
									Other campus Email
								</option>
							</select>
						</div>
					</div>
					{emailType === "OTHER" && (
						<div className="text-md text-white mb-4">
							You need to pay Rs 1500 from this{" "}
							<a
								className="text-blue font-blender-medium"
								href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=322526"
								target="_blank"
							>
								link
							</a>{" "}
							to continue registration.
						</div>
					)}

					{/* // /email */}
					<div
						className={`${emailType === "BIT" ? "block" : "hidden"
							} my-2`}
					>
						<input
							className={
								"custom-input w-full " +
								(errors.email ? "!border-red-700" : "")
							}
							type="email"
							placeholder="BIT Mesra Email"
							label="Email"
							id="email"
							autoComplete="off"
							value={values.email}
							onChange={handleInputChange}
							required
						/>
						{errors.email ? (
							<div className={errorStyle}>{errors.email}</div>
						) : (
							""
						)}
						{/* <div className="mb-2">
							Use BIT Webmail, if from BIT Mesra
						</div> */}
					</div>
					<div
						className={`${emailType === "OTHER" ? "block" : "hidden"
							} my-2`}
					>
						<input
							className={
								"custom-input w-full " +
								(errors.email ? "!border-red-700" : "")
							}
							type="email"
							placeholder="Other Campus Email"
							label="Email"
							id="email"
							autoComplete="off"
							value={values.email}
							onChange={handleInputChange}
							required
						/>
						{errors.email ? (
							<div className={errorStyle}>{errors.email}</div>
						) : (
							""
						)}
						{/* <div className="mb-2">
							Use Other college Webmail, if not from BIT Mesra
						</div> */}
					</div>
					<div className="my-2">
						<input
							className={
								"custom-input w-full " +
								(errors.password ? "!border-red-600" : "")
							}
							placeholder="Password"
							label="Password"
							id="password"
							autoComplete="off"
							type="password"
							value={values.password}
							onChange={handleInputChange}
							required
						/>
						{errors.password ? (
							<div className={errorStyle}>{errors.password}</div>
						) : (
							""
						)}
					</div>
					<div className="mt-2 mb-2">
						<input
							className={
								"custom-input w-full " +
								(errors.conpass ? "!border-red-700" : "")
							}
							placeholder="Confirm Password"
							type="password"
							label="Confirm Password"
							id="conpass"
							autoComplete="off"
							value={values.conpass}
							onChange={handleInputChange}
							required
						/>

						{errors.conpass ? (
							<div className={errorStyle}>{errors.conpass}</div>
						) : (
							""
						)}
					</div>
					<button
						className="cyberpunk2077 !mr-8 !p-2 blue font-blender-bold !text-2xl mt-8"
						onClick={triggerOTP}
						type="submit"
						disabled={otpTimeout}
					>
						{otpTimeout ? "Loading" : "Get OTP"}
					</button>
					<div
						className={`${showSpam ? "block" : "hidden"
							} bg-[#5b0c95] rounded-lg !mr-8 !p-2 blue font-blender-medium !text-2xl mt-8 text-center w-full`}
					>
						Please check spam folder as well for the otp
					</div>
				</form>
				<form className="form-struct mt-8" onSubmit={submitOtp}>
					<div className="mb-2">
						<input
							type="password"
							placeholder="OTP"
							className={
								"custom-input w-full " +
								(stateOTP.state ? "!border-red-700" : "")
							}
							label="Enter OTP"
							id="value"
							value={stateOTP.value}
							autoComplete="off"
							disabled={!otpSent}
							onChange={handleChange}
							required
						/>
						{!(stateOTP.value === "") && stateOTP.state ? (
							<div className={errorStyle}>
								{!stateOTP.state
									? ""
									: validateOTPInput(stateOTP.value).msg}
							</div>
						) : (
							""
						)}
					</div>
					<button
						className="cyberpunk2077 !mr-8 !p-2 blue font-blender-bold !text-2xl mt-8"
						type="submit"
						disabled={!otpSent}
					>
						Register
					</button>
				</form>
			</div>
			<Notif
				open={open}
				handleClose={handleClose}
				message={message.text}
				type={message.type}
			/>
		</>
	);
}
