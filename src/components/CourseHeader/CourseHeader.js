import React from "react";

const CourseHeader = () => {
	return (
		<>
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
		</>
	);
};

export default CourseHeader;
