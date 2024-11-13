import * as React from "react";
import { useEffect, useRef } from "react";
import "./sponsors.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Sponsors = () => {
	const sponsorRef = useRef(null);

	useEffect(() => {
		AOS.init({
			once: false,
			duration: 500,
			easing: "ease-in-out",
		});

		const options = {
			root: null,
			rootMargin: "0px",
			threshold: 0.5,
		};

		const callback = (entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("aos-animate");
					observer.unobserve(entry.target);
				}
			});
		};

		const observer = new IntersectionObserver(callback, options);
		if (sponsorRef.current) {
			observer.observe(sponsorRef.current);
		}

		return () => {
			if (sponsorRef.current) {
				observer.unobserve(sponsorRef.current);
			}
		};
	}, []);

	const sponsors = [
		{
			name: "Jharkhand Tourism - Title Sponsor",
			image: "assets/JharkhandTourism.png",
		},
		{
			name: "CMPDI",
			image: "assets/Cmpdi.png",
		},
		{
			name: "SBI - Banking Partner",
			image: "assets/SBI.png",
		},
		{
			name: "RedBull",
			image: "assets/Red-Bull.png",
		},
		{
			name: "Nestle",
			image: "assets/Nestle.png",
		},
		{
			name: "Frostive",
			image: "assets/Frostive.png",
		},
	];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div
			className="	dotted-bg min-h-screen text-white pb-4 mt-12 md:mt-0 mb-4 px-4"
			ref={sponsorRef}
		>
			<div className="container mx-auto">
				<h1 className="ml-0 md:ml-6 custom-heading-event text-[#a855f7] text-6xl md:text-7xl pb-8 md:pb-16">
					Our Sponsors
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-x-20 custom-grid">
					{sponsors.map((sponsor, index) => (
						<div
							key={index}
							className="sponsor relative flex flex-col items-center justify-center "
							data-aos="fade-up"
						>
							<img
								src={sponsor.image}
								alt={sponsor.name}
								className="rounded-[25px] mb-2 hover:scale-105 transition duration-75 custom-shadow-effect"
							/>
							<p className="text-white font-blender-regular font-semibold text-center text-2xl mt-2">
								{sponsor.name}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sponsors;
