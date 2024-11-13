/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./about.css";
import "../../styles/Background.css";
import "../../styles/Global.css";
import FAQ from "./faq";
export default function About() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	// window.scrollTo(20, 0);
	return (
		<div className="dotted-bg items-start justify-center w-screen min-h-screen pb-12 flex   overflow-x-hidden overflow-scroll custom-scroll pt-12 md:pt-8">
			<div className="px-6 xl:px-36 lg:px-28 md:px-20">
				<div className="text-center text-6xl text-purple-500 mb-8">
					<h1 className="custom-heading-about">
						WHY ATTEND BITOTSAV ?
					</h1>
				</div>
				<div className="font-blender-regular text-2xl text-amber-50">
					<div>
						<p>
							In pursuit of enabling people to engage in cultural
							festivities through music, dance, and art, BIT Mesra
							hosts <b>BITOTSAV</b>, one of the largest
							socio-cultural extravaganzas in eastern India.
							<p>
								Regardless of whether you're a student or a
								guest, <b>BITOTSAV</b> provides a unique and
								immersive experience allowing you to broaden
								your understanding and exposure to various
								cultures. The event encompasses a wide array of
								performances, ranging from dance and music to
								fashion and fine arts, featuring renowned
								artists from across the country in a grand
								showcase of talent. Under the theme "
								<b>MAATI :</b> The Essence of Soil,"{" "}
								<b>BITOTSAV</b> aims to honor the past while
								looking towards the future with optimism.
							</p>
							<p>
								A notable aspect of <b>BITOTSAV</b> is its
								support for the noble cause of Unnat Bharat
								Abhiyan, which aims to empower rural communities
								through sustainable development and innovation
								facilitated by higher educational institutions.
								This year's <b>BITOTSAV</b> holds special
								significance as it marks the resumption of the
								event after a three-year hiatus due to the
								ongoing pandemic. Despite the challenges posed
								by the circumstances, the organizers have worked
								diligently to ensure that the festival is
								conducted in a safe and secure manner, providing
								students with a platform to showcase their
								talents and engage in cultural activities.{" "}
								<b>BITOTSAV</b> promises to be a memorable and
								captivating event eagerly awaited by students
								and alumni alike.
							</p>
						</p>
					</div>
				</div>
				<FAQ />
			</div>
		</div>
	);
}
