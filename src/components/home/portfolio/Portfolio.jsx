import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "../../../styles/Background.css";
import "./Portfolio.css";

const items = [
	// {
	// 	id: 1,
	// 	title: "50+ Events",
	// 	url: "/Events",
	// 	img: "/assets/DSC_0004.jpg",
	// 	desc: "Dive into a world of endless entertainment, exploration, and enrichment as we bring together over 50 events including formal, informal and flagship events full of captivating activities and experiences. ",
	// },
	{
		id: 2,
		title: "Band Night",
		url: "/Events",
		img: "/assets/_MG_8801.jpg",
		desc: "Step onto the dance floor and let the beats take control as our talented Singer spin the hottest tracks, setting the stage for an unforgettable evening of music, rhythm, and euphoria. ",
	},
	{
		id: 3,
		title: "Heritage Night",
		url: "/Events",
		img: "/assets/hn.jpg",
		desc: "Discover the beauty of traditional dances, melodious music, and captivating storytelling as talented performers showcase the unique customs and traditions of our community. ",
	},
	{
		id: 4,
		title: "Pro Artist Night",
		url: "/Events",
		img: "/assets/OGP_0234.jpg",
		desc: "This extraordinary event brings together some of the most skilled and celebrated performers from across the artistic spectrum to showcase their mastery and creativity.",
	},
];

const Single = ({ item }) => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
	});

	const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

	return (
		<section>
			<div className="container font-blender-regular px-8 md:px-0">
				<div className="wrapper">
					<div className="imageContainer" ref={ref}>
						<img src={item.img} alt="" className="roundedImage " />
					</div>
					<motion.div className="textContainer" style={{ y }}>
						<h2 className="custom-item-heading">{item.title}</h2>
						<p className="des font-blender-regular text-amber-50">
							{item.desc}
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

const Portfolio = () => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["end end", "start start"],
	});

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
	});

	return (
		<div className="portfolio dotted-bg" ref={ref}>
			{/* <div className="progress">
				<h1 className="font-blender-bold text-purple-700 text-6xl">
					Bitotsav Features
				</h1>
				<motion.div
					style={{ scaleX }}
					className="progressBar"
				></motion.div>
			</div> */}
			{items.map((item) => (
				<Single item={item} key={item.id} />
			))}
		</div>
	);
};

export default Portfolio;
