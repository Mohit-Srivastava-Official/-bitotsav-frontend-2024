import React, { useEffect, useState } from "react";
import { privateApiClient } from "../../../api/apiClient";
import "../dashboard.css";
import Notif from "../../register/Notif";

export default function EventPass() {
	const [qrcode, setQrcode] = useState("");
	const [open, setOpen] = React.useState(false);
	const [message, setMessage] = React.useState({ text: "", type: "success" });

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	let res;
	const getPass = async () => {
		try {
			res = await privateApiClient.post("/users/getQR");
			// console.log(res);
			if (res?.data?.status === "success") {
				setQrcode(res?.data?.url);
				// console.log(res?.data?.url);
			}
		} catch (err) {
			const errorMsg = err?.response?.data?.message;
			setMessage({ text: errorMsg, type: "error" });
			setOpen(true);
		}
	};
	useEffect(() => {
		getPass();
	}, []);

	return (
		<div className="dashboard px-12 dotted-bg font-blender-regular">
			<h1 className="custom-heading-dashboard text-[#a855f7] user-name">
				Your Event Pass
			</h1>
			<div>{qrcode && <img src={qrcode} alt="qrcode" />}</div>
			<Notif
				open={open}
				handleClose={handleClose}
				message={message.text}
				type={message.type}
			/>
			<div className="flex flex-row gap-2 mt-2 !justify-start">
				<div className="!text-[#c494f1] text-lg">
					Powered by {"   "} <span className="text-2xl text-white font-bold ml-1">
						deeptrue.ai
					</span>
				</div>

			</div>
			<div className="flex flex-row gap-2 mt-6 !justify-start">
				<div>
					<span className="text-2xl text-white font-bold ml-1">
						* Do not share event pass with anyone. This is a one time Event Pass.
					</span>
				</div>

			</div>
		</div>
	);
}
