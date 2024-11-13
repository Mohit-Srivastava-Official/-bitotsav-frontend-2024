import React from "react";
import Marquee from "react-fast-marquee";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const sponsors = [
	{
		name: "Jharkhand Tourism",
		image: "assets/JharkhandTourism.png",
	},
	{
		name: "CMPDI",
		image: "assets/Cmpdi.png",
	},
	{
		name: "SBI",
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

export default function HomeSponsors() {
	return (
		<Container className="mt-8">
			<h1
				className="text-center font-blender-bold py-0 text-6xl mb-36 text-purple-500"
				style={{
					fontFamily: "Bebas Neue",
				}}
			>
				SPONSORS
			</h1>
			<Marquee direction="left" speed={200} delay={1}>
				{sponsors.map((sponsor, id) => (
					<Sponsor key={id}>
						<img
							src={sponsor.image}
							alt=""
							style={{
								backgroundColor: `${
									sponsor.name === "RedBull"
										? "#173084"
										: "white"
								}`,
								width: "400px",
							}}
						/>
						<h1
							className="text-4xl font-medium mt-4 custom-heading-sponsors"
							style={{
								fontFamily: "Blender-Regular",
							}}
						>{`${sponsor.name}`}</h1>
					</Sponsor>
				))}
			</Marquee>
		</Container>
	);
}

const Container = styled.div`
	text-align: center;

	.react-marquee {
		display: flex;
		align-items: center;
	}
`;

const Sponsor = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-right: 20px;
	margin-top: 30px;
	margin-bottom: 30px;
	border-radius: 50%;
	width: clamp(10rem, 1rem + 40vmin, 30rem);
	padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
	transform: scale(0.9);
	img {
		object-fit: contain;
		width: 100%;
		height: 100%;
		background-color: white;
		border-radius: 50%;
		aspect-ratio: 1/1;
		padding: 4px;
		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	}
`;
