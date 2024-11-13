import React, { useEffect } from "react";

export default function ComingSoon() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="dotted-bg flex h-screen w-screen items-center justify-center px-4">
			<p className="text-4xl md:text-6xl lg:text-7xl text-center text-[#a855f7] custom-heading-soon">
				Coming Soon...
			</p>
		</div>
	);
}
