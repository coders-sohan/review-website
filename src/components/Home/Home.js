import React, { useEffect, useState } from "react";
import CourseSection from "../CourseSection/CourseSection";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
	const [courses, setCourses] = useState([]);
	useEffect(() => {
		fetch("./courses.JSON")
			.then((res) => res.json())
			.then((data) => setCourses(data));
	}, []);
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
					<div class="text-center mb-20">
						<h1 class="sm:text-4xl text-3xl font-semibold title-font text-gray-900 mb-4">
							<span className="text-red-500">Featured Courses</span>
							<br />
							<span className="text-xl tracking-widest font-semibold">
								By Professional Instructor
							</span>
						</h1>
						<div class="flex mt-6 justify-center">
							<div class="w-20 h-1 rounded-full bg-indigo-500 inline-flex"></div>
						</div>
					</div>
					{courses.map((course) => (
						<CourseSection course={course}></CourseSection>
					))}
				</div>
			</section>
		</>
	);
};

export default Home;
