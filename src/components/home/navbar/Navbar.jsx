import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const handleContextMenu = (e) => {
	e.preventDefault();
};

const Navbar = () => {
	const location = useLocation();

	if (location.pathname === "/") {
		return (
			<div className="navbar dotted-bg">
				<Sidebar />
				<div className="wrapper">
					<motion.span
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
					></motion.span>
				</div>
			</div>
		);
	}

	return (
		<div className="navbar dotted-bg">
			<Sidebar />
			<div className="wrapper">
				<div className="logo  ">
					<img src="/assets/logos.png" alt="" draggable="false" onContextMenu={handleContextMenu} />
				</div>
				<motion.span
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
				></motion.span>
			</div>
		</div>
	);
};

export default Navbar;
