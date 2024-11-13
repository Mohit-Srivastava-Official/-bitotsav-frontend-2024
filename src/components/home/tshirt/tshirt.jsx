import React from "react";
import "./styles.css";
import f1 from "./Layer 1.png";
import b1 from "./Layer 2.png";
import f2 from "./Layer 3.png";
import b2 from "./Layer 4.png";

function ProductPage() {
	return (
		<div className="dotted-bg flex h-screen items-center justify-center">
			<div className="wrap">
				<div className="container">
					<div className="box box--1">
						<div className="line">
							<span className="text-black font-blender-bold">
								SOLD OUT
							</span>
							<span className="text-black font-blender-bold">
								SOLD OUT
							</span>
						</div>

						<div className="photo-back">
							<img src={f2} alt="Back Photo" />
						</div>
						<div className="photo-front">
							<img src={b2} alt="Front Photo" />
						</div>
					</div>
					<div className="box box--4">
						<div className="photo-back">
							<img src={f1} alt="Back Photo" />
						</div>
						<div className="photo-front">
							<img src={b1} alt="Front Photo" />
						</div>
						<div className="btn"></div>
						<div className="box_rotate">
							<svg
								enableBackground="new 0 0 300 300"
								preserveAspectRatio="xMidYMid meet"
								version="1.1"
								viewBox="0 0 300 300"
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
							>
								<defs>
									<path
										id="circlePath"
										d="M 150, 150 m -40, 0 a 40,40 0 0,1 80,0 a 40,40 0 0,1 -80,0 "
									></path>
								</defs>
								<circle
									cx="150"
									cy="100"
									fill="none"
									r="75"
								></circle>
								<g>
									<use
										fill="none"
										xlinkHref="#circlePath"
									></use>
									<text fill="#000">
										<textPath
											xlinkHref="#circlePath"
											className="text-black font-blender-bold"
										>
											SOLD | OUT | SOLD| OUT | SOLD | OUT
											|
										</textPath>
									</text>
								</g>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductPage;
