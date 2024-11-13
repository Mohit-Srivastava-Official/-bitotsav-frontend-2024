import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import "./register.css";
import TeamRegister from "./team-register";
import UserLogin from "./user-login";
import UserSignup from "./user-signup";

function TabPanel(props) {
	const { children, value, index, ...other } = props;
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

export default function Register() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<div
			id="register"
			className="bg-gradient-custom-gradient pt-8 pb-24 min-h-screen text-white dotted-bg px-8"
		>
			<div className="text-center custom-heading-register text-5xl md:text-6xl text-purple-500 -mb-8 lg:mb-8">
				<h1>REGISTRATION</h1>
			</div>
			<Box className="b font-blender-regular ">
				<Box
					sx={{
						borderBottom: 5,
						borderColor: "transparent",
						bgColor: "background.paper",
					}}
				>
					<Tabs
						value={value}
						onChange={handleChange}
						variant="scrollable"
						allowScrollButtonsMobile
						scrollButtons="auto"
						className=""
						TabIndicatorProps={{ style: { background: "white" } }}
					>
						<Tab
							className="text-white"
							label="Sign Up"
							{...a11yProps(0)}
							style={{
								fontSize: "20px",
								color: "purple",
								fontFamily: "Blender-Medium",
							}}
						/>
						<Tab
							label="Team"
							{...a11yProps(1)}
							style={{
								fontSize: "20px",
								color: "purple",
								fontFamily: "Blender-Medium",
							}}
						/>
						<Tab
							label="Login"
							{...a11yProps(2)}
							style={{
								fontSize: "20px",
								color: "purple",
								fontFamily: "Blender-Medium",
							}}
						/>
					</Tabs>
				</Box>
				<TabPanel value={value} index={0}>
					<UserSignup />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<TeamRegister />
				</TabPanel>
				<TabPanel value={value} index={2}>
					<UserLogin />
				</TabPanel>
			</Box>
		</div>
	);
}
