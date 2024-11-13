import React, { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import "./navbar.css";
// import { NavLink } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";
import TemporaryDrawer from "./tempdrawer";
import "../../styles/Background.css";

export default function Navbar() {
	const dom_ref = useRef(null);
	const dom_ref2 = useRef(null);
	useEffect(() => {
		var lastScrollTop = 0;
		window.addEventListener("scroll", (el) => {
			var st = window.pageYOffset || document.documentElement.scrollTop;
			if (st > lastScrollTop) {
				// downscroll code
				dom_ref.current.classList.remove("scroll-up");
				dom_ref.current.classList.add("scroll-down");
				//  console.log(dom_ref.current.classList.add("scroll-down"))
			} else if (st < lastScrollTop) {
				dom_ref.current.classList.remove("scroll-down");
				dom_ref.current.classList.add("scroll-up");
				// upscroll code
				//  console.log("u");
			} // else was horizontal scroll
			if (window.pageYOffset === 0) {
				dom_ref.current.classList.remove("scroll-up");
				dom_ref.current.classList.remove("scroll-down");
			}
			lastScrollTop = st <= 0 ? 0 : st;
		});
	}, []);
	useEffect(() => {
		var lastScrollTop = 0;
		window.addEventListener("scroll", (el) => {
			var st = window.pageYOffset || document.documentElement.scrollTop;
			if (st > lastScrollTop) {
				// downscroll code
				dom_ref2.current.classList.remove("scroll-up-mob");
				dom_ref2.current.classList.add("scroll-down-mob");
				//  console.log(dom_ref.current.classList.add("scroll-down"))
			} else if (st < lastScrollTop) {
				dom_ref2.current.classList.remove("scroll-down-mob");
				dom_ref2.current.classList.add("scroll-up-mob");
				// upscroll code
				//  console.log("u");
			} // else was horizontal scroll
			if (window.pageYOffset === 0) {
				dom_ref2.current.classList.remove("scroll-up-mob");
				dom_ref2.current.classList.remove("scroll-down-mob");
			}
			lastScrollTop = st <= 0 ? 0 : st;
		});
	}, []);
	return (
		<>
			<div className="nav dotted-bg">
				<div className="drawer" ref={dom_ref2}>
					<TemporaryDrawer />
				</div>
				<div className="webnav" ref={dom_ref}>
					<div className="navlinks">
						<NavLink to="/" smooth>
							Home
						</NavLink>
						<NavLink to="/event" smooth>
							Events
						</NavLink>
						<NavLink to="/schedule" smooth>
							Schedule
						</NavLink>
						<NavLink to="/leaderboard" smooth>
							Leaderboard
						</NavLink>
						<NavLink to="/sponsors" smooth>
							Sponsors
						</NavLink>
						<NavLink
							to="/register"
							smooth
							className="reg"
							style={{color: "white"}}
						>
							Register
						</NavLink>
					</div>

				</div>
			</div>
			{/* <SideNav /> */}
			<Outlet/>
		</>
	);
}
