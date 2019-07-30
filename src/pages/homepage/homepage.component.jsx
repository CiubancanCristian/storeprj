import React from "react";

import background from "../../assets/farrod.mp4";

import "./homepage.styles.scss";

const HomePage = () => (
	<div className="fullscreen-bg">
		<video className="fullscreen-bg__video" muted loop autoPlay>
			<source
				src={background}
				type="video/mp4"
			/>
		</video>
	</div>
);

export default HomePage;
