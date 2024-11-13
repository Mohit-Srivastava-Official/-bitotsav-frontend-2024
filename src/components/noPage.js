import React, { useEffect } from "react";

export default function NoPage() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="dotted-bg flex h-screen w-screen items-center justify-center px-4">
			<p className="text-2xl font-blender-medium">
				The page you're looking for does not exist.
			</p>
		</div>
	);
}
