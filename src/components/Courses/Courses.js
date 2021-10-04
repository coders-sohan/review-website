import React, { useEffect, useState } from "react";
import CourseHeader from "../CourseHeader/CourseHeader";
import CourseSection from "../CourseSection/CourseSection";

const Courses = () => {
	const [courses, setCourses] = useState([]);
	useEffect(() => {
		fetch("./courses.JSON")
			.then((res) => res.json())
			.then((data) => setCourses(data));
	}, []);
	return (
		<section>
			<div className="container px-5 py-10 mx-auto">
				{/* show course page title */}
				<CourseHeader></CourseHeader>
				<div className="flex flex-wrap -m-4">
					{/* map for course product */}
					{courses.map((course) => (
						<CourseSection key={course.key} course={course}></CourseSection>
					))}
				</div>
			</div>
		</section>
	);
};

export default Courses;
