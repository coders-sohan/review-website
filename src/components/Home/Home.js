import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CourseSection from "../CourseSection/CourseSection";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
	const [courses, setCourses] = useState([]);
	useEffect(() => {
		fetch("./courseSection.JSON")
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
			<section className="bg-gray-100">
				<div className="container px-5 py-20 mx-auto">
					<div className="text-center mb-20">
						<h1 className="sm:text-4xl text-3xl font-semibold title-font text-gray-900 mb-4">
							<span className="text-red-500">Featured Courses</span>
							<br />
							<span className="text-lg tracking-widest font-semibold">
								By Professional Instructor
							</span>
						</h1>
						<div className="flex mt-6 justify-center">
							<div className="w-20 h-1 rounded-full bg-indigo-500 inline-flex"></div>
						</div>
					</div>
					<div className="flex flex-wrap -m-4">
						{courses.map((course) => (
							<CourseSection key={course.key} course={course}></CourseSection>
						))}
					</div>
					<div className="mt-20 text-center">
						<NavLink
							className="inline-flex items-center bg-indigo-500 text-white border-0 py-2 px-4 focus:ring-2 ring-indigo-700 ring-offset-2 hover:bg-indigo-700 hover:text-white rounded text-base mt-4 md:mt-0 transition duration-300 ease-linear"
							to="/courses"
						>
							<span className="mr-2">Load More</span>
							<span>
								<i className="fas fa-sync-alt text-sm"></i>
							</span>
						</NavLink>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
