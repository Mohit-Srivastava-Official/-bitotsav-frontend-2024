import "../../styles/landing.scss";
import Cursor from "./cursor/Cursor";
import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import Services from "./services/Services";
import Portfolio from "./portfolio/Portfolio";
import Footer from "../footer/footerwel";
import Sponsor from "../home/sponsor/sponsor";
import Tshirt from "../home/tshirt/tshirt";
import Artist from "../home/artists/artist";
import { useEffect } from "react";
import { Parallax } from "swiper/modules";
const Welcome = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			{/* <Cursor /> */}
			<section id="Homepage">
				<Hero />
				{/*</section>*/}
				{/*<section id="Services">*/}
				{/*<Parallax type="services" />*/}
				{/*</section>*/}
				{/*<section>*/}
			</section>
			<section>
				<Services />
			</section>
			<Portfolio />
			<section className="h-full">
				<Artist />
			</section>
			<section className="h-5/6 dotted-bg pt-12">
				<Sponsor />
			</section>
			<section
				style={
					{
						// height: "auto",
						// paddingTop: "40px",
						// paddingBottom: "60px",
					}
				}
				className="dotted-bg"
			>
				<Tshirt />
			</section>
			<section>
				<Footer />
			</section>
		</div>
	);
};

export default Welcome;
