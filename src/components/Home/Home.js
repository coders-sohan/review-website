import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CourseHeader from "../CourseHeader/CourseHeader";
import CourseSection from "../CourseSection/CourseSection";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
	const [courses, setCourses] = useState([]);
	useEffect(() => {
		fetch("./courses.JSON")
			.then((res) => res.json())
			.then((data) => setCourses(data));
	}, []);
	const sliceCoursesData = courses.slice(0,6);
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
					<CourseHeader></CourseHeader>
					<div className="flex flex-wrap -m-4">
						{sliceCoursesData.map((course) => (
							<CourseSection key={course.key} course={course}></CourseSection>
						))}
					</div>
					<div className="mt-20 text-center">
						<NavLink
							className="inline-flex items-center bg-indigo-500 text-white border-0 py-2 px-4 focus:ring-2 ring-indigo-700 ring-offset-2 hover:bg-indigo-700 hover:text-white rounded text-base mt-4 md:mt-0 transition duration-300 ease-linear"
							to="/courses"
						>
							<span className="mr-2 font-semibold text-lg">Load More Courses</span>
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
