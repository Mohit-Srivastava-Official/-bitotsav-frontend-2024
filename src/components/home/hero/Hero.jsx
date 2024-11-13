import "./hero.scss";
import { motion } from "framer-motion";
import React from "react";
import "./Header.css";
import Stars from "../stars/stars";
import { jwtDecode } from "jwt-decode";
const textVariants = {
	initial: {
		y: -500,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
	scrollButton: {
		opacity: 0,
		y: 10,
		transition: {
			duration: 2,
			repeat: Infinity,
		},
	},
};
const sliderVariants = {
	initial: {
		x: 0,
	},
	animate: {
		x: "-220%",
		transition: {
			repeat: Infinity,
			repeatType: "mirror",
			duration: 20,
		},
	},
};
const handleContextMenu = (e) => {
	e.preventDefault();
};

const validateToken = (token) => {
	if (!token) return false;
	const decodedToken = jwtDecode(token);
	if (decodedToken.exp < Date.now() / 1000) {
		return false;
	} else {
		return true;
	}
};

const Hero = () => {
	const accessToken = localStorage.getItem("accessToken");
	return (
		<div className="hero">
			{/*<Stars />*/}
			<div className="wrapper flex flex-col items-center justify-center">
				<div className="logo  ">
					<img
						src="/assets/logos.png"
						alt=""
						draggable="false"
						onContextMenu={handleContextMenu}
					/>
				</div>
				<motion.div
					className="textContainer flex"
					variants={textVariants}
					initial="initial"
					animate="animate"
				>
					<motion.p
						className="text-center text-white landing-subheading text-5xl"
						variants={textVariants}
					>
						Birla Institute of Technology Mesra
					</motion.p>
					<motion.h1
						className="landing-heading	"
						variants={textVariants}
					>
						BITOTSAV
					</motion.h1>
					<a
						href={
							validateToken(accessToken)
								? "/dashboard"
								: "/register"
						}
						className="button cyberpunk2077 reg font-blender-regular "
						style={{
							marginLeft: "auto",
							marginRight: "auto",
							display: "flex",
							alignItems: "center",
							padding: "15px",
							width: "fit-content",
							height: "fit-content",
							maxWidth: "100%",
						}}
					>
						<motion.button variants={textVariants}>
							{!validateToken(accessToken)
								? "Register Now"
								: "Go to Dashboard"}
						</motion.button>
					</a>
				</motion.div>
			</div>
			{/*<motion.div*/}
			{/*	className="slidingTextContainer"*/}
			{/*	variants={sliderVariants}*/}
			{/*	initial="initial"*/}
			{/*	animate="animate"*/}
			{/*>*/}
			{/*	BITOTSAV BITOTSAV BITOTSAV BITOTSAV*/}
			{/*</motion.div>*/}
			{/*<motion.div animate={{x: [0, 100, 0]}}/>*/}
		</div>
	);
};

export default Hero;
