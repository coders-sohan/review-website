import React from "react";
import CourseSection from "../CourseSection/CourseSection";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
	return (
		<>
			{/* Hero section */}
			<section>
				<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
					<HeroSection></HeroSection>
				</div>
			</section>
			{/* course section */}
			<section class="bg-gray-100">
				<div class="container px-5 py-24 mx-auto">
					<CourseSection></CourseSection>
				</div>
			</section>
		</>
	);
};

export default Home;
