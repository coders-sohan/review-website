import React from "react";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
	return (
        // hero section
		<section>
			<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
				<HeroSection></HeroSection>
			</div>
		</section>
        // course section
	);
};

export default Home;
